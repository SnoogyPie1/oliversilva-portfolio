import { useState, type FormEvent } from 'react'
import { profile } from '@/content/profile'
import { socials } from '@/content/socials'

const FORM_ENDPOINT = 'https://formspree.io/f/your-id'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactPanel() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05]">
        Have a shot that needs to <span className="italic text-accent">feel alive?</span>
      </h2>
      <p className="mt-4 max-w-md text-sm text-muted">
        Open to film, episodic and select commercial work. The fastest way to reach me
        is email.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-10 inline-block font-display text-[clamp(1.5rem,3vw,2.5rem)] underline-offset-8 hover:underline"
      >
        {profile.email}
      </a>

      <div className="mt-10 flex flex-wrap gap-3">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-bg"
            >
              <s.Icon className="h-4 w-4" strokeWidth={1.5} />
            </a>
          )
        })}
      </div>

      <form onSubmit={onSubmit} className="mt-14 flex flex-col gap-6 border-t border-line pt-12">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Message" name="message" textarea required />

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-ink hover:text-bg disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message →'}
          </button>
          {status === 'success' && (
            <span className="text-sm text-ink/70">Thanks — I'll get back to you soon.</span>
          )}
          {status === 'error' && (
            <span className="text-sm text-accent">Something went wrong. Try email.</span>
          )}
        </div>
      </form>
    </div>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
}

function Field({ label, name, type = 'text', required, textarea }: FieldProps) {
  const baseClass =
    'w-full bg-transparent border-b border-ink/20 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none transition-colors'
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.3em] text-muted">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={baseClass} />
      ) : (
        <input name={name} type={type} required={required} className={baseClass} />
      )}
    </label>
  )
}
