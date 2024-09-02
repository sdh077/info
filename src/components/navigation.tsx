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
import { usePathname } from "next/navigation"



export function Navigation({ navis, width }: { navis: INavi[], width?: string }) {
  const pathname = usePathname()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={pathname} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              전체
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {navis.map(navi => {
          return navi.types.length ?
            <NavigationMenuItem key={navi.cate} className="relative">
              <NavigationMenuTrigger>{navi.menu}</NavigationMenuTrigger>
              <NavigationMenuContent className="right-0 left-auto">
                <ul className="grid gap-3 p-4 grid-cols-4" style={{ width: width ?? '500px' }}>
                  <ListItem href={`${pathname}?cate=${navi.cate}`} title={`ALL`}>
                  </ListItem>
                  {navi.types.map(type =>
                    <ListItem key={type.type} href={`${pathname}?cate=${navi.cate}&type=${type.type}`} title={type.title}>
                    </ListItem>
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            :
            <NavigationMenuItem key={navi.cate}>
              <Link href={`${pathname}?cate=${navi.cate}`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
