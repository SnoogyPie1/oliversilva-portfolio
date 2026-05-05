import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '@/content/profile'

type Props = {
  /** How long the splash stays fully visible before fading (ms) */
  hold?: number
}

export function Splash({ hold = 1500 }: Props) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), hold)
    return () => clearTimeout(t)
  }, [hold])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-bg"
        >
          {/* subtle scan line */}
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="h-full w-1/3 bg-accent"
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] uppercase tracking-[0.45em] text-muted"
            >
              ✦ {profile.name}
            </motion.p>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              className="block h-px w-32 origin-left bg-ink/40"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-sm italic text-ink/70"
            >
              loading the scene…
            </motion.p>
          </div>

          {/* bottom right meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.3em] text-muted md:bottom-10 md:right-10"
          >
            Portfolio — 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
