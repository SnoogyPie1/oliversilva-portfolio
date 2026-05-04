export type Project = {
  id: string
  title: string
  client: string
  role: string
  year: string
  tags: string[]
  cover: string // path under public/ or external URL
  description: string
  videoUrl?: string // YouTube/Vimeo embed URL
}

// Replace covers with your own renders/posters in /public/projects/
export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Echoes of Ash',
    client: 'Feature Film · Studio Alpha',
    role: 'Lead CFX — Cloth & Hair',
    year: '2025',
    tags: ['Cloth', 'Hair', 'Houdini'],
    cover:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=70',
    description:
      'Hero costume and hair simulation for a period drama. Custom solver setups for wet-cloth interactions and wind-driven hair under stylized lighting.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'project-two',
    title: 'Marrow',
    client: 'Short Film · Independent',
    role: 'CFX & FX Generalist',
    year: '2024',
    tags: ['Skin', 'Muscle', 'Maya'],
    cover:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=70',
    description:
      'Anatomical skin sliding and muscle deformation for a creature transformation sequence.',
  },
  {
    id: 'project-three',
    title: 'Saltwater',
    client: 'Commercial · Brand X',
    role: 'CFX Artist',
    year: '2024',
    tags: ['Cloth', 'Wind', 'Blender'],
    cover:
      'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&w=1200&q=70',
    description:
      'Long flowing dress simulation for a 60-second narrative spot. Dynamic wind fields and secondary motion polish.',
  },
  {
    id: 'project-four',
    title: 'Lantern',
    client: 'Feature Film · Studio Beta',
    role: 'CFX Artist',
    year: '2023',
    tags: ['Fur', 'Groom', 'Houdini'],
    cover:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70',
    description:
      'Photoreal fur grooming and simulation for a digital double of a stunt animal in low-light environments.',
  },
  {
    id: 'project-five',
    title: 'Glasshouse',
    client: 'Episodic · Streaming',
    role: 'Sim TD',
    year: '2023',
    tags: ['RBD', 'Cloth', 'Pipeline'],
    cover:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=70',
    description:
      'Cloth + rigid body destruction for an interior collapse sequence. Built a USD-based shot publish workflow.',
  },
  {
    id: 'project-six',
    title: 'Fieldnotes',
    client: 'Personal R&D',
    role: 'Generalist',
    year: '2022',
    tags: ['R&D', 'Houdini', 'Karma'],
    cover:
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=70',
    description:
      'Ongoing personal exploration of procedural environments and lookdev studies rendered in Karma XPU.',
  },
]
