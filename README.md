# Project's Hub — Static Front-End Demo

A polished 3-page static website built with **HTML5**, **CSS3**, and minimal **vanilla JavaScript**.
This demo is designed to show a student-investor marketplace flow with a landing page, investor login, and admin dashboard.

---

## Pages

| File | Page | Description |
|---|---|---|
| `index.html` | Landing | Hero section, featured project cards, investor CTA |
| `login.html` | Login | Investor sign-in form with client-side validation |
| `admin.html` | Admin Dashboard | Dashboard stats, project approvals, and demo actions |

**User flow:** `index.html` → `login.html` → `admin.html` → `index.html`

---

## Demo behavior

- `index.html` includes a responsive hero and project card grid.
- `login.html` uses JavaScript to validate that email and password fields are filled before submission.
- `admin.html` provides interactive demo actions:
  - `Approve` toggles a project status to active.
  - `Delete` removes a project row.
  - `Load More Projects` displays a demo notice.
- Links with `href="#"` are inactive in this static demo and show a message instead.

---

## How to view locally

### Option 1 — Open directly
Open `index.html` in a browser. The pages are connected with relative links and will work without a server.

### Option 2 — Use VS Code Live Server
1. Install the **Live Server** extension.
2. Open the `site/` folder.
3. Right-click `index.html` and choose **Open with Live Server**.

---

## Deployment

### GitHub Pages
1. Push the repository to GitHub.
2. In repository **Settings → Pages**, choose branch `main` and folder `/site`.
3. Save and use the generated URL.

### Netlify
1. Sign in to Netlify.
2. Drag the `site/` folder into the deploy area.
3. Publish the site.

---

## Tech stack

- HTML5
- CSS3
- JavaScript (client-side demo interactions)
- Google Fonts: Montserrat, DM Sans
- Material Symbols icon font

> Note: This project is a static demo and does not include a backend or real authentication.
