import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { profile } from '@/content/profile'
import { socials } from '@/content/socials'
import { keywords } from '@/content/keywords'

type Props = {
  onOpenPanel: (panel: 'work' | 'about' | 'films' | 'contact') => void
  panelOpen?: boolean
}

const cycling = ['CFX Artist', 'Storyteller', 'Simulator', 'Generalist', 'Craftsman']

export function CardScene({ onOpenPanel, panelOpen = false }: Props) {
  const reduce = useReducedMotion()
  const [wordIdx, setWordIdx] = useState(0)
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null)
  const [needsMotionPermission, setNeedsMotionPermission] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse position normalized to [-0.5, 0.5]
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 })
  const smy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 })

  // Card 3D tilt
  const cardRotateX = useTransform(smy, [-0.5, 0.5], [6, -6])
  const cardRotateY = useTransform(smx, [-0.5, 0.5], [-8, 8])
  const cardX = useTransform(smx, [-0.5, 0.5], [-12, 12])
  const cardY = useTransform(smy, [-0.5, 0.5], [-8, 8])

  // Background parallax
  const bgX = useTransform(smx, [-0.5, 0.5], ['3%', '-3%'])
  const bgY = useTransform(smy, [-0.5, 0.5], ['3%', '-3%'])

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setWordIdx((i) => (i + 1) % cycling.length), 2400)
    return () => clearInterval(id)
  }, [reduce])

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      mx.set(x)
      my.set(y)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduce, mx, my])

  // Device orientation (mobile gyroscope)
  useEffect(() => {
    if (reduce) return
    if (typeof window === 'undefined') return
    if (!('DeviceOrientationEvent' in window)) return

    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (!isTouch) return

    // iOS 13+ requires explicit permission via user gesture
    const RequestPermission = (
      DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<'granted' | 'denied'>
      }
    ).requestPermission

    const handle = (e: DeviceOrientationEvent) => {
      // beta: front-to-back tilt (-180..180), gamma: left-to-right (-90..90)
      const gamma = e.gamma ?? 0
      const beta = e.beta ?? 0
      // Map ~±25° tilt to ±0.5
      const x = Math.max(-0.5, Math.min(0.5, gamma / 50))
      const y = Math.max(-0.5, Math.min(0.5, (beta - 30) / 50))
      mx.set(x)
      my.set(y)
    }

    if (typeof RequestPermission === 'function') {
      // iOS — wait for explicit user tap
      setNeedsMotionPermission(true)
      return
    }

    window.addEventListener('deviceorientation', handle)
    return () => window.removeEventListener('deviceorientation', handle)
  }, [reduce, mx, my])

  const enableMotion = async () => {
    const RequestPermission = (
      DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<'granted' | 'denied'>
      }
    ).requestPermission
    if (typeof RequestPermission !== 'function') return
    try {
      const result = await RequestPermission()
      if (result === 'granted') {
        const handle = (e: DeviceOrientationEvent) => {
          const gamma = e.gamma ?? 0
          const beta = e.beta ?? 0
          const x = Math.max(-0.5, Math.min(0.5, gamma / 50))
          const y = Math.max(-0.5, Math.min(0.5, (beta - 30) / 50))
          mx.set(x)
          my.set(y)
        }
        window.addEventListener('deviceorientation', handle)
        setNeedsMotionPermission(false)
      }
    } catch {
      setNeedsMotionPermission(false)
    }
  }

  const activeKw = keywords.find((k) => k.word === activeKeyword)

  return (
    <section className="relative isolate flex h-[100svh] min-h-[680px] w-full items-center justify-center overflow-hidden">
      {/* Background layer — keyword swap */}
      <motion.div
        style={
          reduce
            ? undefined
            : {
                x: bgX,
                y: bgY,
                scale: 1.08,
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=70')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
        }
        className="absolute inset-0 -z-10 bg-line"
      >
        {/* Default base video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=70"
          className="h-full w-full object-cover opacity-55"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-fog-on-a-mountain-3537/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Keyword image overlay */}
        <AnimatePresence>
          {activeKw && (
            <motion.div
              key={activeKw.word}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activeKw.image}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vignette / gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/25 via-transparent to-bg/25" />
      </motion.div>

      {/* Top-left corner: identity */}
      <header className="pointer-events-auto absolute inset-x-0 top-0 z-20 flex items-start justify-between p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col text-[11px] uppercase tracking-[0.3em] text-muted"
        >
          <span className="text-ink">{profile.name}</span>
          <span className="mt-1">Portfolio — 2026</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden text-right text-[11px] uppercase tracking-[0.3em] text-muted md:flex md:flex-col"
        >
          <span className="text-ink">{profile.location.split('·')[0].trim()}</span>
          <span className="mt-1">Available — Q3 2026</span>
        </motion.div>
      </header>

      {/* The interactive card (wrapper handles panel shift, inner handles 3D tilt) */}
      <div
        data-panel-open={panelOpen}
        className="relative z-10 w-[min(860px,90vw)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] data-[panel-open=true]:scale-[0.96] lg:data-[panel-open=true]:-translate-x-[15vw] lg:data-[panel-open=true]:scale-[0.86] xl:w-[min(1100px,92vw)] xl:data-[panel-open=true]:-translate-x-[14vw]"
      >
      <motion.div
        ref={cardRef}
        style={
          reduce
            ? undefined
            : {
                rotateX: cardRotateX,
                rotateY: cardRotateY,
                x: cardX,
                y: cardY,
                transformPerspective: 1400,
                transformStyle: 'preserve-3d',
              }
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="relative rounded-[24px] border border-ink/10 bg-ink/[0.04] p-5 backdrop-blur-2xl backdrop-saturate-150 [will-change:backdrop-filter] sm:p-7 lg:rounded-[28px] lg:p-9 xl:p-14">
          {/* Eyebrow */}
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted lg:mb-8">
            <span className="h-px w-8 bg-accent" />
            Interactive card · Hover any keyword
          </p>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2rem,4.8vw,4.75rem)] font-light leading-[0.95] xl:text-[clamp(2.5rem,7vw,6.5rem)]">
            <span className="block text-ink/90">Passionate</span>
            <span className="relative block h-[1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={cycling[wordIdx]}
                  initial={reduce ? { opacity: 1 } : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 italic text-accent"
                >
                  {cycling[wordIdx]},
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block">3D Generalist.</span>
          </h1>

          {/* Keyword strip */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-[clamp(0.85rem,1.05vw,1.05rem)] lg:mt-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted">
              Specialties
            </span>
            {keywords.map((k) => (
              <button
                key={k.word}
                type="button"
                onMouseEnter={() => setActiveKeyword(k.word)}
                onFocus={() => setActiveKeyword(k.word)}
                onMouseLeave={() => setActiveKeyword(null)}
                onBlur={() => setActiveKeyword(null)}
                className={`relative font-display italic transition-colors ${
                  activeKeyword === k.word ? 'text-accent' : 'text-ink/80 hover:text-ink'
                }`}
              >
                {k.word}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-500 ${
                    activeKeyword === k.word ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Caption swap */}
          <div className="mt-6 h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeKw?.word ?? 'default'}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-muted"
              >
                {activeKw?.caption ??
                  'Move your cursor over a keyword to peek behind the curtain.'}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-line lg:my-10" />

          {/* Action grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <ActionTile
              label="Selected work"
              meta="06 projects"
              onClick={() => onOpenPanel('work')}
            />
            <ActionTile
              label="About"
              meta="The story"
              onClick={() => onOpenPanel('about')}
            />
            <ActionTile
              label="Films"
              meta="05 titles"
              onClick={() => onOpenPanel('films')}
            />
            <ActionTile
              label="Get in touch"
              meta={profile.email}
              accent
              onClick={() => onOpenPanel('contact')}
            />
          </div>

          {/* Footer line */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted lg:mt-10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>Open for new projects</span>
            </div>
            <span className="text-ink/70">{profile.tagline}</span>
          </div>
        </div>
      </motion.div>
      </div>

      {/* Bottom-left: socials rail */}
      <motion.aside
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-auto absolute bottom-6 left-6 z-20 flex items-center gap-2 md:bottom-10 md:left-10"
      >
        {socials.map((s) => {
          const isExternal = /^https?:/.test(s.href)
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-bg"
            >
              <s.Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          )
        })}
      </motion.aside>

      {/* Bottom-right: hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="pointer-events-none absolute bottom-6 right-6 z-20 hidden items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted md:bottom-10 md:right-10 md:flex"
      >
        <span className="block h-px w-10 bg-ink/30" />
        <span>Move · hover · click</span>
      </motion.div>

      {/* Mobile: enable motion (iOS 13+) */}
      {needsMotionPermission && (
        <motion.button
          type="button"
          onClick={enableMotion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-ink/20 bg-bg/70 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-ink backdrop-blur-md transition hover:border-accent hover:bg-accent hover:text-bg md:hidden"
        >
          Tilt your phone — enable motion
        </motion.button>
      )}
    </section>
  )
}

type ActionTileProps = {
  label: string
  meta: string
  accent?: boolean
  onClick: () => void
}

function ActionTile({ label, meta, accent, onClick }: ActionTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex flex-col items-start gap-1.5 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 lg:gap-2 lg:p-5 ${
        accent
          ? 'border-accent/40 bg-accent/5 hover:bg-accent hover:text-ink'
          : 'border-ink/10 bg-ink/[0.02] hover:border-ink/40 hover:bg-ink/[0.05]'
      }`}
    >
      <span className="text-[10px] uppercase tracking-[0.3em] opacity-70">
        {meta}
      </span>
      <span className="font-display text-xl font-light">
        {label}
      </span>
    </button>
  )
}
