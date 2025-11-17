export interface Project {
  id: string
  name: string
  period?: string
  role?: string
  description: string
  tags?: string[]
  links?: {
    github?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'holoboard',
    name: 'HoloBoard',
    period: '2024 — present',
    role: 'Lead',
    description: 'Collaborative whiteboard with agent-assisted annotation for research retros.',
    tags: ['collaboration', 'agents'],
    links: {
      demo: '#',
    },
  },
  {
    id: 'celshade',
    name: 'CelShade Avatar Lab',
    period: '2023 — 2024',
    role: 'Contributor',
    description: 'Pipeline for stylized avatars used in posters and talk openers.',
    tags: ['design', 'playground'],
    links: {
      github: 'https://github.com/BITnene465/celshade',
    },
  },
  {
    id: 'aurora-lab',
    name: 'Aurora Lab Platform',
    period: '2021 — 2023',
    role: 'Staff ML Engineer',
    description: 'Internal platform aligning creative tooling experiments with reproducible ML workflows.',
    tags: ['platform', 'mlops'],
  },
]
