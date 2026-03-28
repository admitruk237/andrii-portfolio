import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef, TextareaHTMLAttributes } from 'react'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
}

const Textarea = ({ className, ...props }: Props) => {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        `flex min-h-[80px] w-full rounded-md border border-border bg-primary px-4 py-5 text-base
      placeholder:text-muted-foreground focus:border-accent outline-none disabled:cursor-not-allowed disabled:opacity-50`,
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
