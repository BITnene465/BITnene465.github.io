import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'default' | 'accent' | 'outline'
  size?: 'sm' | 'md'
  transform?: 'caps' | 'none'
}

const toneClass: Record<NonNullable<TagProps['tone']>, string> = {
  default: 'bg-white/5 text-text-main',
  accent: 'bg-accent/20 text-accent border border-accent/40',
  outline: 'border border-border text-text-muted',
}

const sizeClass: Record<NonNullable<TagProps['size']>, string> = {
  sm: 'text-xs px-3 py-1',
  md: 'text-sm px-4 py-1.5',
}

const transformClass: Record<NonNullable<TagProps['transform']>, string> = {
  caps: 'uppercase tracking-[0.3em]',
  none: 'tracking-tight',
}

function Tag({ tone = 'default', size = 'sm', transform = 'caps', className, ...props }: TagProps) {
  return (
    <span
      className={cn('rounded-full', toneClass[tone], sizeClass[size], transformClass[transform], className)}
      {...props}
    />
  )
}

export default Tag
