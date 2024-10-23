import { type NextRequest } from 'next/server'
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import file from '@public/theplace.json'
import { JsonDB, Config } from 'node-json-db';


export async function GET(request: NextRequest) {
  const db = new JsonDB(new Config("public/theplace.json", true, false, '/'));
  return Response.json(await db.getData('/'))
}

export const dynamic = 'force-static'
function saveJsonToFile<T>(filename: string, jsonData: T) {
  fs.writeFile(`public/${filename}`, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File has been saved');
    }
  });
}
export async function PUT(request: NextRequest) {
  const req = await request.json()
  const ids: string[] = req.ids;
  const subType = req.subType ?? []
  const places: any = []
  for (const id of ids) {
    const url = `https://pcmap.place.naver.com/restaurant/${id}/home`;

    await axios.get(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        // 스크립트 태그 내에서 'window.__APOLLO_STATE__'이 포함된 내용을 찾아냄
        $('script').each((index, element) => {
          const scriptContent = $(element).html() || '';
          if (scriptContent.includes('window.__APOLLO_STATE__')) {
            const script = scriptContent.match(/window\.__APOLLO_STATE__ = ({.*});/)
            if (script) {
              const apolloStateString = script[1];
              const place = JSON.parse(apolloStateString)[`PlaceDetailBase:${id}`];
              places.push(place)
            }
          }
        });
      })
      .catch(error => {
        console.error('Error fetching the page:', error);
      });
  }
  for (const place of places) {
    file.push({
      id: Number(place.id),
      source: '',
      cate: place.roadAddress.split(' ')[1],
      type: '',
      images: [place.id + ".jpg", `${place.id}-2.jpg`],
      title: place.name,
      subTitle: place.category,
      sns: '',
      snsLink: '',
      location: place.roadAddress,
      timetable: '',
      description: place.conveniences ?? [],
      placeLink: `https://map.naver.com/p/entry/place/${place.id}`,
      categories: [],
      subType,
      position: { px: Number(place.coordinate.x), py: Number(place.coordinate.y) }
    })
  }
  saveJsonToFile('theplace.json', file)
  return Response.json(places)

}