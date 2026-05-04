import { useState } from 'react'
import { motion } from 'framer-motion'
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

      <ul className="mt-12 divide-y divide-line border-y border-line">
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

      {/* Floating preview */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed left-[calc(50vw-360px)] top-1/2 z-[60] hidden aspect-[16/10] w-[360px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl md:block"
      >
        {projects.map((p) => (
          <motion.img
            key={p.id}
            src={p.cover}
            alt=""
            animate={{ opacity: hovered === p.id ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  )
}
