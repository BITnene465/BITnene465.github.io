import Section from '../components/ui/Section'

const tagFilters = ['all', 'research', 'note', 'link', 'anime', 'tools']
const typeFilters = ['All', 'Article', 'Note', 'Link']

const placeholderPosts = [
  {
    title: 'Diffusion Simplicity Notes',
    date: '2025-11-09',
    tags: ['research', 'note'],
    type: 'Article',
    summary: 'Thinking through minimal baselines for controllable diffusion demos.',
  },
  {
    title: 'Anime Shader Inspiration Pack',
    date: '2025-11-03',
    tags: ['playground', 'link'],
    type: 'Link',
    summary: 'External collection of stylized rendering guides that influence Playground art.',
  },
  {
    title: 'Reading Graph Surgery Papers',
    date: '2025-10-28',
    tags: ['research'],
    type: 'Note',
    summary: 'Snapshot of the references informing the Graph-Guided Model Editing project.',
  },
]

function Blog() {
  return (
    <div className="space-y-12">
      <Section
        eyebrow="blog"
        title="Writing & curation"
        description="This MDX-backed blog will mix long-form articles, short notes, and curated external links."
      >
        <p className="text-sm text-text-muted">
          Step five will connect the MDX loader and PostCard component. Until then, this scaffold provides
          the exact layout hierarchy for hero copy, filters, and the post list.
        </p>
      </Section>

      <Section
        eyebrow="filters"
        title="Tag & type filters"
        description="Filter buttons will be generated dynamically using post metadata."
      >
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-text-muted">tags</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {tagFilters.map((tag) => (
                <span key={tag} className="rounded-full border border-border/40 px-4 py-2 text-sm text-text-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-text-muted">type</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {typeFilters.map((type) => (
                <span key={type} className="rounded-full bg-bg-alt/60 px-4 py-2 text-sm text-text-main">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="posts"
        title="Latest entries"
        description="Each item mirrors the shape of a forthcoming PostCard component."
      >
        <div className="space-y-4">
          {placeholderPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-border/30 bg-bg/70 p-5 transition hover:border-accent/50"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-text-muted">{post.date}</p>
                  <h3 className="text-xl font-semibold text-text-main">{post.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
                  <span className="rounded-full border border-border px-3 py-1 text-text-main">
                    {post.type}
                  </span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-text-muted">{post.summary}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Blog
