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


