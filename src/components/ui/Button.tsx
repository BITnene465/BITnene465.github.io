import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export type ButtonVariant = 'primary' | 'soft' | 'ghost'
export type ButtonSize = 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const baseClass =
  'inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:pointer-events-none'

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:text-white focus-visible:text-white active:text-white visited:text-white shadow-[0_12px_30px_rgba(79,70,229,0.35)] hover:bg-primary-soft hover:shadow-[0_14px_36px_rgba(79,70,229,0.45)] active:scale-[0.99]',
  soft: 'bg-white/10 text-text-main hover:bg-white/20 dark:text-white',
  ghost: 'border border-border text-text-main hover:border-accent hover:text-accent',
}

const sizeClass: Record<ButtonSize, string> = {
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function buttonVariants({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}) {
  return cn(baseClass, variantClass[variant], sizeClass[size], className)
}

function Button({ variant = 'primary', size = 'md', className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonVariants({ variant, size, className })} {...props} />
}

export default Button
