import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '../../lib/utils'

export type CardVariant = 'default' | 'glass' | 'bordered'
export type CardPadding = 'sm' | 'md' | 'lg'

const variantClass: Record<CardVariant, string> = {
  default: 'bg-bg/70 border border-border/30 shadow-soft/30',
  glass: 'bg-white/5 border border-white/10 backdrop-blur shadow-soft/40',
  bordered: 'bg-transparent border border-border/40',
}

const paddingClass: Record<CardPadding, string> = {
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
}

export type CardProps<T extends ElementType> = {
  as?: T
  variant?: CardVariant
  padding?: CardPadding
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'className'>

const defaultElement = 'div'

function Card<T extends ElementType = typeof defaultElement>({
  as,
  variant = 'default',
  padding = 'md',
  className,
  ...props
}: CardProps<T>) {
  const Component = (as ?? defaultElement) as ElementType

  return (
    <Component
      className={cn('rounded-2xl transition', variantClass[variant], paddingClass[padding], className)}
      {...props}
    />
  )
}

export function cardBaseClass({ variant = 'default', padding = 'md' }: { variant?: CardVariant; padding?: CardPadding } = {}) {
  return cn('rounded-2xl transition', variantClass[variant], paddingClass[padding])
}

export default Card
