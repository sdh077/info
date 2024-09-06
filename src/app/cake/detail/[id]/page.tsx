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
import { CakeDetail } from "../../components/cakeDetail"

export default function CakeDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <CakeDetail />
  )
}