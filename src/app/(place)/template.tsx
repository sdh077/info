import React from 'react'

import { Navigation } from '@/components/navigation';
import { INavi } from '@/interface/navi';
import { Container } from '@/components/Container';
import navis from './navis.json'
import { MobileNavigation } from '@/components/mobilte-navigation';
import Link from 'next/link';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className='md:hidden block sticky top-0 z-50 bg-background'>
        <MobileNavigation navis={navis} />
      </div>
      <div className='sticky top-0 z-10 bg-background'
      >
        <div className=' w-full hidden md:block pt-8'>
          <Container className='flex justify-between items-start'>
            <Link href={'/'} className='text-4xl'>
              The Place
            </Link>
            <Navigation navis={navis} width='900px' />
          </Container>
        </div>
      </div>
      {children}
    </div>
  )
}
