import { Container } from "@/components/Container";
import IconWrapper from "@/components/IconWrapper";
import { IPlace } from "@/interface/place";
import Image from "next/image";
import { BsCardText, BsGeoAlt, BsHeart, BsInstagram, BsPeople, BsShare, BsTable } from "react-icons/bs";
import places from '../place.json'


export default async function page({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const place: IPlace = places.find(place => place.id === Number(params.id)) ?? places[0]
  const box = 'w-[300px] h-[300px] bg-black flex justify-center items-center flex-col p-4'
  return (
    <div>
      <Container className="my-8">
        <header className='flex items-center justify-between'>
          <div>
            <h1 className="text-2xl">{place.title}</h1>
            <h4 className="text-gray">{place.cate} / {place.type}</h4>
          </div>
          <div className="flex gap-4">
            <IconWrapper><BsInstagram /></IconWrapper>
            <IconWrapper><BsShare /></IconWrapper>
          </div>
        </header>
      </Container>
      <section className="w-full relative h-[80vh]">
        <Image src={place.images[0]} alt="" fill className="object-cover" />
      </section>
      <section className="my-8">
        <Container>
          <div className="flex gap-4 items-center">
            <IconWrapper><BsGeoAlt /></IconWrapper>
            <div>{place.location}</div>
          </div>
          <div className="flex gap-4 items-center">
            <IconWrapper><BsTable /></IconWrapper>
            <div>{place.timetable}</div>
          </div>
          <div className="flex gap-4 items-baseline">
            <IconWrapper><BsCardText /></IconWrapper>
            <div>{place.description}</div>
          </div>
        </Container>
      </section>
      <section className="my-8 h-96 w-full relative">
        <Image src={place.images[1]} alt="background" fill className="object-cover w-full h-full" />

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center text-white z-10 justify-start">
          <div className="flex gap-12 mx-auto">
            <div className={box}>
              <BsPeople className="text-4xl" />
              <div className="text-xl">Kids 가능</div>
              <div className="text-sm">오픈에어 발레, 뷰티룸, 사우나, 대리석 스팀룸이 완비되어 있습니다. 스파 내 트리트먼트 룸, 손님 객실 또는 아윤계곡을 바라보는 발레에서 전통적인 발리산 소재를 사용한 바디&뷰티 트리트먼트를 즐기실 수 있습니다.
              </div>
            </div>
            <div className={box}>
              <BsPeople className="text-4xl" />
              <div className="text-xl">Kids 가능</div>
              <div className="text-sm">오픈에어 발레, 뷰티룸, 사우나, 대리석 스팀룸이 완비되어 있습니다. 스파 내 트리트먼트 룸, 손님 객실 또는 아윤계곡을 바라보는 발레에서 전통적인 발리산 소재를 사용한 바디&뷰티 트리트먼트를 즐기실 수 있습니다.
              </div>
            </div>
            <div className={box}>
              <BsPeople className="text-4xl" />
              <div className="text-xl">Kids 가능</div>
              <div className="text-sm">오픈에어 발레, 뷰티룸, 사우나, 대리석 스팀룸이 완비되어 있습니다. 스파 내 트리트먼트 룸, 손님 객실 또는 아윤계곡을 바라보는 발레에서 전통적인 발리산 소재를 사용한 바디&뷰티 트리트먼트를 즐기실 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>

      </footer>
    </div>
  )
}
