import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

type Props = {
  open: boolean
  src: string | null
  poster?: string
  caption?: string
  onClose: () => void
}

export function VideoModal({ open, src, poster, caption, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/80 p-2 backdrop-blur-md sm:p-4 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[96svh] w-[98vw] flex-col overflow-hidden rounded-xl border border-ink/10 bg-bg shadow-[0_30px_120px_rgba(0,0,0,0.6)] md:h-[94svh] md:w-[94vw]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-bg/70 text-ink backdrop-blur-md transition hover:border-ink hover:bg-ink hover:text-bg"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="relative flex-1 bg-black">
              <video
                key={src}
                src={src}
                poster={poster}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            {caption && (
              <p className="border-t border-ink/10 px-5 py-4 text-sm text-ink/80 md:px-8">
                {caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
