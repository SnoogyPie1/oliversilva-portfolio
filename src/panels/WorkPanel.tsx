import { useState } from 'react'
import { Play } from 'lucide-react'
import { ProjectModal } from '@/components/ProjectModal'
import { projects, type Project } from '@/content/projects'

export function WorkPanel() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <div className="relative">
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05]">
        Recent <span className="italic text-accent">scenes.</span>
      </h2>
      <p className="mt-3 max-w-md text-sm text-muted">
        A selection of cinematic shots between 2022 — 2026. Click any card to open the
        full case study.
      </p>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.id} className={i === 0 ? 'sm:col-span-2' : undefined}>
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group block w-full text-left"
            >
              <div className={`relative overflow-hidden rounded-md border border-ink/10 bg-line ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {p.videoUrl && (
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-ink/30 bg-bg/50 text-ink backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                    <Play className="h-3 w-3 translate-x-[1px]" strokeWidth={1.5} fill="currentColor" />
                  </span>
                )}

                <span className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.3em] text-ink/70">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className={`font-display font-light leading-tight text-ink transition-colors duration-300 group-hover:text-accent ${
                    i === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  }`}>
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted">
                    {p.client.split('·')[0].trim()} · {p.year}
                  </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  )
}
