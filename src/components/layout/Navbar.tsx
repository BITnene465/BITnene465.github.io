import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Playground', path: '/playground' },
]

const activeClass = 'text-accent'
const baseClass =
  'text-sm font-medium text-text-muted hover:text-text-main transition-colors duration-200'

function Navbar() {
  return (
    <header className="w-full border-b border-border/50 bg-bg/80 backdrop-blur">
      <div className="page-wrapper py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold">
            BT
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-text-muted">research lab</p>
            <p className="text-lg font-semibold text-text-main">BITnene465</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <nav className="flex flex-wrap items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar
