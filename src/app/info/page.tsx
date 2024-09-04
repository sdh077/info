'use client'
import { useEffect } from 'react';
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import exerciseThumb from '@public/image/exercise_thumb.jpg'
import foodThumb from '@public/image/food_thumb.jpg'
import { Navigation } from "@/components/navigation";
import { InfoCard } from '@/components/infoCard';
import { IContent, isVideo, isCard, IVideo } from '@/interface/info';
import { INavi } from '@/interface/navi';

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const navis: INavi[] = [
    {
      menu: '주문',
      cate: 'order',
      types: [
        {
          type: 'starbucks',
          title: '스타벅스'
        }
      ]
    },
    {
      menu: '건강',
      cate: 'health',
      types: [
        {
          type: 'exercise',
          title: '운동'
        },
        {
          type: 'supplement',
          title: '영양제'
        }
      ]
    },
    {
      menu: '요리',
      cate: 'food',
      types: [
        {
          type: 'diet',
          title: '다이어트'
        }
      ]
    }
  ]
  const items: IContent[] = [
    {
      id: 1,
      source: 'video',
      cate: 'health',
      type: 'exercise',
      link: '/video/exercise.mp4',
      poster: '/image/exercise_thumb.jpg',
    },
    {
      id: 2,
      source: 'video',
      cate: 'food',
      type: 'diet',
      link: '/video/food.mp4',
      poster: '/image/food_thumb.jpg'
    },
    {
      id: 3,
      source: 'video',
      cate: 'health',
      type: 'supplement',
      link: '/video/wellbeing.mp4',
      poster: '/image/wellbeing_thumb.jpg'
    },
    {
      id: 6,
      source: 'card',
      cate: 'order',
      type: 'starbucks',
      title: '시그니쳐 초콜릿',
      subTitle: '추천메뉴1',
      description: ['샷추가, 진하게, 휘핑많이', '샷추가는 무조건 밤샘 가능하신거 아시쥬?', '급하게 날 새야할때 이거 한잔 마셔보세요!'],
      poster: ['/image/starbucks/starbucks1.jpg', '/image/starbucks/starbucks2.jpg', '/image/starbucks/starbucks3.jpg']
    },
    {
      id: 7,
      source: 'card',
      cate: 'order',
      type: 'starbucks',
      title: '시그니쳐 초콜릿',
      subTitle: '추천메뉴1',
      description: ['샷추가, 진하게, 휘핑많이', '샷추가는 무조건 밤샘 가능하신거 아시쥬?', '급하게 날 새야할때 이거 한잔 마셔보세요!'],
      poster: '/image/starbucks/starbucks1.jpg'
    },
    {
      id: 8,
      source: 'card',
      cate: 'order',
      type: 'starbucks',
      title: '망고패션티 블렌디드',
      subTitle: '추천메뉴2',
      description: ['티 빼고 얼음 만땅', '스타벅스 숙취 음료'],
      poster: '/image/starbucks/starbucks2.jpg'
    },
    {
      id: 9,
      source: 'card',
      cate: 'order',
      type: 'starbucks',
      title: '바닐라 더블샷 ',
      subTitle: '추천메뉴3',
      description: ['바닐라 라떼 +', '더블샷 or 헤이즐넛 더블샷', '얼음 추가시, tall 사이즈 음료에 담아서 주니 참고하세요!'],
      poster: '/image/starbucks/starbucks3.jpg'
    },
    {
      id: 10,
      source: 'card',
      cate: 'order',
      type: 'starbucks',
      title: '바닐라 크림 콜드브루',
      subTitle: '추천메뉴4',
      description: ['다이어트 메뉴로 당이 낮아요!'],
      poster: '/image/starbucks/starbucks4.jpg'
    }
  ]
  const filterItem = items.filter(item => {
    if (!searchParams.cate) return true
    if (!searchParams.type) return item.cate === searchParams.cate
    return item.cate === searchParams.cate && item.type === searchParams.type
  })

  return (
    <>
      <div
        className="py-4 w-full flex items-center justify-center sticky top-0 mb-32"
        style={{ background: 'linear-gradient(54.09deg,#0348dd 2.03%,#8142f5 48.63%,#ee4dd4 96.22%)' }}
      >
        <Navigation navis={navis} />
      </div>
      <div className="">
        <div className="flex flex-col">
          {filterItem.map(content => {
            if (isVideo(content)) {
              return <Video key={content.id} content={content} />
            } else if (isCard(content)) {
              return <InfoCard key={content.id} content={content} />
            }
          })}
        </div>
      </div>
    </>
  );
}
function SearchTop() {
  return (
    <div
      className="h-64 w-full flex items-center justify-center"
      style={{ background: 'linear-gradient(54.09deg,#0348dd 2.03%,#8142f5 48.63%,#ee4dd4 96.22%)' }}
    >
      <Input type="text" placeholder="instagram link" className="w-[500px]" />
      <Button>추가</Button>
    </div>
  )
}
function Video({ content }: { content: IVideo }) {
  return (
    <div className='border'>
      <video controls preload="none" poster={content.poster}>
        <source src={content.link} type="video/mp4" />
        <track
          src="/image/exercise_thumb.jpg"
          kind="subtitles"
          srcLang="ko"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
