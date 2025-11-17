declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const frontmatter: {
    title: string
    date: string
    tags: string[]
    type: 'article' | 'note' | 'link'
    summary?: string
    externalUrl?: string
  }

  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
