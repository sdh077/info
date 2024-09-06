import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BsArrowUp } from "react-icons/bs";
import { Textarea } from '@/components/ui/textarea';
import StarRating from './starRating';

export default function page() {
  return (
    <div className='grid grid-cols-2 w-full'>
      <div className='flex items-center justify-center'><InputFile /></div>
      <div className='w-min-[50%] mx-6 flex flex-col gap-8'>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">제목</Label>
          <Input type="title" id="title" placeholder="제목 추가" className='w-full rounded-[12px] bg-gray text-black' />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">가격</Label>
          <Input type="title" id="title" placeholder="제목 추가" className='w-full rounded-[12px] bg-gray text-black' />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">평점</Label>
          <StarRating />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="description">설명</Label>
          <Textarea id="description" placeholder="설명 추가" className='w-full rounded-[12px] bg-gray text-black' />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">제목</Label>
          <Input type="title" id="title" placeholder="제목 추가" className='w-full rounded-[12px] bg-gray text-black' />
        </div>
      </div>
    </div>
  )
}


export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 cursor-pointer">
      <Label htmlFor="picture" className='w-[373px] h-[451px] bg-[#E9E9E9] rounded-[32px] flex flex-col gap-4 items-center justify-center text-black relative'>
        <div className='text-4xl'><BsArrowUp /></div>
        <div>
          파일을 선택하거나 여기로 끌어다 놓으세요.
        </div>
        <div className='absolute bottom-[70px]'>20MB 미안의 고화질 .jpg 파일 사용을 권장합니다.</div>
      </Label>
      <Input id="picture" type="file" className='hidden' />
    </div>
  )
}