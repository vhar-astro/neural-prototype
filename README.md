# Neural Prototype (Neurosite)

Neurosite is a React + TypeScript web app for discovering, comparing, and evaluating AI agents for business use cases.

## Project info

- **Project name**: Neural Prototype
- **Product branding**: Neurosite
- **Stack**: Vite, React, TypeScript, Tailwind CSS, shadcn-ui

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Run locally

```sh
git clone <YOUR_GIT_URL>
cd neural-prototype
npm install
npm run dev
```

The app will start on `http://localhost:8080` by default.

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run build:dev` — create a development-mode build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run test` — run unit tests once with Vitest
- `npm run test:watch` — run Vitest in watch mode

## Deployment

Build the app and deploy the `dist/` output to any static hosting provider (for example: Vercel, Netlify, Cloudflare Pages, GitHub Pages, or an S3/CDN setup).

```sh
npm run build
```

## Repository structure

- `src/` — application source code
- `public/` — static assets
- `index.html` — HTML template and social metadata
- `vite.config.ts` — Vite configuration
