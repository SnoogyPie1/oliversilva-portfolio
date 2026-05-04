import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  const [variant, setVariant] = useState<'default' | 'hover'>('default')
  const [hidden, setHidden] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHidden(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [data-cursor="hover"]')) {
        setVariant('hover')
      } else {
        setVariant('default')
      }
    }
    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [x, y])

  if (hidden) return null

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
    >
      <motion.div
        animate={{
          width: variant === 'hover' ? 56 : 12,
          height: variant === 'hover' ? 56 : 12,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
      />
    </motion.div>
  )
}
