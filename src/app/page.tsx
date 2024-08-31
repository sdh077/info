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

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const items: IContent[] = [
    {
      id: 1,
      source: 'video',
      cate: 'exercise',
      type: 'waist',
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
      cate: 'wellbeing',
      type: 'supplement',
      link: '/video/wellbeing.mp4',
      poster: '/image/wellbeing_thumb.jpg'
    },
    {
      id: 4,
      source: 'video',
      cate: 'food',
      type: 'diet',
      link: '/video/food.mp4',
      poster: '/image/food_thumb.jpg'
    },
    {
      id: 5,
      source: 'video',
      cate: 'exercise',
      type: 'waist',
      link: '/video/exercise.mp4',
      poster: '/image/exercise_thumb.jpg'
    },
    {
      id: 6,
      source: 'video',
      cate: 'food',
      type: 'diet',
      link: '/video/food.mp4',
      poster: '/image/food_thumb.jpg'
    },
    {
      id: 7,
      source: 'card',
      cate: 'order',
      type: 'starbucks',
      title: '추천메뉴1 시그니쳐 초콜릿 (샷추가, 진하게, 휘핑많이)',
      description: ['샷추가는 무조건 밤샘 가능하신거 아시쥬?', '급하게 날 새야할때 이거 한잔 마셔보세요!'],
      poster: '/image/starbucks/starbucks1.jpg'
    },
    {
      id: 8,
      source: 'card',
      cate: 'order',
      type: 'starbucks',
      title: '추천메뉴2 망고패션티 블렌디드 (티 빼고 얼음 만땅)',
      description: ['스타벅스 숙취 음료'],
      poster: '/image/starbucks/starbucks2.jpg'
    }
  ]
  const filterItem = items.filter(item => {
    if (!searchParams.cate) return true
    if (!searchParams.type) return item.cate === searchParams.cate
    return item.cate === searchParams.cate && item.type === searchParams.type
  })

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        className="py-4 w-full flex items-center justify-center bg-black text-white"
      >
        꿀팁 저장소
      </div>
      <div
        className="py-4 w-full flex items-center justify-center sticky top-0 mb-32"
        style={{ background: 'linear-gradient(54.09deg,#0348dd 2.03%,#8142f5 48.63%,#ee4dd4 96.22%)' }}
      >
        <Navigation />
      </div>
      <div className="md:w-[1200px] mx-4">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          {filterItem.map(content => {
            if (isVideo(content)) {
              return <Video key={content.id} content={content} />
            } else if (isCard(content)) {
              return <InfoCard key={content.id} content={content} />
            }
          })}
        </div>
      </div>
    </main>
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
    <div>
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
