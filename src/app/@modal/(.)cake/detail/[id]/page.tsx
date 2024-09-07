'use client'
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
    <DrawerDialogDemo><CakeDetailPage params={{
      id: id
    }} /></DrawerDialogDemo>
  )
}

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'

export function DrawerDialogDemo({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const router = useRouter();

  function onDismiss(open: boolean) {
    if (!open) router.back();
    setOpen(open)
  }
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onDismiss}>
        <DialogContent className="m-full">
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onDismiss}>
      <DrawerContent>
        {children}
      </DrawerContent>
    </Drawer>
  )
}

