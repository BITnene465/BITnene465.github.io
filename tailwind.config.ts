import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import type { PluginAPI } from 'tailwindcss/types/config'

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
  typography: (theme: PluginAPI['theme']) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.text-muted'),
            '--tw-prose-headings': theme('colors.text-main'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.text-main'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.text-main'),
            '--tw-prose-code': theme('colors.accent-soft'),
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
