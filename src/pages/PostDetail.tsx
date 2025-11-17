import { useParams } from 'react-router-dom'

function PostDetail() {
  const { slug } = useParams()

  return (
    <section className="space-y-4">
      <p className="text-xs uppercase tracking-[0.4em] text-primary">step two</p>
      <h1 className="text-3xl font-semibold">Post placeholder</h1>
      <p className="text-text-muted">
        Slug detected: <span className="text-text-main font-mono">{slug}</span>
      </p>
      <p className="text-text-muted">
        Once MDX is wired, this page will render article content and metadata, including external link
        support for link-type posts.
      </p>
    </section>
  )
}

export default PostDetail
