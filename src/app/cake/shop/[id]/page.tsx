import React from 'react'
import { CakeCard } from '../../components/cakeCard'
import { IShop, ICake } from '@/interface/cake'
import Image from 'next/image'

export default function page({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
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
    <div>
      <div className='my-16 flex items-center justify-start gap-16'>
        <Image src={shop.profile} width={200} height={200} alt='shop profile' className='aspect-square rounded-full object-cover' />
        <div>
          <h1 className='text-4xl'>{shop.title}</h1>
          <div>게시물 <span className='font-semibold'>312</span></div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
        {cakes.map(cake =>
          <CakeCard cake={cake} key={cake.id} />
        )}
      </div>
    </div>
  )
}
