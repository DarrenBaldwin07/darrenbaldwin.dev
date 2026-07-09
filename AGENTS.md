# AGENTS.md

Personal Next.js (App Router) site for darrenbaldwin.dev. No test suite, no CI.

## Package manager

Use **pnpm**, not npm/yarn. `pnpm-lock.yaml` is the canonical lockfile (present
since project init). A stray `package-lock.json` also exists in the repo from
a past accidental `npm install` — do not update it; do not run plain `npm
install`. If you add/remove a dependency, run `pnpm install` and commit only
`pnpm-lock.yaml`.

## Commands

- `pnpm dev` — dev server (Turbopack)
- `pnpm build` — production build
- `pnpm lint` — `next lint` (eslint-config-next core-web-vitals + typescript)
- No `test` or `typecheck` script exists. For type checking use `pnpm tsc --noEmit`.

## Formatting

Prettier config uses **tabs** (`useTabs: true`), single quotes, JSX single
quotes, semicolons, `bracketSameLine: true`. `*.mdx` files and `pnpm-lock.yaml`
are excluded from Prettier (`.prettierignore`). Match existing tab-indented
style in `.tsx`/`.ts` files.

## Structure

- `app/` — App Router pages. `app/page.tsx` is the homepage; `app/blog/*` are
  MDX blog posts (e.g. `app/blog/hello-world/page.mdx`), rendered via
  `app/blog/layout.tsx` and `mdx-components.tsx` (custom MDX element styling
  lives there, including `sugar-high` code highlighting).
- `components/` — flat, no subfolders yet (`Container.tsx`, `X.tsx`,
  `Github.tsx`).
- `lib/utils.ts` — has `cn()` helper (clsx + tailwind-merge).
- `components.json` (shadcn/ui config) declares aliases for `@/components`,
  `@/components/ui`, `@/hooks`, `@/lib` — these dirs (`components/ui`,
  `hooks/`) don't exist yet; create them in those exact locations if adding
  shadcn components.
- New blog posts: add an MDX file under `app/blog/<slug>/page.mdx` and add a
  matching entry to the `BLOG_POSTS` array in `app/page.tsx` (title, slug,
  description) — posts aren't auto-discovered from the filesystem.

## Tailwind

Tailwind v4 (CSS-based config, no `tailwind.config.js`); theme/tokens live in
`app/globals.css`. `@tailwindcss/typography` is installed for MDX prose
styling.
