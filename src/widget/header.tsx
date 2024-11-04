'use client'
import React from 'react'

import { Navigation } from '@/components/navigation';
import { getServerSession } from "next-auth/next"
import { Container } from '@/components/Container';
import naviObject from '@/lib/navis.json'
import { MobileNavigation } from '@/components/mobilte-navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LoginDropdown } from '@/components/LoginDropdown';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ChoiceMode from './choice-mode';
import TypeMenu from './type-menu';
import { useSearchParams } from 'next/navigation'

type NaviKeys = keyof typeof naviObject;

export default function Header() {
  const navis = Object.entries(naviObject).map(([id, value]) => ({ id: Number(id), ...value }))

  const searchParams = useSearchParams()

  const cate = searchParams.get('cate') as NaviKeys
  const subCate = cate ? naviObject[cate]?.types : []
  return (
    <>
      <div className='md:hidden block sticky top-0 z-50 bg-background'>
        <MobileNavigation navis={navis} />
      </div>
      <div className='sticky top-0 z-50 bg-background '
      >
        <div className=' w-full hidden md:block pt-4 '>
          <div className='w-full flex justify-between items-center container pb-2'>
            <Link href={'/'} className='text-4xl font-bold'>
              The Place
            </Link>
            <ChoiceMode />
            <LoginDropdown />
          </div>
          <div className='border-b-2' />
          <Navigation navis={navis} width='900px' />
          {!!subCate.length && <>
            <TypeMenu cate={subCate} />
            <div className='border-b-2' />
          </>}
        </div>
      </div>
    </>
  )
}
