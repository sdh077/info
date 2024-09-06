import React from 'react'
import { ICake, IShop } from '@/interface/cake'
import { CakeCard } from '@/app/cake/components/cakeCard'
import { Modal } from './modal'
import { CakeDetail } from '@/app/cake/components/cakeDetail';
import CakeDetailPage from '@/app/cake/detail/[id]/page';

export default function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const shop: IShop = {
    id: 1,
    title: '루시',
    profile: '/image/place/sddler2.jpeg'
  }
  const cake: ICake =
  {
    id: 1,
    image: '/image/cake/cake1.jpg',
    title: '얼그레이 케이크',
    description: '매우맹매앰애매 맛있어요',
    date: '2024-07-14',
    price: 58000,
    recommend: true,
    shop: shop
  }
  return (
    <Modal><CakeDetailPage params={{
      id: id
    }} /></Modal>
  )
}
