
import { cn } from '@/lib/utils';
import React from 'react'


const IconWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {

  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "w-11 h-11 relative flex items-center justify-center text-xl",
          className
        )}
        {...props}
      />
    </div>
  )
})
IconWrapper.displayName = "IconWrapper"

export default IconWrapper 