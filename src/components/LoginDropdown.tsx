'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"
import IconWrapper from "@/components/IconWrapper";
import { BsPerson, BsPlus } from "react-icons/bs";
import Link from "next/link"
import Cookies from "js-cookie"

export function LoginDropdown() {
  const { data: session, status } = useSession()
  const handleSignOut = () => {
    Cookies.set('user', '')
    Cookies.remove('user')
    signOut()
  }
  if (status === 'loading') return <div></div>
  if (session) return (
    <div className="flex gap-1">
      <Link href={'/request'} className="">
        <IconWrapper><BsPlus /></IconWrapper>
      </Link>
      <Link href={'/mypage'} className="">
        <IconWrapper><BsPerson /></IconWrapper>
      </Link>
      <button className="" onClick={() => handleSignOut()}>Sign out</button>
    </div>
  )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">LOGIN</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>SOCIAL</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => signIn('naver', { callbackUrl: '/' })}
          >
            <Image className="mr-2" src='/image/social/naver.png' width={16} height={16} alt="naver login" />
            <div>NAVER</div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
