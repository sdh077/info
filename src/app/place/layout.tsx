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
      menu: '종로구,중구',
      cate: '종로구,중구',
      types: [
        {
          type: '을지로',
          title: '을지로'
        },
        {
          type: '광화문',
          title: '광화문'
        },
        {
          type: '서순라길',
          title: '서순라길'
        },
        {
          type: '익선동',
          title: '익선동'
        },
        {
          type: '북촌',
          title: '북촌'
        },
        {
          type: '서촌',
          title: '서촌'
        },
        {
          type: '혜화',
          title: '혜화'
        },
        {
          type: '시청',
          title: '시청'
        },
        {
          type: '명동',
          title: '명동'
        },
        {
          type: '신당',
          title: '신당'
        }
      ]
    },
    {
      menu: '용산,이태원',
      cate: '용산,이태원',
      types: [
        {
          type: '용산',
          title: '용산'
        },
        {
          type: '후암동',
          title: '후암동'
        },
        {
          type: '이태원',
          title: '이태원'
        },
        {
          type: '신당',
          title: '신당'
        }
      ]
    },
    {
      menu: '마포,서대문구',
      cate: '마포,서대문구',
      types: [
        {
          type: '합정,망원',
          title: '합정,망원'
        },
        {
          type: '연남,연희',
          title: '연남,연희'
        },
        {
          type: '공덕',
          title: '공덕'
        }
      ]
    },
    {
      menu: '여의도,영등포',
      cate: '여의도,영등포',
      types: [
        {
          type: '여의도',
          title: '여의도'
        },
        {
          type: '영등포,문래',
          title: '영등포,문래'
        },
      ]
    },
    {
      menu: '강남,서초',
      cate: '강남,서초',
      types: [
        {
          type: '압구정',
          title: '압구정'
        },
        {
          type: '사당',
          title: '사당'
        },
        {
          type: '삼성역',
          title: '삼성역'
        },
      ]
    },
    {
      menu: '성수,잠실',
      cate: '성수,잠실',
      types: [
        {
          type: '성수,서울숲',
          title: '성수,서울숲'
        },
        {
          type: '건대',
          title: '건대'
        },
        {
          type: '잠실',
          title: '잠실'
        }
      ]
    }
  ]
  return (
    <>
      <div className='bg-background w-full py-4 w-full flex items-center justify-center sticky top-0 mb-32 z-10'>
        <Navigation navis={navis} width={'900px'} />
      </div>
      {children}
    </>
  )
}
