import React from 'react'

import { Navigation } from '@/components/navigation';
import { INavi } from '@/interface/navi';
import { Container } from '@/components/Container';
import navis from './navis.json'
import { MobileNavigation } from '@/components/mobilte-navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className='md:hidden block'>
        <MobileNavigation navis={navis} />
      </div>
      <Container className="my-8 hidden md:block">
        <div className='text-4xl'>
          INFO
        </div>
      </Container>
      <div className='sticky top-0 z-10'
      >
        <div className='bg-background w-full hidden md:block'>
          <Container className='flex justify-center'>
            <Navigation navis={navis} width='900px' />
          </Container>
        </div>
      </div>
      {children}
    </div>
  )
}
