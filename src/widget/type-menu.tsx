'use client'
import { Button } from '@/components/ui/button'
import { useCreateQueryString } from '@/hooks/use-create-query-string'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const TypeMenu = ({ cate }: { cate: { type: string, title: string }[] }) => {
  const queryString = useCreateQueryString()
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const subcate = params.get('subcate') as string
  if (!cate.length) return <></>
  return (
    <div className="container my-4 flex gap-4 w-full overflow-x-auto border-b-[1px] pb-4">
      {cate.map(({ type, title }) =>
        <Link href={`${pathname}?${queryString("subcate", title)}`} key={title}>
          <Button
            variant={subcate === title ? "linkActive" : "link"} key={title}>{title}
          </Button>
        </Link>
      )}
    </div>
  )
}

export default TypeMenu