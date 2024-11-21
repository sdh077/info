'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Cookies from 'js-cookie'
import cookieSet from '@/app/actions'

const ChoiceMode = () => {
  const mode = Cookies.get('mode') ?? 'cafe'
  const handleMode = (mode: string) => cookieSet('mode', mode)
  return (

    <div className='flex gap-2'>
      <div onClick={() => handleMode('cafe')} className={cn(mode === 'cafe' ? 'text-black font-semibold' : 'text-gray-400', 'font-semibold cursor-pointer hover:text-primary', 'text-lg')}>카페</div>
      <div onClick={() => handleMode('food')} className={cn(mode === 'food' ? 'text-black font-semibold' : 'text-gray-400', 'font-semibold cursor-pointer hover:text-primary', 'text-lg')}>음식점</div>
    </div>
  )
}

export default ChoiceMode