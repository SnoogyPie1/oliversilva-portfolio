export type Experience = {
  studio: string
  role: string
  period: string
  summary: string
  location?: string
}

export const experience: Experience[] = [
  {
    studio: 'Studio Alpha',
    role: 'Senior CFX Artist',
    period: '2024 — Present',
    summary:
      'Lead cloth and hair sims for hero characters across two tentpole features. Built reusable Houdini setups for the studio.',
    location: 'Remote',
  },
  {
    studio: 'Studio Beta',
    role: 'CFX Artist',
    period: '2022 — 2024',
    summary:
      'Delivered hundreds of shots of cloth, fur and muscle simulation. Mentored juniors and authored internal documentation.',
    location: 'Vancouver, BC',
  },
  {
    studio: 'Studio Gamma',
    role: '3D Generalist',
    period: '2021 — 2022',
    summary:
      'Cross-discipline work across modeling, look-dev, and simulation for commercials and short-form content.',
    location: 'Mexico City',
  },
]
