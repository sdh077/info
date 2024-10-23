'use client'
import { Button } from '@/components/ui/button'
import { useCreateQueryString } from '@/hooks/use-create-query-string'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const TypeMenu = ({ cate }: { cate: { type: string, title: string }[] }) => {
  const queryString = useCreateQueryString()
  const pathname = usePathname()
  return (
    <div className="container my-4 flex gap-4">
      {cate.map(({ type, title }) =>
        <Link href={`${pathname}?${queryString("subcate", title)}`} key={title}>
          <Button
            variant="link" key={title}>{title}
          </Button>
        </Link>
      )}
    </div>
  )
}

export default TypeMenu