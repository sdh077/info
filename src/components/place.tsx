'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { IPlace } from '@/interface/place'


export function Place({ place, isView }: { place: IPlace, isView: boolean }) {
  return (
    <div className={`rounded-sm grid md:grid-cols-2 gap-8 md:w-[1080px]`}>
      <PlaceImageCarousel images={place.images} />
      <div className='flex flex-col justify-between gap-8 mx-6 md:mx-0'>
        <div >
          <div className='text-3xl font-medium'>{place.title} <span className='text-xs text-[#999] font-regular'>{place.subTitle}</span></div>
          <div className='border-b mt-4 mb-8' />
          <div className='flex flex-col gap-2'>
            {place.snsLink && <span>
              <Link href={place.snsLink} className='text-[#E0F1FF]'>
                {place.sns}
              </Link>
            </span>}
            <div>
              위치: {place.location}
            </div>
            <div>
              운영시간 : {place.timetable}
            </div>
            <div>
              {place.description}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <Link href={`/place/${place.id}`}
            className='flex items-center justify-center h-9 w-full cursor-pointer rounded-md'
            style={{ border: '1px solid rgb(221, 221, 221)' }}
          >상세
          </Link>
          <Link href={place.placeLink}
            className='flex items-center justify-center h-9 w-full cursor-pointer rounded-md'
            style={{ border: '1px solid rgb(221, 221, 221)' }}
          >방문
          </Link>
          <div className='flex items-center justify-center h-9 w-full cursor-pointer rounded-md'
            style={{ border: '1px solid rgb(221, 221, 221)' }}
          >저장
          </div>
        </div>
      </div>
    </div>
  )
}
export function PlaceImageCarousel({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi} className=''>
      <CarouselContent className='h-[500px]'>
        {images.map(image =>
          <CarouselItem key={image}>
            <div className='w-full h-[500px] overflow-hidden relative'>
              <Image src={image}
                className='rounded-md'
                // width={560}
                // height={560}
                fill
                alt=''
                style={{
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className='absolute left-4 top-[50%]' />
      <CarouselNext className='absolute right-4 top-[50%]' />

      <Pagination className='absolute z-10 -mt-16'>
        <PaginationContent>
          {Array.from({ length: count }).map((_, i) =>
            <PaginationItem key={i}>
              <PaginationLink onClick={() => api?.scrollTo(i)}><div className={cn("rounded-full w-1 h-1 p-1", current === i + 1 ? 'bg-primary' : 'bg-[#D9D9D9]')}></div></PaginationLink>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
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