"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { INavi } from "@/interface/navi"
import { usePathname, useSearchParams } from "next/navigation"
import { Button } from "./ui/button"



export function Navigation({ navis, width }: { navis: INavi[], width?: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const cate = Number(searchParams.get('cate') ?? '0')
  return (
    <NavigationMenu className="bg-background container justify-start py-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={'/'} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              전체
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {navis.map(navi => {
          return <NavigationMenuItem key={navi.id}>
            <Link href={`/?cate=${navi.id}`} legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), cate === navi.id ? 'text-primary' : '')}>
                {navi.menu}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        }
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
