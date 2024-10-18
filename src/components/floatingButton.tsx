'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FilterState } from '@/lib/constants'
import { revalidateTag } from 'next/cache';
import { cn } from '@/lib/utils';
import Cookies from 'js-cookie'
import cookieSet from '@/app/actions'
export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const handleState = (value: string) => {
    cookieSet('pfs', value)
    setIsOpen(false);
  }
  const pfs = Cookies.get('pfs') ?? '전체';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col-reverse items-end space-y-4 space-y-reverse">
      <Button
        variant="default"
        size="icon"
        className="rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          pfs
        )}
        <span className="sr-only">토글 메뉴</span>
      </Button>

      <div className={cn(`flex gap-2 scale-up-center`, isOpen ? 'flex' : 'hidden')}>
        {FilterState.map((item, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={cn("transition-all duration-200 ease-in-out w-16", item.name === pfs ? 'text-black bg-gray-200' : '')}
            style={{
              transform: `translateY(${isOpen ? '0' : '20px'})`,
              opacity: isOpen ? 1 : 0,
              transitionDelay: `${index * 50}ms`
            }}
            onClick={() => handleState(item.name.toString())}
          >
            <span>{item.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}