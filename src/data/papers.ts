export interface Paper {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  tags: string[]
  links?: {
    pdf?: string
    code?: string
    video?: string
    slides?: string
  }
  highlight?: boolean
  summary?: string
}

export const papers: Paper[] = [
  {
    id: 'ggme-2025',
    title: 'Graph-Guided Model Editing for Safer Agents',
    authors: ['Dr. Tan', 'Lian Song', 'Amelia Reyes'],
    venue: 'ArXiv Preprint',
    year: 2025,
    tags: ['model-editing', 'graph', 'alignment', 'highlight'],
    links: {
      pdf: '#',
      code: 'https://github.com/BITnene465/graph-editing-lab',
    },
    highlight: true,
    summary:
      'Applies graph reasoning to constrain steering vectors and keep edited models on-policy.',
  },
  {
    id: 'voice-atlas-2024',
    title: 'Neuro-Symbolic Voice Atlas',
    authors: ['Dr. Tan', 'Alexey Morozov'],
    venue: 'NeurIPS Spotlight',
    year: 2024,
    tags: ['audio', 'symbolic', 'highlight'],
    links: {
      pdf: '#',
      video: 'https://youtu.be/demo-voice-atlas',
    },
    highlight: true,
    summary:
      'Hybridizes differentiable renderers and rule-based singers to analyze anime voice timbre.',
  },
  {
    id: 'latency-diffusion-2024',
    title: 'Latency-aware Diffusion Editors',
    authors: ['Dr. Tan', 'Aurora Lab Team'],
    venue: 'ICLR',
    year: 2024,
    tags: ['diffusion', 'systems'],
    links: {
      pdf: '#',
      code: 'https://github.com/BITnene465/diffusion-latency-kit',
      slides: '#',
    },
    summary:
      'Benchmarks low-latency diffusion controls for live creative tooling.',
  },
  {
    id: 'sparse-reward-2023',
    title: 'Sparse Reward Alignment Toolkit',
    authors: ['Dr. Tan', 'Ravi Narayan'],
    venue: 'NeurIPS Workshop',
    year: 2023,
    tags: ['alignment', 'toolkit'],
    links: {
      pdf: '#',
    },
    summary: 'Open-source evaluation harness for reinforcement alignment baselines.',
  },
  {
    id: 'celshade-2022',
    title: 'CelShade: Anime-inspired Interfaces for Research Demos',
    authors: ['Dr. Tan'],
    venue: 'CHI Late-Breaking Work',
    year: 2022,
    tags: ['hci', 'playground'],
    links: {
      pdf: '#',
      video: 'https://youtu.be/demo-celshade',
    },
    summary: 'Design study on merging lab notes with stylized anime UI motifs.',
  },
]

export function getHighlightedPapers(): Paper[] {
  return papers.filter((paper) => paper.highlight)
}

export interface PapersByYear {
  year: number
  entries: Paper[]
}

export function groupPapersByYear(list: Paper[] = papers): PapersByYear[] {
  const map = new Map<number, Paper[]>()

  list.forEach((paper) => {
    const existing = map.get(paper.year) ?? []
    existing.push(paper)
    map.set(paper.year, existing)
  })

  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, entries]) => ({
      year,
      entries: entries.sort((a, b) => a.title.localeCompare(b.title)),
    }))
}
