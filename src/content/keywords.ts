// Keywords that, when hovered in the hero card, swap the background image.
// Replace covers with your own renders in /public/keywords/
export type Keyword = {
  word: string
  image: string
  caption: string
}

export const keywords: Keyword[] = [
  {
    word: 'Cloth',
    image:
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1600&q=70',
    caption: 'Cloth simulation — wind, drape, secondary motion.',
  },
  {
    word: 'Fur',
    image:
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=1600&q=70',
    caption: 'Hair & fur grooming, dynamics, lookdev.',
  },
  {
    word: 'Skin',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1600&q=70',
    caption: 'Skin sliding, muscle deformation, anatomy.',
  },
  {
    word: 'Houdini',
    image:
      'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1600&q=70',
    caption: 'Procedural workflows in Houdini & VEX.',
  },
  {
    word: 'Maya',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70',
    caption: 'Rigging, animation polish & nCloth setups.',
  },
  {
    word: 'Blender',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=70',
    caption: 'Open-source pipeline, Cycles & Geometry Nodes.',
  },
  {
    word: 'Films',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=70',
    caption: 'Eight feature films · 2022 — 2026.',
  },
]
