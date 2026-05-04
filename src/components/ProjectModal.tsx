import { useEffect } from 'react'
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
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
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-bg ring-1 ring-line shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/10 text-ink backdrop-blur transition hover:bg-ink hover:text-bg"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="aspect-video w-full bg-line">
              {project.videoUrl ? (
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <img
                  src={project.cover}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-3 md:p-12">
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted">
                  {project.client}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-2 font-display text-d-3"
                >
                  {project.title}
                </h3>
                <p className="mt-4 text-ink/80 leading-relaxed">{project.description}</p>
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted text-xs uppercase tracking-[0.2em]">Role</dt>
                  <dd className="mt-1">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-muted text-xs uppercase tracking-[0.2em]">Year</dt>
                  <dd className="mt-1">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-muted text-xs uppercase tracking-[0.2em]">Tags</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-2.5 py-0.5 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
