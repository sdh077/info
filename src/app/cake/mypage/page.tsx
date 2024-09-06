'use client'
import React, { useState } from 'react'
import { CakeCard } from '../components/cakeCard'
import { IShop, ICake } from '@/interface/cake'
import Image from 'next/image'
import { BsBookmark, BsCardList } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function CakeCardList({ cakes }: { cakes: ICake[] }) {
  const [choice, setChoice] = useState(2);

  return (
    <div>
      <nav className='flex items-center justify-center border-t py-4 gap-4'>
        <Button variant={'ghost'} onClick={() => setChoice(2)} className={cn('flex items-center gap-4', choice === 2 ? 'bg-accent' : '')}><BsBookmark />저장됨</Button>
        <Button variant={'ghost'} onClick={() => setChoice(1)} className={cn('flex items-center gap-4', choice === 1 ? 'bg-accent' : '')}><BsCardList />내 케이크</Button>
      </nav>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
        {cakes.filter(cake => choice === 2 ? true : cake.id === choice).map(cake =>
          <CakeCard cake={cake} key={cake.id} />
        )}
      </div>
    </div>
  )
}

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
  const user = {
    profile: '/image/profile/profile-rec.png',
    name: '임현주'
  }
  return (
    <div>
      <div className='my-16 flex items-center justify-start gap-16'>
        <Image src={user.profile} width={200} height={200} alt='shop profile' className='aspect-square rounded-full object-cover' />
        <div>
          <h1 className='text-4xl'>{user.name}</h1>
        </div>
      </div>
      <CakeCardList cakes={cakes} />
    </div>
  )
}
