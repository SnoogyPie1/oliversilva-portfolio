export type Shot = {
  image: string
  /** Local video filename (placed under /public/films/). Optional. */
  video?: string
  description: string
  task: string
}

export type Film = {
  title: string
  year: string
  studio: string
  role: string
  poster?: string
  synopsis?: string
  shots: Shot[]
}

// Placeholder cinematic frames. Replace with actual frames from Oliver's reels.
export const films: Film[] = [
  {
    title: 'The Hollow Tide',
    year: '2025',
    studio: 'Studio Alpha',
    role: 'Senior CFX Artist',
    synopsis:
      'A coastal town swallowed by a sentient ocean. Hero cloth & hair work on the lead siren creature.',
    shots: [
      {
        image:
          'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=900&q=70',
        video: 'hollow-tide-01.mp4',
        description: 'Siren emerges from the surf, drenched dress clings and drips.',
        task: 'Wet cloth simulation, drip secondary, hair under-water dynamics.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=900&q=70',
        video: 'hollow-tide-02.mp4',
        description: 'Wide chase across rooftops in a storm.',
        task: 'Cloak wind sim with FX coupling, crowd cloth pass.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=900&q=70',
        video: 'hollow-tide-03.mp4',
        description: 'Final transformation close-up.',
        task: 'Skin slide / tear simulation, fur growth animation.',
      },
    ],
  },
  {
    title: 'Iron Lullaby',
    year: '2024',
    studio: 'Studio Alpha',
    role: 'CFX Artist',
    synopsis:
      'Industrial-era fairy tale. Period costume work and creature fur for the wolf chorus.',
    shots: [
      {
        image:
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=70',
        video: 'iron-lullaby-01.mp4',
        description: 'Opening dolly across the orphanage hallway.',
        task: 'Layered Victorian skirts, lookdev pass.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=70',
        video: 'iron-lullaby-02.mp4',
        description: 'Wolf pack emerges from the snow.',
        task: 'Hero fur grooms, wind & snow interaction.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?auto=format&fit=crop&w=900&q=70',
        video: 'iron-lullaby-03.mp4',
        description: 'Carriage crash — cloth shred sequence.',
        task: 'Tearing cloth, debris coupling with rigid bodies.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=70',
        video: 'iron-lullaby-04.mp4',
        description: 'Final lullaby on the rooftop.',
        task: 'Soft cloth & hair in light breeze, hero performance pass.',
      },
    ],
  },
  {
    title: 'Paper Constellations',
    year: '2024',
    studio: 'Studio Beta',
    role: 'CFX Artist',
    synopsis:
      'Animated short about an astronomer who folds the night sky. Stylized origami simulation.',
    shots: [
      {
        image:
          'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=70',
        video: 'paper-constellations-01.mp4',
        description: 'Origami crane unfolds into a galaxy.',
        task: 'Custom paper unfold rig, scripted creasing.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=70',
        video: 'paper-constellations-02.mp4',
        description: 'Wind blows the entire room into folds.',
        task: 'Mass cloth sim, art-directed paper crumpling.',
      },
    ],
  },
  {
    title: 'Vanta',
    year: '2023',
    studio: 'Studio Beta',
    role: 'CFX Artist',
    synopsis:
      'Sci-fi feature about a black-coated assassin who erases light. Hero suit work throughout.',
    shots: [
      {
        image:
          'https://images.unsplash.com/photo-1478479474370-a48dba1f5e93?auto=format&fit=crop&w=900&q=70',
        video: 'vanta-01.mp4',
        description: 'Suit absorbs muzzle flashes.',
        task: 'Light-reactive cloth shading + sim.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=70',
        video: 'vanta-02.mp4',
        description: 'Rooftop escape with cape billow.',
        task: 'Cape wind dynamics, collision with environment.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=70',
        video: 'vanta-03.mp4',
        description: 'Hand-to-hand fight in the rain.',
        task: 'Wet cloth, hair drag, contact deformation.',
      },
    ],
  },
  {
    title: 'Quiet Machines',
    year: '2022',
    studio: 'Studio Gamma',
    role: '3D Generalist',
    synopsis:
      'Anthology short. Cross-discipline contribution — modeling, lookdev, and simulation.',
    shots: [
      {
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70',
        video: 'quiet-machines-01.mp4',
        description: 'Robot dust cover slides off at sunrise.',
        task: 'Cloth slide simulation, dust FX coupling.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=70',
        video: 'quiet-machines-02.mp4',
        description: 'Wind chimes sequence in the workshop.',
        task: 'Constraint-based pendulum sim, lookdev pass.',
      },
    ],
  },
]
