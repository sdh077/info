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
import { cookies } from 'next/headers';
import { cn } from '@/lib/utils';
import ChoiceMode from './choice-mode';


export default async function Header() {
  const navis = Object.entries(naviObject).map(([id, value]) => ({ id: Number(id), ...value }))
  return (
    <>
      <div className='md:hidden block sticky top-0 z-50 bg-background'>
        <MobileNavigation navis={navis} />
      </div>
      <div className='sticky top-0 z-50 bg-background border-b-2'
      >
        <div className=' w-full hidden md:block pt-8 '>
          <div className='flex justify-between items-center container'>
            <Link href={'/'} className='text-4xl font-bold'>
              The Place
            </Link>
            <ChoiceMode />
            <Navigation navis={navis} width='900px' />
            {/* <LoginDropdown /> */}
          </div>
        </div>
      </div>
    </>
  )
}
