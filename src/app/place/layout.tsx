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
      menu: '서울 카페',
      cate: 'seoul cafe',
      types: [
        {
          type: 'jongro',
          title: '종로'
        },
        {
          type: 'jongro',
          title: '종로'
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
    },
    {
      menu: '제주',
      cate: 'jeju',
      types: [
        {
          type: 'airport',
          title: '공항'
        },
        {
          type: 'aewol',
          title: '애월'
        },
        {
          type: 'hamdeok',
          title: '함덕'
        }
      ]
    },
  ]
  return (
    <>
      <div className='bg-black w-full py-4 w-full flex items-center justify-center sticky top-0 mb-32'>
        <Navigation navis={navis} />
      </div>
      {children}
    </>
  )
}
