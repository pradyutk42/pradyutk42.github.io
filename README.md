# pradyutk42.github.io

Personal research site, built with [Astro](https://astro.build). Minimal by design:
one typeface, restrained palette, a locked single column. The landing page is a
**research overview** — everything summarized up front, with links into deeper
sections — and all the content you'll edit regularly lives in plain data files.

## Run it locally

You'll need Node 18 or newer.

```bash
npm install      # first time only — also creates package-lock.json (commit it!)
npm run dev      # http://localhost:4321, hot-reloads on save
```

To produce the static site:

```bash
npm run build    # outputs to ./dist
npm run preview  # serve the built site locally
```

## How content works (read this first)

The whole site is driven by four data files in `src/data/`. **You almost never
touch HTML or CSS** — you edit these:

| File | Controls | To update… |
|------|----------|------------|
| `src/data/profile.ts`  | name, role, affiliation, bio, all your links | edit one field |
| `src/data/research.ts` | research themes (summary on home, full text on /research) | copy a block, edit it |
| `src/data/news.ts`     | the "Recent" list on the home page | add one line |
| `src/data/posts.ts`    | which blog posts appear in listings | add one entry |

The landing page (`src/pages/index.astro`) reads all four and assembles the
overview automatically. Add a research theme to `research.ts` and it shows up on
the home page *and* the research page, deep-linked, with no other edits.

## Adding things

**A news item.** One line in `src/data/news.ts`:

```ts
{ date: "2026-05-01", text: "Gave a talk at XYZ.", href: "https://…" },
```

**A research theme.** Copy a block in `src/data/research.ts`, change the fields.
`summary` shows on the home page; `detail` shows on `/research#<slug>`.

**A plain-prose blog post.** Create `src/pages/blog/my-post.md`:

```markdown
---
layout: ../../layouts/BlogPost.astro
title: "My post title"
date: 2026-05-10
readingTime: "5 min"
---

Write Markdown here.
```

The route `/blog/my-post` is created automatically. Then add an entry to
`src/data/posts.ts` so it appears in the listings.

**A blog post with interactive bits** (charts, simulators). Create
`src/pages/blog/my-post.astro` instead, import the components you need (see
`why-i-do-what-i-do.astro` using `<SEIRSimulator />`), then add it to
`src/data/posts.ts`.

**Hide a draft.** Set `draft: true` on its entry in `posts.ts`. The post page
still exists at its URL, but it won't show in any listing.

**Your headshot.** Drop `public/portrait.jpg`, then uncomment the `<img>` in
`src/pages/index.astro`. **Your CV PDF.** Drop `public/cv.pdf` — links already
point at it.

## Folder map

```
src/
├── data/                  ← edit these weekly
│   ├── profile.ts
│   ├── research.ts
│   ├── news.ts
│   └── posts.ts
├── pages/                 ← routes (file = URL); rarely touched
│   ├── index.astro        ← the research overview
│   ├── about.astro
│   ├── research.astro
│   ├── cv.astro
│   └── blog/
│       ├── index.astro
│       └── why-i-do-what-i-do.astro   (interactive post)
├── layouts/
│   ├── BaseLayout.astro   ← html shell, fonts, theme toggle
│   └── BlogPost.astro     ← wrapper for Markdown posts
├── components/
│   ├── Nav.astro
│   ├── Footer.astro
│   └── SEIRSimulator.astro
└── styles/global.css      ← the entire design system (~330 lines)

public/                    ← static files served at the site root
└── (portrait.jpg, cv.pdf, papers/, photos/ …)

.github/workflows/deploy.yml   ← auto-deploy on push to main
```

## Putting this into your repo

Your repo `pradyutk42.github.io` currently holds the old Jekyll site. To replace
it with this Astro version (keeping the git history):

```bash
# 1. Clone your repo (or pull if you already have it)
git clone https://github.com/pradyutk42/pradyutk42.github.io.git
cd pradyutk42.github.io

# 2. Move the old Jekyll files out of the way (don't delete yet — keep a backup branch)
git checkout -b jekyll-backup
git push origin jekyll-backup
git checkout main

# 3. Remove the old site files (everything except .git)
git rm -rf .            # stages deletion of tracked files

# 4. Copy in everything from this pradyut-site/ folder
#    (the contents, not the folder itself — so package.json lands at the repo root)
cp -R /path/to/pradyut-site/. .

# 5. Generate the lockfile and confirm it builds
npm install
npm run build

# 6. Commit and push
git add -A
git commit -m "Replace Jekyll site with Astro"
git push origin main
```

If you'd rather not nuke the old site in place, an alternative is to make a fresh
repo, get it working there, and only swap the `pradyutk42.github.io` repo once
you're happy. Less risky, slightly more setup.

## Turning on GitHub Pages

The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every
push to `main`. To enable it:

1. Push the code (above).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. Pushes to `main` now rebuild and publish in a couple of minutes. Watch
progress under the **Actions** tab.

> **Important:** commit `package-lock.json` (created by `npm install`). The CI uses
> `npm ci`, which requires the lockfile. Without it the first deploy will fail.

Alternative hosts, each with a one-click GitHub import and zero config: Cloudflare
Pages, Netlify, Vercel. All free at this scale and faster to set up than Pages.

## Design notes

**One typeface, always** — [Newsreader](https://fonts.google.com/specimen/Newsreader),
a warm variable serif. Swap it in two places: the Google Fonts link in
`BaseLayout.astro` and `--font-serif` in `global.css`.

**Terracotta is reserved** for links and exactly one heading — your name on the
home page. Everything else is near-black, which makes the accent land harder.

**Dark mode** follows the system by default; the `dark`/`light` toggle in the nav
overrides and persists. A pre-paint inline script prevents the flash.

## The SEIR simulator

Pure vanilla JS, no dependencies, hand-rolled SVG, in
`src/components/SEIRSimulator.astro`. β is derived from R₀ and the infectious
period; integration is forward Euler at dt = 0.25 over 180 days. Good enough for
an explainer; swap in RK4 if you ever want it rigorous.

## Deliberately not included

No Tailwind, no CSS framework, no CMS, no client-side router, no analytics. The
entire design is one CSS file. Keeping it that way is what keeps the site yours.
