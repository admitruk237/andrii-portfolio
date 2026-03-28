import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `flex h-[48px] w-full rounded-md border border-border focus:border-accent font-light bg-primary px-4 py-5 text-base
        placeholder:text-muted-foreground outline-none`,
        className,
      )}
      {...props}
    />
  )
}

export { Input }
