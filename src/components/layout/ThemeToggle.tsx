import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`切换到${isDark ? '浅色' : '深色'}模式`}
      className="relative inline-flex size-10 items-center justify-center rounded-full border border-border/50 bg-bg-alt/70 text-text-main shadow-soft/30 backdrop-blur transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -20, scale: 0.85 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 20, scale: 0.85 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 1.5v3" />
      <path d="M12 19.5v3" />
      <path d="m4.22 4.22 2.12 2.12" />
      <path d="m17.66 17.66 2.12 2.12" />
      <path d="M1.5 12h3" />
      <path d="M19.5 12h3" />
      <path d="m4.22 19.78 2.12-2.12" />
      <path d="m17.66 6.34 2.12-2.12" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3a8.46 8.46 0 0 0 0 17 8.5 8.5 0 0 0 11.5-5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ThemeToggle
