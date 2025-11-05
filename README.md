# what-ai-when

Live site: https://pschweiss2.github.io/what-ai-when/

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

Deployment
- This project is configured to deploy to GitHub Pages. The Vite `base` is set to `/what-ai-when/` so assets resolve correctly when served from `https://<user>.github.io/what-ai-when/`.
- A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the app and publishes `dist` to the `gh-pages` branch via `peaceiris/actions-gh-pages`.

Client-side routing
- If you use React Router (or another client-side router), set the router basename to `/what-ai-when` so internal routes work; e.g. <Router basename="/what-ai-when">.

Troubleshooting
- If pages show 404s for static assets, double-check `vite.config.js` contains `base: '/what-ai-when/'` and rebuild.
- If Actions fails to publish, verify `GITHUB_TOKEN` permissions in repo Settings → Actions and that Pages is allowed to be published from Actions.

If you'd like, I can also add a one-line notice in `README.md` with the exact publication timestamp and the workflow run link once the first deploy finishes.
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


