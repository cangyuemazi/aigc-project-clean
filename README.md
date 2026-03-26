# AI大合集 (Next.js 14)

A production-oriented AI directory starter for **AI大合集**, inspired by commercial navigation websites.

## Implemented Features

- Next.js 14 App Router + TypeScript + Tailwind + Framer Motion
- i18n routing (`/zh`, `/en`)
- SEO: dynamic metadata, `sitemap.xml`, `robots.txt`
- Data layer with JSON backend (`data/tools.json`)
- Tool details static generation (`/[locale]/tools/[slug]`)
- Category filtering, sorting (popular/newest), search-ready architecture
- Click tracking API (`/api/track`)
- Submission workflow with moderation status (`/api/submissions`)
- Admin moderation APIs (`GET/PATCH /api/submissions` with `x-admin-token`)
- Reserved sponsored ad slot
- Favorites (local storage)
- Search + favorite-only filter + top ranking sidebar
- Analytics entry point (Google Analytics via env)

## Run Locally

1. Use Node.js 18+ (recommended: 20+)
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Data Operations

- Tool catalog: `data/tools.json`
- Click stats: `data/clicks.json`
- Community submissions: `data/submissions.json`

For production, replace JSON files with CMS/database adapters in `lib/data.ts`.

## Deployment

- Deploy on Vercel
- Set environment variables from `.env.example`
- Optional integrations:
  - Vercel Analytics
  - Sentry error tracking
  - Managed DB + backup policy

## Submission Moderation API

Use `ADMIN_TOKEN` from env as request header `x-admin-token`:

- `GET /api/submissions` -> list all submissions
- `PATCH /api/submissions` -> update moderation status
