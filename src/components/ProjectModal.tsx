import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { Project } from '@/content/projects'

type Props = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-[96svh] w-[98vw] flex-col overflow-hidden rounded-xl border border-ink/10 bg-bg shadow-[0_30px_120px_rgba(0,0,0,0.6)] md:h-[94svh] md:w-[94vw]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-bg/70 text-ink backdrop-blur-md transition hover:border-ink hover:bg-ink hover:text-bg"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
              <div className="relative w-full bg-line md:flex-1">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="aspect-video h-auto w-full md:absolute md:inset-0 md:aspect-auto md:h-full"
                  />
                ) : (
                  <img
                    src={project.cover}
                    alt=""
                    className="aspect-video h-auto w-full object-cover md:absolute md:inset-0 md:aspect-auto md:h-full"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto p-6 md:w-[360px] md:shrink-0 md:gap-8 md:border-l md:border-ink/10 md:p-10 lg:w-[420px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">
                    {project.client}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.05]"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm text-ink/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted text-[10px] uppercase tracking-[0.25em]">Role</dt>
                    <dd className="mt-1">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted text-[10px] uppercase tracking-[0.25em]">Year</dt>
                    <dd className="mt-1">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-muted text-[10px] uppercase tracking-[0.25em]">Tags</dt>
                    <dd className="mt-1 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/15 px-2.5 py-0.5 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
