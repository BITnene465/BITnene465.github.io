export interface Profile {
  name: string
  tagline: string
  bio: string
  location?: string
  currentPosition?: string
  researchAreas: string[]
  contacts: {
    email?: string
    github?: string
    scholar?: string
    twitter?: string
    [key: string]: string | undefined
  }
  values: { title: string; description: string }[]
  timeline: {
    year: string
    title: string
    description?: string
  }[]
}

export const profile: Profile = {
  name: 'Dr. Tan',
  tagline: 'Graph reasoning, creative tooling, anime-inspired research UX.',
  bio: 'Independent researcher crafting safer model editing workflows and whimsical playgrounds for sharing results.',
  location: 'Beijing · Remote-first',
  currentPosition: 'Independent Researcher @ BIT Lab',
  researchAreas: ['Model editing', 'Graph ML', 'Creative tooling', 'Playable docs'],
  contacts: {
    email: 'hi@drtan.lab',
    github: 'https://github.com/BITnene465',
    scholar: 'https://scholar.google.com/example',
    twitter: 'https://x.com/drtan_lab',
  },
  values: [
    { title: 'Kind rigor', description: 'Pair technical depth with empathy for collaborators.' },
    { title: 'Playable research', description: 'Prototype ideas quickly so others can “press start”.' },
    { title: 'Document the path', description: 'Treat every project as a chance to leave better notes.' },
  ],
  timeline: [
    {
      year: '2025',
      title: 'Independent Researcher',
      description: 'Exploring graph-based model editing and visual storytelling.',
    },
    {
      year: '2023',
      title: 'ML Engineer @ Aurora Lab',
      description: 'Led creative tooling initiatives with diffusion teams.',
    },
    {
      year: '2021',
      title: 'M.S. BIT',
      description: 'Focused on trustworthy optimization and HCI.',
    },
  ],
}
