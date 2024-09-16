'use client'

import { useState } from 'react'
import { Plus, X, Bell, Settings, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFilterStore } from '@/stores/filter-store-provider'

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, changeState } = useFilterStore(state => state);

  const toggleButtons = [
    { icon: Bell, label: '알림' },
    { icon: Settings, label: '설정' },
    { icon: User, label: '프로필' },
  ]

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
          <Plus className="h-6 w-6" />
        )}
        <span className="sr-only">토글 메뉴</span>
      </Button>
      {isOpen && (
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              className="transition-all duration-200 ease-in-out w-full"
              style={{
                transform: `translateY(${isOpen ? '0' : '20px'})`,
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`
              }}
              onClick={() => changeState({ ...item, isUse: !item.isUse })}
            >
              <span className={item.isUse ? '' : 'text-gray'}>{item.name}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}