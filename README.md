# Forge House Gym Landing Page

Premium frontend showcase for a private performance club, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production validation:

```bash
npm run typecheck
npm run build
```

## Project structure

```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── landing
│   ├── gym
│   │   ├── cta-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── membership-section.tsx
│   │   ├── motion.tsx
│   │   ├── navbar.tsx
│   │   ├── philosophy-section.tsx
│   │   ├── programs-section.tsx
│   │   ├── scene-track.tsx
│   │   ├── section-shell.tsx
│   │   ├── testimonials-section.tsx
│   │   └── wellness-section.tsx
│   ├── ui
│   │   ├── button.tsx
│   │   └── container.tsx
├── data
│   └── gym.ts
├── lib
│   └── utils.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Architecture notes

- `data/gym.ts` centralizes the gym concept copy, membership content, scenes, and navigation.
- `components/gym/*` contains the full cinematic landing page architecture and motion-aware sections.
- `components/gym/scene-track.tsx` is the scroll-led storytelling section with a sticky visual composition.
- `components/gym/motion.tsx` wraps the shared Framer Motion fade-up behavior.
- `app/globals.css` defines the dark premium design system, surface styling, and reusable presentation utilities.

## Further polish ideas

- Add a real booking flow and CMS-managed schedule data.
- Replace the abstract art direction with professional photography or 3D renders.
- Add section-specific parallax depth or pinned transitions once the final brand is approved.
- Create a second page for memberships or trainers to turn the concept into a fuller client pitch.
