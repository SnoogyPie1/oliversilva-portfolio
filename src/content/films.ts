export type Shot = {
  code: string
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
        code: 'HT_0420',
        description: 'Siren emerges from the surf, drenched dress clings and drips.',
        task: 'Wet cloth simulation, drip secondary, hair under-water dynamics.',
      },
      {
        code: 'HT_0680',
        description: 'Wide chase across rooftops in a storm.',
        task: 'Cloak wind sim with FX coupling, crowd cloth pass.',
      },
      {
        code: 'HT_0915',
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
        code: 'IL_0110',
        description: 'Opening dolly across the orphanage hallway.',
        task: 'Layered Victorian skirts, lookdev pass.',
      },
      {
        code: 'IL_0530',
        description: 'Wolf pack emerges from the snow.',
        task: 'Hero fur grooms, wind & snow interaction.',
      },
      {
        code: 'IL_0790',
        description: 'Carriage crash — cloth shred sequence.',
        task: 'Tearing cloth, debris coupling with rigid bodies.',
      },
      {
        code: 'IL_1120',
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
        code: 'PC_0040',
        description: 'Origami crane unfolds into a galaxy.',
        task: 'Custom paper unfold rig, scripted creasing.',
      },
      {
        code: 'PC_0220',
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
        code: 'VT_0205',
        description: 'Suit absorbs muzzle flashes.',
        task: 'Light-reactive cloth shading + sim.',
      },
      {
        code: 'VT_0470',
        description: 'Rooftop escape with cape billow.',
        task: 'Cape wind dynamics, collision with environment.',
      },
      {
        code: 'VT_0820',
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
        code: 'QM_0080',
        description: 'Robot dust cover slides off at sunrise.',
        task: 'Cloth slide simulation, dust FX coupling.',
      },
      {
        code: 'QM_0310',
        description: 'Wind chimes sequence in the workshop.',
        task: 'Constraint-based pendulum sim, lookdev pass.',
      },
    ],
  },
]
