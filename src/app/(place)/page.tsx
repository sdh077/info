import { Container } from "@/components/Container";
import { IPlace } from "@/interface/place";
import places from './place.json'
import places2 from './place2.json'
import PlaceBox from "./placeBox";
import Tile from "./Tile";
import CustomPagination from "@/components/Pagination";
import navis from './navis.json'
import { NEXT_PUBLIC_URL } from "@/lib/constants";

export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const pageNo = Number(searchParams.pageNo ?? '1')
  const cate = Number(searchParams.cate as string);
  const activeNavi = navis.find(navi => navi.id === cate)
  const cafes = places2.map(place => ({
    id: Number(place.sid),
    source: '',
    cate: place.address.split(' ')[1],
    type: '',
    images: ["/image/place2/" + place.sid + ".jpg", `/image/place2/${place.sid}.jpg`],
    title: place.name,
    subTitle: place.mcidName,
    sns: '',
    snsLink: '',
    location: place.address,
    timetable: '',
    description: place.placeInfo.category,
    placeLink: `https://map.naver.com/p/entry/place/${place.sid}`,
    categories: []
  })) as IPlace[]

  const totalItems = cafes.filter(item => {
    if (!activeNavi) return true
    if (!searchParams.type) return activeNavi.cate.some(cate => cate === item.cate)
    return item.cate === searchParams.cate && item.type === searchParams.type
  })

  const filterItem: IPlace[] = totalItems.slice((pageNo - 1) * 12, pageNo * 12)
  return (
    <Container className=''>
      {!searchParams.type ?
        <Tile places={filterItem} /> :
        <PlaceBox places={filterItem} />
      }
      <CustomPagination total={Math.ceil(totalItems.length / 12)} />
    </Container>
  )
}

