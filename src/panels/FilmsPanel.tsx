import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { films } from '@/content/films'

export function FilmsPanel() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05]">
        Films I've helped <span className="italic text-accent">animate.</span>
      </h2>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Click any title to reveal the shots I worked on.
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {films.map((f, i) => {
          const isOpen = openIdx === i
          return (
            <li key={f.title}>
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-baseline gap-4 py-6 text-left transition-colors md:gap-8 md:py-8"
              >
                <span className="w-12 shrink-0 text-[11px] uppercase tracking-[0.3em] text-muted">
                  {f.year}
                </span>
                <span className="flex-1">
                  <span
                    className={`block font-display text-2xl font-light leading-tight transition-colors md:text-4xl ${
                      isOpen ? 'text-accent' : 'text-ink group-hover:text-accent'
                    }`}
                  >
                    {f.title}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-muted">
                    {f.role} · {f.studio}
                  </span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-500 ${
                    isOpen ? 'rotate-180 text-accent' : ''
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pl-16">
                      {f.synopsis && (
                        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-ink/70">
                          {f.synopsis}
                        </p>
                      )}
                      <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted">
                        ✦ Shots — {f.shots.length}
                      </p>
                      <ol className="space-y-5">
                        {f.shots.map((s) => (
                          <li
                            key={s.code}
                            className="grid gap-2 border-l border-line pl-5 md:grid-cols-12 md:gap-6"
                          >
                            <span className="md:col-span-2 font-mono text-xs uppercase tracking-widest text-accent">
                              {s.code}
                            </span>
                            <div className="md:col-span-10">
                              <p className="text-ink/90">{s.description}</p>
                              <p className="mt-1 text-sm text-muted">{s.task}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
