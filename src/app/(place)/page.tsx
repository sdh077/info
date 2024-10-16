import { Container } from "@/components/Container";
import { IPlace } from "@/interface/place";
import places from './theplace.json'
import PlaceBox from "./placeBox";
import Tile from "./Tile";
import CustomPagination from "@/components/Pagination";
import navis from './navis.json'
import { cookies } from 'next/headers'

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
  const pfs = cookies().get('pfs')?.value
  const totalItems = places.filter(item => {
    if (!activeNavi) return true
    if (!searchParams.type) return activeNavi.cate.some(cate => cate === item.cate)
    return item.cate === searchParams.cate && item.type === searchParams.type
  }).filter(item => {
    if (!pfs || pfs === '전체') return true
    return item.categories.some(category => category === pfs)
  }) as IPlace[]

  const filterItem: IPlace[] = totalItems.slice((pageNo - 1) * 12, pageNo * 12)
  return (
    <Container className=''>
      <Tile places={filterItem} />
      <CustomPagination total={Math.ceil(totalItems.length / 12)} />
    </Container>
  )
}

