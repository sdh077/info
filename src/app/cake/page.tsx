import React from 'react'

import cake1 from '@public/image/cake/cake1.jpg'
import cake2 from '@public/image/cake/cake2.jpg'
import cake3 from '@public/image/cake/cake3.jpg'
import cake4 from '@public/image/cake/cake4.jpg'
import cake5 from '@public/image/cake/cake5.jpg'
import Image, { StaticImageData } from 'next/image'

import { BsFillStarFill } from "react-icons/bs";


export default function page() {
  return (
    <div className='p-4'>
      <h1 className='text-[#FCCB4F] text-4xl'>MyCake</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
        <CakeCard image={cake4} />
        <CakeCard image={cake5} />
        <CakeCard image={cake3} />
        <CakeCard image={cake1} />
        <CakeCard image={cake2} />
        <CakeCard image={cake3} />
        <CakeCard image={cake1} />
        <CakeCard image={cake2} />
        <CakeCard image={cake3} />
        <CakeCard image={cake1} />
        <CakeCard image={cake2} />
        <CakeCard image={cake3} />
        <CakeCard image={cake1} />
        <CakeCard image={cake2} />
        <CakeCard image={cake3} />
      </div>
    </div>
  )
}

function CakeCard({ image }: { image: StaticImageData }) {
  return (
    <div className='md:mb-none'>
      <div className='relative'>
        <Image src={image} alt='cake' width={500} height={500} className='rounded-xl md:rounded-none' />
        <div className='flex flex-col justify-end gap-1 absolute bottom-0 right-0 bg-background pl-2 pt-2 opacity-80 text-md'>
          <div className=''>2024-07-14</div>
          <div>
            구매금액 58,000
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
  )
}