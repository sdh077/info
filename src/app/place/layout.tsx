import React from 'react'

import { Navigation } from '@/components/navigation';
import { INavi } from '@/interface/navi';
import { Container } from '@/components/Container';
import navis from './navis.json'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Container className="my-8">
        <div className='text-4xl'>
          INFO
        </div>
      </Container>
      <div className='sticky top-0 z-10'
      >
        <div className='bg-background w-full'>
          <Container className='flex justify-center'>
            <Navigation navis={navis} width='900px' />
          </Container>
        </div>
      </div>
      {children}
    </div>
  )
}
