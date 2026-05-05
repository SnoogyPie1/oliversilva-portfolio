import { profile } from '@/content/profile'
import { skills } from '@/content/skills'
import { Download } from 'lucide-react'

export function AboutPanel() {
  const cvHref = `${import.meta.env.BASE_URL}${profile.resumeUrl}`
  return (
    <div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05]">
        A craftsman of <span className="italic text-accent">digital motion.</span>
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-light leading-snug text-balance text-ink/90">
            I shape the messy, tactile parts of digital characters —
            <span className="italic text-accent"> cloth catching wind</span>,
            <span className="italic text-accent"> hair lit by morning sun</span>,
            <span className="italic text-accent"> skin that finally feels honest</span>.
          </p>
          <p className="mt-8 max-w-xl text-base text-muted leading-relaxed">
            {profile.bio}
          </p>
          <p className="mt-6 text-sm text-muted">{profile.location}</p>

          <a
            href={cvHref}
            download
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-ink/20 bg-ink/[0.03] px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:border-accent hover:bg-accent hover:text-bg"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            Download CV
            <span className="text-[10px] uppercase tracking-[0.25em] opacity-60">PDF</span>
          </a>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-line">
            <img
              src={`${import.meta.env.BASE_URL}portrait.jpeg`}
              alt="Oliver Silva"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ink/80">
              <span>{profile.name}</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-ink/10 pt-10">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
          ✦ Toolbox
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.title}>
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-muted">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/80 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
