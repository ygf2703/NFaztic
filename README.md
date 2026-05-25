# NFAZTIC Artist Website

Production-ready Next.js site for NFAZTIC, a Psy / Goa Trance artist. It uses
Next.js App Router, Tailwind CSS, Framer Motion, official music embeds, the
YouTube IFrame API, and a custom terminal navigation interface.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Framer Motion
- lucide-react icons

## Media

Local development uses copied assets in `public/media`. For production, point
heavy MP4/WAV media at a CDN:

```bash
NEXT_PUBLIC_HERO_VIDEO_URL=https://cdn.example.com/nfaztic/cerberos.mp4
NEXT_PUBLIC_BANDCAMP_URL=https://nfaztic.bandcamp.com
NEXT_PUBLIC_HIGH_FIDELITY_WAV_URL=https://cdn.example.com/nfaztic/master.wav
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

If `NEXT_PUBLIC_HERO_VIDEO_URL` is empty, the local
`/media/hero-cerberos.mp4` fallback is used.

## Terminal Contract

The terminal component routes all terminal text output through:

```ts
function displayToTerminal(text: string) {
  // append output to the custom terminal UI
}
```

Implemented commands: `help`, `play`, `bio`, `visuals`, `video`, `contact`,
and `clear`.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy on Vercel by importing the GitHub repository, adding the optional media
environment variables above, and using the default Next.js build command:

```bash
npm run build
```

## QA

Useful local checks:

```bash
npm run lint
npm run build
```
