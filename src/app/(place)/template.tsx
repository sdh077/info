import React from 'react'

import dynamic from 'next/dynamic';
import Header from '@/widget/header';

const FloatingActionButton = dynamic(() => import('@/components/floatingButton'), { ssr: false })

export default async function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      {/* <FloatingActionButton /> */}
    </div >
  )
}
