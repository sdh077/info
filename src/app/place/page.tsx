import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import pky from '@public/image/mood/pky.jpg'
import pky2 from '@public/image/mood/pky2.jpg'

export default async function page() {
  return (
    <div className='grid grid-cols-1 gap-16'>
      <Place />
      <Place />
      <Place />
    </div>
  )
}
async function Place() {
  return (
    <div>
      <div className='rounded-sm grid grid-cols-2 gap-8 w-[1080px]'>
        <PlaceImageCarousel />
        <div className='flex flex-col justify-between'>
          <div>
            <div className='text-3xl font-medium'>평균율 <span className='text-xs text-[#999] font-regular'>LP바</span></div>
            <div className='border-b mt-4 mb-8' />
            <Link href={'https://www.instagram.com/pky_seoul/'} className='text-[#E0F1FF]'>
              @pky_seoul
            </Link>
            <div>
              위치: 서울 중구 충무로4길 3
            </div>
            <div>
              운영시간 : 17:00 ~ 24:00 / 매주 월 휴무 매일 운영시간 달라 확인 필수 저녁6시까지는 커피를 맛볼 수 있으며 저녁 7시부터는 바로 운영되는 공간이다. 좋은 사운드로 폭 넓은 음악을 감상하며 커피와 다양한 술을 즐길 수 있다.
            </div>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <Link href={'https://map.naver.com/p/entry/place/1306187552?c=15.36,0,0,0,dh'}
              className='flex items-center justify-center h-9 w-full cursor-pointer'
              style={{ border: '1px solid rgb(221, 221, 221)' }}
            >방문
            </Link>
            <div className='flex items-center justify-center h-9 w-full cursor-pointer'
              style={{ border: '1px solid rgb(221, 221, 221)' }}
            >저장
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function PlaceImageCarousel() {
  return (
    <Carousel className=''>
      <CarouselContent className='h-[500px]'>
        <CarouselItem className=''>
          <Image src={pky}
            width={560}
            height={300}
            alt=''
            style={{
              objectFit: 'cover',
              height: '100%'
            }}
          />
        </CarouselItem>
        <CarouselItem className=''>
          <Image src={pky2}
            width={560}
            height={300}
            alt=''
            style={{
              objectFit: 'cover',
              height: '100%'
            }}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className='absolute left-4 top-[50%]' />
      <CarouselNext className='absolute right-4 top-[50%]' />
    </Carousel>
  )
}
function PlaceImage() {
  return (
    <div className='flex h-[200px]'>
      <div className='overflow-hidden'>
        <Image src={'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230905_182%2F1693870222779yuHWK_JPEG%2F8F99D736-8067-49F9-944D-7FDDFA71BBF6.jpeg'}
          width={200}
          height={200}
          alt=''
          objectFit='cover'
        />
      </div>
      <div className='grid grid-cols-2'>
        <Image src={'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221127_148%2F1669539805230Fizai_JPEG%2F09DCC143-EC31-46C4-A8A7-C87AF843C03B.jpeg'}
          width={100}
          height={100}
          alt=''
          objectFit='cover'
        />
        <Image src={'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221127_148%2F1669539805230Fizai_JPEG%2F09DCC143-EC31-46C4-A8A7-C87AF843C03B.jpeg'}
          width={100}
          height={100}
          alt=''
          objectFit='cover'
        />
        <Image src={'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221127_148%2F1669539805230Fizai_JPEG%2F09DCC143-EC31-46C4-A8A7-C87AF843C03B.jpeg'}
          width={100}
          height={100}
          alt=''
          objectFit='cover'
        />
        <Image src={'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221127_148%2F1669539805230Fizai_JPEG%2F09DCC143-EC31-46C4-A8A7-C87AF843C03B.jpeg'}
          width={100}
          height={100}
          alt=''
          objectFit='cover'
        />
      </div>
    </div>
  )
}