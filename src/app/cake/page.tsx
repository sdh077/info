import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { BsFillStarFill } from "react-icons/bs";
import { Metadata } from 'next'
import { IShop, ICake } from '@/interface/cake'
import { CakeCard } from './components/cakeCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "MyCake",
  description: "내가 주문한 레터링 케이크 자랑",
};



export default function page() {
  const shop: IShop = {
    id: 1,
    title: '루시',
    profile: '/image/place/sddler2.jpeg'
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
