import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import Section from '../components/ui/Section'
import { getPostBySlug } from '../lib/mdx'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function PostDetail() {
  const { slug } = useParams()
  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug])

  if (!post) {
    return (
      <Section
        eyebrow="blog"
        title="Post not found"
        description="The slug you followed does not map to a published entry yet."
      >
        <Link to="/blog" className="text-primary hover:text-accent">
          ← Back to blog
        </Link>
      </Section>
    )
  }

  const Article = post.component

  return (
    <div className="space-y-10">
      <Section
        eyebrow="blog"
        title={post.title}
        description={post.summary ?? 'MDX entry'}
        actions={
          post.externalUrl && (
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm text-text-main hover:border-accent hover:text-accent"
            >
              Open original ↗
            </a>
          )
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-text-muted">{formatDate(post.date)}</p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
            <span className="rounded-full border border-border px-3 py-1 text-text-main">{post.type}</span>
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-2 py-1 lowercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-p:text-text-muted">
        <MDXProvider>
          <Article />
        </MDXProvider>
      </article>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link to="/blog" className="text-primary hover:text-accent">
          ← Back to blog
        </Link>
      </div>
    </div>
  )
}

export default PostDetail
