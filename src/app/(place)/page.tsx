import { IPlace } from "@/interface/place";
import Tile from "./Tile";
import CustomPagination from "@/components/Pagination";
import navis from './navis.json'
import { cookies } from 'next/headers'
import Map from "@/components/map";
import TypeMenu from "@/widget/type-menu";
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

  const { data: places, count } = await getPlace(activeNavi?.cate ?? [], subcate, pfs, pageNo)
  const subCate = cate ? navis[cate]?.types : []
  return (
    <div className=''>
      {!!subCate.length && <TypeMenu cate={subCate} />}
      <div className="relative mt-8 flex flex-col md:flex-row items-start justify-start w-full container gap-8">
        <Tile places={places ?? []} />
        <Map places={places ?? []} />
      </div>
      {!!count && <CustomPagination total={Math.ceil(count / 9)} />}
    </div>
  )
}

