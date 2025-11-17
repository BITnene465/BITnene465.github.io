import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import type { PluginAPI } from 'tailwindcss/types/config'

const withOpacityValue = (variable: string) => {
  return (({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}) / 1)`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }) as unknown as string
}

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: withOpacityValue('--color-bg'),
        'bg-alt': withOpacityValue('--color-bg-alt'),
        primary: withOpacityValue('--color-primary'),
        'primary-soft': withOpacityValue('--color-primary-soft'),
        accent: withOpacityValue('--color-accent'),
        'accent-soft': withOpacityValue('--color-accent-soft'),
        'text-main': withOpacityValue('--color-text-main'),
        'text-muted': withOpacityValue('--color-text-muted'),
        border: withOpacityValue('--color-border'),
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
