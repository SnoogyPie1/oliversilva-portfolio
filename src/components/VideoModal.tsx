import { useEffect } from 'react'
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

  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/80 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-ink/10 bg-bg shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-bg/70 text-ink backdrop-blur-md transition hover:border-ink hover:bg-ink hover:text-bg"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="relative aspect-video w-full bg-black">
              <video
                key={src}
                src={src}
                poster={poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
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
    </AnimatePresence>
  )
}
