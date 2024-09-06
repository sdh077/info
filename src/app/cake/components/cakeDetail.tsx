'use client'
import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
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


import { ICake } from "@/interface/cake"
import Image from "next/image"
import IconWrapper from "@/components/IconWrapper"
import Link from "next/link"
type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children: React.ReactNode
}
export function DrawerDialogDemo<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  cake,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T> & { cake: ICake }) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="flex w-full max-w-[80vw] h-[80vh]">
          <div className="max-w-[calc(80vw-64px-64px)] max-h-[calc(80vh-40px)] w-[50%] overflow-hidden flex items-center justify-center">
            <div className="aspect-square w-full relative flex">
              <Image src={cake.image} fill alt="cake" className="object-cover" />
            </div>
          </div>
          <ProfileForm cake={cake} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <ProfileForm className="px-4" cake={cake} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className, cake }: React.ComponentProps<"form"> & { cake: ICake }) {
  return (
    <div className={cn("flex flex-col gap-4 h-full justify-between w-[60vh] max-w-[500px] grow", className)}>
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
