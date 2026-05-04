import { profile } from '@/content/profile'
import { skills } from '@/content/skills'

export function AboutPanel() {
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
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-line">
            <img
              src="/portrait.jpeg"
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
