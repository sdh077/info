
import { cn } from '@/lib/utils';
import React from 'react'

export default function IconWrapper({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("w-11 h-11 relative flex items-center justify-center text-xl", className)}>{children}</div>
  )
}
