import { experience } from '@/content/experience'

export function ExperiencePanel() {
  return (
    <div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05]">
        Where I've shaped <span className="italic text-accent">pixels.</span>
      </h2>

      <ol className="relative mt-12 border-l border-line">
        {experience.map((e, i) => (
          <li key={`${e.studio}-${i}`} className="relative pb-12 pl-8 md:pl-12">
            <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="grid gap-3 md:grid-cols-12 md:items-baseline md:gap-8">
              <p className="md:col-span-3 text-[11px] uppercase tracking-[0.3em] text-muted">
                {e.period}
              </p>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl font-light md:text-3xl">
                  {e.role}
                  <span className="text-muted"> · {e.studio}</span>
                </h3>
                {e.location && (
                  <p className="mt-1 text-sm text-muted">{e.location}</p>
                )}
                <p className="mt-3 max-w-2xl text-ink/70 leading-relaxed">{e.summary}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
