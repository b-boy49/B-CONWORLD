# Repository Guidelines

## First-Read Rule (Required)
`AGENTS.md` is the single source of truth for this repository.

- Human contributors: read this file before editing any file.
- Codex/agents: open and follow `AGENTS.md` first, then inspect only required files.
- When project behavior, links, page structure, or design rules change, update this file in the same commit.

Operational rule:
1. Change implementation.
2. Update `AGENTS.md` with what changed and where.
3. Commit both together.

## Project Structure & Module Organization
This repository is a static front-end site (no build pipeline).

- `index.html`: Main landing page with fixed left sidebar navigation.
- `sample.html`: Samples page, reusing the same sidebar and social links.
- `music.html`: Music creation page, reusing the same sidebar and social links.
- `css/style.css`: Shared styling for layout, navigation, social buttons, and animations.
- `javascript/script.js`: Client-side behavior (keep enhancements lightweight).
- `image/`: All visual assets (logos, social icons, page banners).
- `video/`: Movie sample assets used by `music.html` (`b-boy49PV.mp4`, `PV.mp4`, `6a39aee7af9f7487.mp4`).

Keep page-specific layout rules grouped in clearly named CSS blocks (for example, `.sample-*` for `sample.html`).

## Current Site Snapshot
- Sidebar is fixed on the left across pages.
- On mobile widths (around `900px` and below), sidebar navigation switches from vertical stacking to a horizontal wrapped layout.
- Top page (`index.html`) background image uses a full-image fit (`contain`) aligned to the top-right (`background-position: right top`) so the artwork remains visible.
- Top page (`index.html`) background image asset is `image/4b583400-e211-40f3-b395-474676bbd9c4.png`.
- Main pages: `index.html` (top) and `sample.html` (samples).
- Sidebar nav order includes `トップ` → `サンプル` → `音楽作成` → `料金` → `購入の流れ` → `利用規約・お問い合わせ`.
- `music.html` displays a top image (`image/5a40dd66-d567-4bae-9444-a299d209d293.png`) followed by vertically stacked product sample cards.
- The music sample section begins with a centered heading: `サンプル一覧`.
- `music.html` places a bottom background visual (`image/005b930d-8c32-4173-8bfd-f5104d19631a.png`) at the end of the music sample section, displayed viewport-sized with about 10px outer margins and scaled with `contain` to keep aspect ratio and avoid clipping.
- Each music sample card uses the same gold separator treatment as `sample.html` (gold bottom line with animated electric highlight).
- Music sample cards are slightly narrower than the sample section container and centered individually.
- Music sample cards in `music.html` use `<video>` players referencing `video/b-boy49PV.mp4`, `video/PV.mp4`, and `video/6a39aee7af9f7487.mp4`.
- Music sample cards use a fixed format: title at top, movie-screen image area in the center, and a descriptive comment at bottom.
- In music sample item 1 comment, `音源＋歌＋PV ３万円` is highlighted in yellow text.
- `price.html` displays a single pricing image (`image/cd80d8df-5c45-4b18-91b3-6f2940c80419.png`) at full width, with vertical scrolling to view the entire image.
- `flow.html` displays a full-width flow image (`image/f780bd52-9751-4108-b492-12d39c4844f1.png`) with vertical scrolling to view the entire image.
- `contact.html` (terms/contact destination) displays two full-width images (`image/b5347a23-02c2-44f1-862c-801d6d9e670b.png` then `image/3d4c1f6d-691f-4e85-aca1-c22c156052b7.png`) and a full-width image button (`image/b87b7625-3821-4545-8b9b-05805b34f2e6.png`) linking to X in a new tab.
- The contact page image button has an exaggerated hover/focus effect (lift, scale, glow, and color boost) for strong visual feedback.
- Social buttons (`X`, `Discord`, `Twitch`) are image buttons and open external links in new tabs.
- `sample.html` shows top hero banner from `image/SAMPLES TOP.png`.
- Samples hero includes animated yellow electric line at the bottom edge.
- `no4-detail.html` and `no5-detail.html` include three item cards and a note that items 1-3 can be ordered as a 1500 JPY set (normal total 2000 JPY).

## Business Context (Read First for Content Work)
Primary business context file:
- `docs/business/business-overview.md`
- `docs/business/request-contract.md`

Summary:
- Service targets streamers/VTubers/SNS creators and builds unified brand visuals from one icon.
- Main deliverables include icon, logo, stamp, overlay, schedule image, thumbnail, and promo images.
- Pricing is low-cost (e.g., icon+logo 500 JPY, overlay 1000 JPY) with a 1500 JPY set option.
- Subscription plan: 2000 JPY/month for weekly schedule visuals (4 per month).
- Design priority: maximize creator identity and consistent worldbuilding.
- Policy includes prepayment, start after payment confirmation, no unauthorized resale.
- Contract policy also defines revision limits, resale prohibition, and sample/SNS publication handling.

## Build, Test, and Development Commands
No package manager scripts are currently defined.

- `git status`: Check current modifications before commit.
- `git log --oneline -n 10`: Review recent commit style and context.
- `python -m http.server 8000` (optional): Run a local static server for browser testing.

Open `http://localhost:8000/` and verify both `index.html` and `sample.html`.

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML/CSS.
- Prefer semantic, kebab-case class names (e.g., `sample-main`, `sns-btn-discord`).
- Keep CSS variables in `:root` for reusable colors.
- Keep HTML UTF-8 encoded to avoid Japanese text corruption.
- Reuse existing visual language (black/yellow palette, fixed sidebar behavior).

## Testing Guidelines
There is no automated test framework yet. Use manual verification:

1. Check navigation links between `index.html` and `sample.html`.
2. Verify social buttons open correct external URLs in new tabs.
3. Confirm responsive behavior around `1400px` breakpoint.
4. Validate animation performance and readability on desktop/mobile widths.

If adding JavaScript logic, include a short test checklist in the PR description.

## Commit & Pull Request Guidelines
Follow concise, imperative commit messages seen in history, for example:
- `Update sidebar layout, logo, background, and social buttons`
- `Add Twitch button and resize SNS buttons to 60px`

PRs should include:
- A brief summary of UI/behavior changes.
- Changed file list (especially HTML/CSS/assets).
- Before/after screenshots or short clips for visual updates.
- Any manual verification steps performed.

## Update Policy for This File
Always update `AGENTS.md` when any of the following changes:
- Navigation labels/links
- External SNS URLs
- New pages or renamed files
- Key visual behavior (fixed layout, animations, hero/banner usage)
- Business model, pricing, service scope, or request policy docs in `docs/business`

This keeps future work fast by avoiding full-repo rediscovery.
