"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { INavi } from "@/interface/navi"
import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"



export function MobileNavigationUl({ navis }: { navis: INavi[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-2">
            {navis.map((navi, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium text-base">{navi.menu}</h4>
                <MobileLink href={`/place?cate=${navi.cate}`}
                  onOpenChange={setOpen}
                  className="text-muted-foreground text-sm"
                >
                  전체
                </MobileLink>
                {navi.types.map(type =>
                  <MobileLink key={type.type}
                    onOpenChange={setOpen}
                    href={`/place?cate=${navi.cate}&type=${type.type}`}
                    className="text-muted-foreground text-sm"
                  >
                    {type.title}
                  </MobileLink>
                )}
              </div>
            ))}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}


export function MobileNavigation({ navis }: { navis: INavi[] }) {
  return (
    <div className='flex items-center'>
      <MobileNavigationUl navis={navis} />
      <div>INFO</div>
    </div>
  )
}
interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}
function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

