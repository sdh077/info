import { Container } from "@/components/Container";
import { IPlace } from "@/interface/place";
import places from './place.json'
import PlaceBox from "./placeBox";
import Tile from "./Tile";

export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const filterItem: IPlace[] = places.filter(item => {
    if (!searchParams.cate) return true
    if (!searchParams.type) return item.cate === searchParams.cate
    return item.cate === searchParams.cate && item.type === searchParams.type
  })
  return (
    <Container className=''>
      {!searchParams.type ?
        <Tile places={filterItem} /> :
        <PlaceBox places={filterItem} />
      }
    </Container>
  )
}

