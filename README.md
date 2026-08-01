# Anderson Blanco — Portfolio

A fashion-inspired creative technology portfolio built with Next.js and designed for static hosting on GitHub Pages.

## Direction

- Dark editorial visual language with high-contrast typography
- Persistent rounded borders and tactile card surfaces
- Lightweight CSS 3D effects, including an infinite ladder hero object
- Responsive layouts across desktop and mobile
- Keyboard-visible focus states, semantic structure, forced-colors support, and reduced-motion controls

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production validation

```bash
npm run typecheck
npm run build
```

The static site is generated in `out/`.

## GitHub Pages

The included workflow builds and deploys the site whenever changes reach `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

Because this is a project site, production assets use the `/MyPortfolio` base path. Local development remains available at `/`.

## Personalization note

Replace the placeholder contact email and concept copy in `app/page.tsx` with final personal details and live project links when available.
