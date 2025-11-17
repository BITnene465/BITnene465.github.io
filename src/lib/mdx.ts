import type { ComponentType } from 'react'

export type PostType = 'article' | 'note' | 'link'

export interface PostMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  type: PostType
  summary?: string
  externalUrl?: string
  component: ComponentType
}

interface RawPostModule {
  default: ComponentType
  frontmatter: Pick<PostMeta, 'title' | 'date' | 'tags' | 'type' | 'summary' | 'externalUrl'>
}

const postModules = import.meta.glob('../posts/**/*.mdx', { eager: true }) as Record<string, RawPostModule>

function filenameToSlug(filePath: string): string {
  const fileName = filePath.split('/').pop()?.replace(/\.mdx$/, '') ?? ''
  const match = fileName.match(/^\d{4}-\d{2}-\d{2}-(.+)$/)
  return match ? match[1] : fileName
}

function normalizePost(path: string, mod: RawPostModule): PostMeta {
  return {
    slug: filenameToSlug(path),
    title: mod.frontmatter.title,
    date: mod.frontmatter.date,
    tags: mod.frontmatter.tags,
    type: mod.frontmatter.type,
    summary: mod.frontmatter.summary,
    externalUrl: mod.frontmatter.externalUrl,
    component: mod.default,
  }
}

const cache: PostMeta[] = Object.entries(postModules)
  .map(([path, mod]) => normalizePost(path, mod))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getAllPosts(): PostMeta[] {
  return cache
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  return cache.find((post) => post.slug === slug)
}

export function getAllTags(): string[] {
  const set = new Set<string>()
  cache.forEach((post) => post.tags.forEach((tag) => set.add(tag)))
  return Array.from(set).sort()
}
