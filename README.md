# what-ai-when

Live site: (deployed to Cloudflare Pages)

Short notes
- Run locally:

```bash
npm ci
npm run dev
```

- Build for production:

```bash
npm run build
```

- Serve the built `dist` locally to sanity-check assets:

```bash
npx serve dist
# or: npx http-server dist
```

Deployment (Cloudflare Pages)
- This project is set up to deploy to Cloudflare Pages. Cloudflare Pages expects a root-based site by default, so `vite.config.js` uses `base: '/'`.
- Connect your GitHub repository to Cloudflare Pages, set the Build command to:

```text
npm run build
```

and the "Build output directory" to:

```text
dist
```

- Cloudflare will automatically build and publish on push. If you prefer a custom domain, configure it in the Pages dashboard.

Client-side routing
- If you use React Router, set the router basename to `/` (or to your custom path if you host under a subpath). Example: <Router basename="/">.

Troubleshooting
- If static assets 404, confirm `vite.config.js` contains `base: '/'` (or the correct subpath), rebuild, and redeploy.

If you'd like, I can add a short Cloudflare Pages deployment guide or an example `pages` configuration file.
## What AI, When?

A lightweight static React site to help people choose the right AI tool for a given task. Users can select a persona, browse tool cards, and open detail pages describing model options, value, and use cases.

- **License**: MIT
- **Stack**: React 18, React Router, Vite
 - **Focus**: Augmenting human work and life (not replacement)

### Getting Started

Prereqs: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL from the console (usually `http://localhost:5173`).

### Build & Preview (Static)

```bash
npm run build
npm run preview
```

The static output is in `dist/` and can be hosted on any static host.

### Project Structure

- `src/data/tools.js`: Personas and example tools/models.
- `src/pages/HomePage.jsx`: Persona selection and tool cards.
- `src/pages/ToolDetailPage.jsx`: Tool details with model info.
- `src/pages/Fundamentals.jsx`: AI fundamentals for augmentation.
- `src/components/Disclaimer.jsx`: Prominent site-wide disclaimer.
 - `src/config.js`: Configure external URLs like the feedback form.

### Contributing

Contributions welcome! Please:

1. Fork and create a feature branch.
2. Keep code simple and accessible.
3. Submit a PR with a clear description.

### Disclaimer
### Configuration

- Feedback form URL: edit `src/config.js` and set `FEEDBACK_FORM_URL` to your form (Google Form, Typeform, etc.). A Feedback link appears in the header and footer.

### Features

- Persona-based filtering with an "All tools" option
- Search across name, vendor, summary, and tags
- Detail pages listing model value and use cases
- AI Fundamentals page centered on augmentation patterns

These are suggestions based on research and real-world experience. They do not necessarily represent the opinions of the respective companies.


