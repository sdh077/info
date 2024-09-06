import React from 'react'

import cake1 from '@public/image/cake/cake1.jpg'
import cake2 from '@public/image/cake/cake2.jpg'
import cake3 from '@public/image/cake/cake3.jpg'
import cake4 from '@public/image/cake/cake4.jpg'
import cake5 from '@public/image/cake/cake5.jpg'
import Image, { StaticImageData } from 'next/image'

import { BsFillStarFill } from "react-icons/bs";
import { Metadata } from 'next'
import { DrawerDialogDemo } from './cakeDetail'
import { IShop, ICake } from '@/interface/cake'

export const metadata: Metadata = {
  title: "MyCake",
  description: "내가 주문한 래터링 케이크 자랑",
};

export default function page() {
  const shop: IShop = {
    id: 1,
    title: '루시'
  }
  const cakes: ICake[] = [
    {
      id: 1,
      image: '/image/cake/cake1.jpg',
      title: '얼그레이 케이크',
      description: '매우맹매앰애매 맛있어요',
      date: '2024-07-14',
      price: 58000,
      recommend: true,
      shop: shop
    },
    {
      id: 2,
      image: '/image/cake/cake2.jpg',
      title: '1주년 기념 케이크 인증',
      description: '매우맹매앰애매 맛있어요',
      date: '2024-07-15',
      price: 58000,
      recommend: false,
      shop: shop
    },
    {
      id: 3,
      image: '/image/cake/cake3.jpg',
      title: '1주년 기념 케이크 인증',
      description: '매우맹매앰애매 맛있어요',
      date: '2024-07-15',
      price: 58000,
      recommend: false,
      shop: shop
    },
    {
      id: 4,
      image: '/image/cake/cake4.jpg',
      title: '1주년 기념 케이크 인증',
      description: '매우맹매앰애매 맛있어요',
      date: '2024-07-15',
      price: 58000,
      recommend: false,
      shop: shop
    },
    {
      id: 5,
      image: '/image/cake/cake5.jpg',
      title: '1주년 기념 케이크 인증',
      description: '매우맹매앰애매 맛있어요',
      date: '2024-07-15',
      price: 58000,
      recommend: false,
      shop: shop
    }
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
      {cakes.map(cake =>
        <CakeCard cake={cake} key={cake.id} />
      )}
    </div>
  )
}

function CakeCard({ cake }: { cake: ICake }) {

  return (
    <DrawerDialogDemo cake={cake}>
      <div className='md:mb-none cursor-pointer'>
        <div className='relative'>
          <Image src={cake.image} alt='cake' width={500} height={500} className='rounded-xl md:rounded-none' />
          <div className='flex flex-col justify-end gap-1 absolute bottom-0 right-0 bg-background pl-2 pt-2 opacity-80 text-md'>
            <div className=''>{cake.date}</div>
            <div>
              구매금액 {cake.price}
            </div>
            <div className='flex gap-1'>
              <div>맛</div>
              <div className='flex items-center justify-start'>
                <BsFillStarFill color='#FCCB4F' />
                <BsFillStarFill color='#FCCB4F' />
                <BsFillStarFill color='#FCCB4F' />
                <BsFillStarFill />
                <BsFillStarFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DrawerDialogDemo>
  )
}