import { IPlace } from "@/interface/place";
import Tile from "./Tile";
import CustomPagination from "@/components/Pagination";
import navis from '@/lib/navis.json'
import { cookies } from 'next/headers'
import Map from "@/components/map";
import { getPlace } from "@/data/server";

type NaviKeys = keyof typeof navis;

export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const pageNo = Number(searchParams.pageNo ?? '1')
  const cate = searchParams.cate as NaviKeys;
  const subcate = searchParams.subcate as string;

  const activeNavi = navis[cate]
  const pfs = cookies().get('pfs')?.value ?? ''
  const mode = cookies().get('mode')?.value ?? 'cafe'

  const { data: places, count } = await getPlace(activeNavi?.cate ?? [], subcate, pfs, mode, pageNo)
  return (
    <div className='container'>
      <Tile places={places ?? []} />
      {/* <Map places={places ?? []} /> */}
      {!!count && <CustomPagination total={Math.ceil(count / 9)} />}
    </div>
  )
}

