import React from 'react'

import { Navigation } from '@/components/navigation';
import { getServerSession } from "next-auth/next"
import { Container } from '@/components/Container';
import naviObject from './navis.json'
import { MobileNavigation } from '@/components/mobilte-navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LoginDropdown } from '@/components/LoginDropdown';

const FloatingActionButton = dynamic(() => import('@/components/floatingButton'), { ssr: false })

export default async function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navis = Object.entries(naviObject).map(([id, value]) => ({ id: Number(id), ...value }))
  return (
    < div >
      <div className='md:hidden block sticky top-0 z-50 bg-background'>
        <MobileNavigation navis={navis} />
      </div>
      <div className='sticky top-0 z-10 bg-background border-b-2'
      >
        <div className=' w-full hidden md:block pt-8 '>
          <Container className='flex justify-between items-center'>
            <Link href={'/'} className='text-4xl font-bold'>
              The Place
            </Link>
            <Navigation navis={navis} width='900px' />
            {/* <LoginDropdown /> */}
          </Container>
        </div>
      </div>
      {children}
      <FloatingActionButton />
    </div >
  )
}
