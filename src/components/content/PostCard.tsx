import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { PostMeta } from '../../lib/mdx'
import { cardHover, cardTransition } from '../../lib/motion'
import { cardBaseClass } from '../ui/Card'
import Tag from '../ui/Tag'
import { cn } from '../../lib/utils'

interface PostCardProps {
  post: PostMeta
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const MotionLink = motion(Link)

function PostCard({ post }: PostCardProps) {
  return (
    <MotionLink
      to={`/blog/${post.slug}`}
      className={cn(
        cardBaseClass({ variant: 'default', padding: 'md' }),
        'flex flex-col gap-3 hover:border-accent/50'
      )}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      transition={cardTransition}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-text-muted">{formatDate(post.date)}</p>
          <h3 className="text-xl font-semibold text-text-main flex items-center gap-2">
            {post.title}
            {post.type === 'link' && <span className="text-xs text-accent">↗</span>}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-text-muted">
          <Tag tone="accent" size="sm">
            {post.type}
          </Tag>
          {post.tags.map((tag) => (
            <Tag key={tag} tone="outline" size="sm">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      {post.summary && <p className="text-sm text-text-muted">{post.summary}</p>}
    </MotionLink>
  )
}

export default PostCard
