import { Place } from "@/components/place";
import { IPlace } from "@/interface/place";


export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const places: IPlace[] = [
    {
      id: 1,
      source: "",
      cate: "종로구,중구",
      type: "을지로",
      images: ['/image/place/pky.jpg', '/image/place/pky2.jpg'],
      title: '평균율',
      subTitle: 'LP',
      sns: '@pky_seoul',
      snsLink: 'https://www.instagram.com/pky_seoul/',
      location: '서울 중구 충무로4길 3',
      timetable: '17:00 ~ 24:00',
      description: '매주 월 휴무 매일 운영시간 달라 확인 필수 저녁6시까지는 커피를 맛볼 수 있으며 저녁 7시부터는 바로 운영되는 공간이다. 좋은 사운드로 폭 넓은 음악을 감상하며 커피와 다양한 술을 즐길 수 있다.',
      placeLink: 'https://naver.me/5Q4GPhxe',
    },
    {
      id: 2,
      source: "",
      cate: "종로구,중구",
      type: "을지로",
      images: ['/image/place/tenone1.jpg', '/image/place/tenone2.jpg'],
      title: '십분의일',
      subTitle: '와인바',
      sns: '@sipboon_il',
      snsLink: 'https://www.instagram.com/sipboon_il/',
      location: '서울 중구 수표로 42-9, 2F',
      timetable: '18:00 ~ 24:00',
      description: 'est.2016 십분의일이 모여서 하나를 만든다 All tenths make the ONE',
      placeLink: 'https://naver.me/5y4qqIEB'
    },
    {
      id: 3,
      source: "",
      cate: "마포,서대문구",
      type: "합정,망원",
      images: ['/image/place/comma1.jpeg', '/image/place/comma2.jpeg'],
      title: '카페꼼마 합정점',
      subTitle: '카페,디저트',
      sns: '@cafecomma__official',
      snsLink: 'https://www.instagram.com/cafecomma__official',
      location: '서울 마포구 포은로 49',
      timetable: '10:00 ~ 22:00',
      description: '일상을 여행처럼',
      placeLink: 'https://naver.me/FIgqtcS8'
    }
  ]
  const filterItem = places.filter(item => {
    if (!searchParams.cate) return true
    if (!searchParams.type) return item.cate === searchParams.cate
    return item.cate === searchParams.cate && item.type === searchParams.type
  })
  return (
    <div className='grid grid-cols-1 gap-16'>
      {filterItem.map(place =>
        <Place key={place.title} place={place} />
      )}
    </div>
  )
}
