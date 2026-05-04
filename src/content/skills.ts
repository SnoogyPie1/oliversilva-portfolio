export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Software',
    items: ['Houdini', 'Maya', 'Blender', 'Nuke', 'ZBrush', 'Substance'],
  },
  {
    title: 'Domains',
    items: ['Cloth Sim', 'Hair & Fur', 'Skin & Muscle', 'RBD / Destruction', 'FLIP / Volumes', 'Look-Dev'],
  },
  {
    title: 'Pipeline',
    items: ['Python', 'USD', 'VEX', 'HDA Authoring', 'Shotgun / Flow', 'Linux'],
  },
]
