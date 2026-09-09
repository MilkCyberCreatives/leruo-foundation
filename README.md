# Leruo Foundation Website

Official website codebase for Leruo Foundation.

## Stack

- Next.js 16 (Pages Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- React Icons
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run build
```

## Key routes

- `/` - Home
- `/about` - About
- `/youthpreneurs` - Youthpreneurs Programme
- `/brandingcircle` - Branding Chief Executive Circle SA
- `/womenceo` - Women CEOs Network
- `/graduation-2026` - Changemakers Graduation 2026 digital programme
- `/eventgallery` - Event Gallery
- `/becomesponsor` - Become a Sponsor
- `/contact` - Contact
- `/robots.txt` - Search crawler directives
- `/sitemap.xml` - XML sitemap
- `/llms.txt` - AI-readable site guidance

## Environment variables

Optional public variables used by the SEO layer:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_YANDEX_SITE_VERIFICATION`
- `NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION`

Do not commit secrets to the repository.

## Production deployment

Production is deployed from the `main` branch through the connected Vercel project.
