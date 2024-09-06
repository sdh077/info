'use client'
import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { BsHeart, BsBookmark, BsShare, BsChevronRight } from "react-icons/bs";


import { ICake, IShop } from "@/interface/cake"
import Image from "next/image"
import IconWrapper from "@/components/IconWrapper"
import Link from "next/link"

export function CakeDetail() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

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
  if (isDesktop) {
    return (
      <div className="flex w-full max-w-[80vw] h-[80vh] items-center">
        <div className="max-w-[calc(80vw-64px-64px)] max-h-[calc(80vh-40px)] w-[50%] overflow-hidden flex items-center justify-center">
          <div className="aspect-square w-full relative flex">
            <Image src={cake.image} fill alt="cake" className="object-cover" />
          </div>
        </div>
        <ProfileForm cake={cake} />
      </div>
    )
  }

  return (
    <div></div>
    // <DrawerContent>
    //   <ProfileForm className="px-4" cake={cake} />
    //   <DrawerFooter className="pt-2">
    //     <DrawerClose asChild>
    //       <Button variant="outline">Cancel</Button>
    //     </DrawerClose>
    //   </DrawerFooter>
    // </DrawerContent>
  )
}

function ProfileForm({ className, cake }: React.ComponentProps<"form"> & { cake: ICake }) {
  return (
    <div className={cn("flex flex-col gap-4 h-full justify-between w-[60vh] max-w-[500px] grow m-8", className)}>
      <h1 className="text-xl font-semibold flex gap-2 items-center h-[50px]">
        <Image src={'/image/profile/profile-rec.png'} alt='profile' width={28} height={20} className="rounded-full" />
        {cake.title}
      </h1>
      <hr />
      <div className="grow">
        <div>{cake.date}</div>
        <div>{cake.description}</div>
      </div>
      <hr />
      <div className="flex">
        <IconWrapper><BsHeart /></IconWrapper>
        <IconWrapper><BsBookmark /></IconWrapper>
        <IconWrapper><BsShare /></IconWrapper>
      </div>
      <hr />
      <Link href={`/cake/shop/${cake.shop.id}`} className='flex items-center justify-between gap-4 w-full'>
        <div className='flex items-center gap-4'>
          <div><Image src={'/image/place/sddler2.jpeg'} alt='shop' width={48} height={48} /></div>
          <div>
            <div className="font-semibold">
              {cake.shop.title}
            </div>
            <div>
              shop 소개, link
            </div>
          </div>
        </div>
        <IconWrapper>
          <BsChevronRight />
        </IconWrapper>
      </Link>
    </div>
  )
}