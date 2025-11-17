import type { ReactNode } from 'react'

interface SectionProps {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
}

function Section({ eyebrow, title, description, actions, children }: SectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2 max-w-2xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.4em] text-accent/80">{eyebrow}</p>
          )}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-text-main">{title}</h2>
            {description && <p className="text-text-muted">{description}</p>}
          </div>
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
      <div className="rounded-3xl border border-border/30 bg-white/5 backdrop-blur px-6 py-8 shadow-soft/40">
        {children}
      </div>
    </section>
  )
}

export default Section
