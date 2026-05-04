import type { ComponentType, SVGProps } from 'react'
import { FileText, Mail, Film } from 'lucide-react'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '@/components/ui/BrandIcons'

export type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type Social = {
  label: string
  href: string
  Icon: IconType
}

export const socials: Social[] = [
  { label: 'Resume', href: '/cv-placeholder.pdf', Icon: FileText as IconType },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oliversilva', Icon: LinkedinIcon },
  { label: 'IMDb', href: 'https://www.imdb.com/name/nm0000000/', Icon: Film as IconType },
  { label: 'YouTube', href: 'https://youtube.com/@oliversilva', Icon: YoutubeIcon },
  { label: 'GitHub', href: 'https://github.com/oliversilva', Icon: GithubIcon },
  { label: 'Email', href: 'mailto:hello@oliversilva.com', Icon: Mail as IconType },
]
