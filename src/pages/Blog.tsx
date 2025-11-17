import { useMemo, useState } from 'react'
import Section from '../components/ui/Section'
import PostCard from '../components/content/PostCard'
import { getAllPosts, getAllTags, type PostType } from '../lib/mdx'
import Button from '../components/ui/Button'

const posts = getAllPosts()
const tagFilters = ['all', ...getAllTags()]
const typeFilters: Array<{ label: string; value: 'all' | PostType }> = [
  { label: 'All', value: 'all' },
  { label: 'Article', value: 'article' },
  { label: 'Note', value: 'note' },
  { label: 'Link', value: 'link' },
]

function Blog() {
  const [activeTag, setActiveTag] = useState<string>('all')
  const [activeType, setActiveType] = useState<'all' | PostType>('all')

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const tagMatch = activeTag === 'all' || post.tags.includes(activeTag)
      const typeMatch = activeType === 'all' || post.type === activeType
      return tagMatch && typeMatch
    })
  }, [activeTag, activeType])

  return (
    <div className="space-y-12">
      <Section
        eyebrow="blog"
        title="Writing & curation"
        description="MDX-powered articles, notes, and link drops that connect the research portfolio to the Playground."
      >
        <p className="text-sm text-text-muted">
          Every post lives under <code>src/posts</code> with frontmatter defining title, date, tags, type, and optional
          summary/externalUrl fields. Update those files to publish new entries.
        </p>
      </Section>

      <Section
        eyebrow="filters"
        title="Tag & type filters"
        description="Filters update instantly without extra network calls thanks to import.meta.glob caching."
      >
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-text-muted">tags</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {tagFilters.map((tag) => (
                <Button
                  key={tag}
                  variant={activeTag === tag ? 'primary' : 'ghost'}
                  size="md"
                  onClick={() => setActiveTag(tag)}
                >
                  #{tag}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-text-muted">type</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {typeFilters.map((type) => (
                <Button
                  key={type.value}
                  variant={activeType === type.value ? 'soft' : 'ghost'}
                  size="md"
                  onClick={() => setActiveType(type.value)}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="posts"
        title="Latest entries"
        description="Rendered with PostCard so future visual polish is centralized."
      >
        {filteredPosts.length === 0 ? (
          <p className="text-sm text-text-muted">No posts match the selected filters yet.</p>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}

export default Blog
