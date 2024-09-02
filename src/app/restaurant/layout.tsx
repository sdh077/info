import React from 'react'

import { Navigation } from '@/components/navigation';
import { INavi } from '@/interface/navi';


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navis: INavi[] = [
    {
      menu: '1호선',
      cate: '1호선',
      types: [
        {
          type: '1-1',
          title: '가디, 독산'
        },
        {
          type: '1-2',
          title: '구로, 신도림'
        },
        {
          type: '1-3',
          title: '영등포'
        },
        {
          type: '1-4',
          title: '노량진'
        },
        {
          type: '1-5',
          title: '용산'
        },
        {
          type: '1-6',
          title: '서울역'
        },
        {
          type: '1-7',
          title: '시청'
        },
        {
          type: '1-8',
          title: '종각'
        },
        {
          type: '1-9',
          title: '종로3가'
        },
        {
          type: '1-10',
          title: '종로5가'
        },
        {
          type: '1-11',
          title: '동대문역'
        },
        {
          type: '1-12',
          title: '동묘앞역, 신설동역'
        },
        {
          type: '1-13',
          title: '청량리역'
        },
        {
          type: '1-14',
          title: '회기역'
        }
      ]
    },
    {
      menu: '서울 분위기',
      cate: 'seoul mood',
      types: [
        {
          type: 'LP',
          title: 'LP'
        },
        {
          type: 'jongro',
          title: '종로'
        }
      ]
    }
  ]
  return (
    <>
      <div className='bg-background w-full py-4 w-full flex items-center justify-center sticky top-0 mb-32 z-10'>
        <Navigation navis={navis} />
      </div>
      {children}
    </>
  )
}
