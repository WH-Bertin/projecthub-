# Project's Hub — Static Showcase

A 3-page static front-end built with **pure HTML5** and **CSS3**.  
No build step needed, just open a file in your browser or host the `site/` folder anywhere.

---

## Pages

| File | Page | Description |
|---|---|---|
| `index.html` | Landing Page | Hero, project cards, CTA |
| `login.html` | Login | Investor sign-in form |
| `admin.html` | Admin Dashboard | Stats + project management table |

**User flow:** Landing → Login → Admin Dashboard → (Logout) → Landing

---

## How to view locally

### Option 1 — Just double-click
Open `site/index.html` directly in your browser. All pages link to each other
using relative paths so navigation works without a server.

### Option 2 — VS Code Live Server (recommended for development)
1. Install the **Live Server** extension in VS Code.
2. Right-click `site/index.html` → **Open with Live Server**.

---

## How to deploy for free

### GitHub Pages (easiest)
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to the `main` branch and folder to `/site`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Drag the `site/` folder onto the Netlify deploy area.
3. Done, you get a live URL instantly.

---

## Tech used

- HTML5 semantic elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- CSS3 for styling and formatting
- Google Fonts: Montserrat + DM Sans
- Google Material Symbols icons (icon font)

> All external resources load from CDN, an internet connection is required.
