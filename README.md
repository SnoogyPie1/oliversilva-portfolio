# Portfolio — CFX Artist & 3D Generalist

A minimalist single-page portfolio inspired by editorial / cinematic film-industry sites.
Built with **Vite + React + TypeScript + Tailwind**, with smooth scroll (Lenis), section
reveals (Framer Motion) and an infinite marquee (GSAP). Designed to be hosted free on
**GitHub Pages**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the prod build
```

## Editing your content

All copy and data lives under `src/content/`:

- `profile.ts` — name, role, tagline, bio, resume URL, marquee highlights
- `experience.ts` — timeline of roles
- `projects.ts` — selected work cards (cover image, tags, optional video embed URL)
- `skills.ts` — tools / domains / pipeline
- `socials.ts` — social icon links shown in hero, contact and footer

Drop your own images into `public/` and reference them as `/your-image.jpg`.
Project covers can also be remote URLs.

### Contact form

The contact form posts to **Formspree**. Sign up at <https://formspree.io>, create a
form, and replace `FORM_ENDPOINT` at the top of `src/sections/Contact.tsx` with your
endpoint URL.

### Resume

Drop your `cv.pdf` into `public/` and update `profile.resumeUrl`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In your repo settings → **Pages**, set the source to **GitHub Actions**.
3. Push to `main`. The included workflow at `.github/workflows/deploy.yml` builds and
   deploys automatically. The `VITE_BASE` env var is set to `/<repo-name>/`, which is
   what GitHub Pages needs for project pages.
4. Your site will be live at `https://<your-user>.github.io/<repo-name>/`.

If you're deploying to a **user/org page** (`<user>.github.io` repo), edit the workflow
to set `VITE_BASE: /`.

## Tech & structure

```
src/
├─ App.tsx
├─ main.tsx
├─ index.css
├─ components/
│  ├─ Navbar.tsx
│  ├─ Footer.tsx
│  ├─ ScrollProgress.tsx
│  ├─ ProjectModal.tsx
│  └─ ui/
│     ├─ Container.tsx
│     ├─ Section.tsx
│     ├─ Reveal.tsx
│     ├─ Marquee.tsx
│     ├─ IconLink.tsx
│     └─ Button.tsx
├─ sections/
│  ├─ Hero.tsx
│  ├─ Highlights.tsx
│  ├─ About.tsx
│  ├─ Experience.tsx
│  ├─ Projects.tsx
│  ├─ Skills.tsx
│  └─ Contact.tsx
├─ content/        # editable copy & data
└─ hooks/useLenis.ts
```

## Notes

- Animations honor `prefers-reduced-motion`.
- Fonts: **Fraunces** (display) + **Inter** (body) via Google Fonts.
- Replace placeholder images and copy before publishing.
