import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Panel({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 top-0 z-50 flex h-[100svh] w-full flex-col overflow-hidden border-l border-line bg-bg shadow-[0_0_60px_rgba(0,0,0,0.5)] md:w-[min(560px,45vw)]"
        >
            <header className="flex items-center justify-between border-b border-line px-6 py-5 md:px-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
                ✦ {title}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-ink hover:bg-ink hover:text-bg"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </header>
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto px-6 py-10 md:px-10 md:py-14"
            >
              {children}
            </div>
          </motion.aside>
      )}
    </AnimatePresence>
  )
}
