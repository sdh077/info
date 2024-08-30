import { type NextRequest } from 'next/server'
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

export const dynamic = 'force-static'

export async function GET(request: NextRequest, { params }: { params: { url: string } }) {
  // const url = params.url
  // if (!url) {
  //   return new Response('URL is required', {
  //     status: 404,
  //   })
  // }
  // const browser = await puppeteer.launch({ headless: true });
  // const page = await browser.newPage();

  // // 인스타그램 릴스 페이지로 이동
  // await page.goto(`https://www.instagram.com/p/${url}`, { waitUntil: 'networkidle2' });

  // // 비디오 URL 추출
  // const videoUrl = await page.evaluate(() => {
  //   const video = document.querySelector('video');
  //   return video ? video.src : null;
  // });

  // if (!videoUrl) {
  //   return new Response('Video URL not found', {
  //     status: 404,
  //   })
  // }

  // if (!videoUrl) return
  // console.log('videoResponse', videoUrl)
  const videoUrl = 'blob:https://www.instagram.com/d201450c-e921-4e25-8874-b15e32994a74'

  var xhr = new XMLHttpRequest();
  xhr.open('GET', videoUrl, true);
  xhr.responseType = 'blob';
  xhr.onload = async function () {
    if (this.status == 200) {
      var videoBlob = this.response;
      var buffer = await videoBlob.arrayBuffer();
      buffer = Buffer.from(buffer)
      const videoPath = path.resolve('./public', 'reel.mp4');
      fs.createWriteStream(videoPath).write(buffer);
      // myBlob is now the blob that the object URL pointed to.
    }
  };
  xhr.send();


  // if (!videoStream) {
  //   return new Response('Failed to download video', {
  //     status: 400,
  //   })
  // }

  // const videoPath = path.resolve('./public', 'reel.mp4');
  // const writer = fs.createWriteStream(videoPath);

  // const reader = videoStream.getReader();
  // const pump = () =>
  //   reader.read().then(({ done, value }) => {
  //     if (done) {
  //       writer.end();
  //       return Response.json({ success: true, downloadPath: '/reel.mp4' });
  //     }

  //     writer.write(value);
  //     pump();
  //   });

  // pump();
}