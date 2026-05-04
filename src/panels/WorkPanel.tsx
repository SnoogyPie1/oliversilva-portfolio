import { useState } from 'react'
import { ProjectModal } from '@/components/ProjectModal'
import { projects, type Project } from '@/content/projects'

export function WorkPanel() {
  const [active, setActive] = useState<Project | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="relative">
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05]">
        Recent <span className="italic text-accent">scenes.</span>
      </h2>
      <p className="mt-3 max-w-md text-sm text-muted">
        A selection of cinematic shots between 2022 — 2026. Click any title to open
        the case study.
      </p>

      <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
        {projects.map((p, i) => (
          <li
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group grid w-full grid-cols-12 items-center gap-3 py-6 text-left"
            >
              <span className="col-span-1 text-xs text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="col-span-7 font-display text-[clamp(1.25rem,2.4vw,2rem)] font-light leading-none transition-colors group-hover:text-accent">
                <span className={hovered === p.id ? 'italic' : ''}>{p.title}</span>
              </h3>
              <p className="col-span-2 hidden text-[10px] uppercase tracking-[0.2em] text-muted md:block">
                {p.client.split('·')[0].trim()}
              </p>
              <p className="col-span-2 text-right text-[10px] uppercase tracking-[0.2em] text-muted">
                {p.year}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  )
}
