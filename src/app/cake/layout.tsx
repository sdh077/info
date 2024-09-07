import React from 'react'

import cake1 from '@public/image/cake/cake1.jpg'
import cake2 from '@public/image/cake/cake2.jpg'
import cake3 from '@public/image/cake/cake3.jpg'
import cake4 from '@public/image/cake/cake4.jpg'
import cake5 from '@public/image/cake/cake5.jpg'
import Image, { StaticImageData } from 'next/image'

import { BsFillStarFill } from "react-icons/bs";
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "MyCake",
  description: "내가 주문한 레터링 케이크 자랑",
};

export default function CakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='m-4 font-family-cake w-full md:w-[1080px]'>

      <h1 className='text-[#FCCB4F] text-4xl my-8 mx-4'>
        <Link href={'/cake'}>
          내가만든케이크
        </Link>
      </h1>
      {children}
    </div>
  )
}
