import React from 'react'
import Image from 'next/image'

import { BsFillStarFill } from "react-icons/bs";
import { ICake } from '@/interface/cake'
import Link from 'next/link';

export function CakeCard({ cake }: { cake: ICake }) {

  return (
    <Link className="relative w-full h-full md:mb-none card" key={cake.id} href={`/cake/detail/${cake.id}`} passHref>
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
    </Link>
  )
}