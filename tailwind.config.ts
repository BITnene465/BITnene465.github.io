import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0f1117',
        'bg-alt': '#181b23',
        primary: '#7c7bff',
        'primary-soft': '#9d9cfb',
        accent: '#5de4c7',
        'accent-soft': '#a0ffe6',
        'text-main': '#e2e8f0',
        'text-muted': '#94a3b8',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(13,16,23,0.35)',
      },
      backgroundImage: {
        'grid-glow':
          'linear-gradient(120deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(60deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config
