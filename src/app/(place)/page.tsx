import { IPlace } from "@/interface/place";
import places from '@/data/theplace.json'
import Tile from "./Tile";
import CustomPagination from "@/components/Pagination";
import navis from './navis.json'
import { cookies } from 'next/headers'
import Map from "@/components/map";
import TypeMenu from "@/widget/type-menu";

export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const pageNo = Number(searchParams.pageNo ?? '1')
  const cate = Number(searchParams.cate as string);
  const subcate = searchParams.subcate as string;
  const activeNavi = navis.find(navi => navi.id === cate)
  const pfs = cookies().get('pfs')?.value
  const totalItems = places.filter(item => {
    if (!activeNavi) return true
    if (!subcate) return activeNavi.cate.some(cate => cate === item.cate)
    return activeNavi.cate.some(cate => (cate === item.cate)) && item.subType.includes(subcate)
  }).filter(item => {
    if (!pfs || pfs === '전체') return true
    return item.categories.some(category => category === pfs)
  }) as IPlace[]

  const subCate = navis.find(n => n.id === cate)?.types ?? []
  const filterItem: IPlace[] = totalItems.slice((pageNo - 1) * 12, pageNo * 12)
  return (
    <div className=''>
      <TypeMenu cate={subCate} />
      <div className="relative mt-8 flex flex-col md:flex-row">
        <Tile places={filterItem} />
        <Map />
      </div>
      <CustomPagination total={Math.ceil(totalItems.length / 12)} />
    </div>
  )
}

