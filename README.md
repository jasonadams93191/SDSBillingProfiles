# SDS Billing Profiles – Guidelines Viewer

A lightweight HTML tool for visualizing SDS Billing Profile guidelines, deployable to **Vercel** or served from **GitHub Pages** with zero build steps.

---

## 📁 File Structure

```
SDSBillingProfiles/
├── index.html        # Main viewer application
├── guidelines.html   # Sample SDS Billing Profile guidelines document
├── vercel.json       # Vercel deployment configuration
└── README.md
```

---

## 🚀 Quick Start

### Option 1 – Open locally

Because the app fetches `guidelines.html` via `fetch()`, you need a local HTTP server (browsers block `file://` cross-origin requests).

```bash
# Node.js (npx – no install required)
npx serve .

# Python 3
python -m http.server 8080

# PHP
php -S localhost:8080
```

Then open the URL shown in the terminal output (e.g. `http://localhost:3000` for `npx serve`, `http://localhost:8080` for Python/PHP).

### Option 2 – Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import this repo.
3. Vercel auto-detects the `vercel.json`; no build configuration required.
4. Click **Deploy** – your app will be live at `https://sds-billing-profiles.vercel.app` (or your custom domain).

### Option 3 – GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Set source to the `main` branch, root folder (`/`).
3. Save – the viewer will be available at `https://<your-org>.github.io/SDSBillingProfiles/`.

---

## 📖 Using the Viewer

| Feature | How to use |
|---|---|
| **Load a preset document** | Use the *Load document* dropdown in the toolbar |
| **Upload your own HTML** | Click *Upload HTML* and select any `.html` / `.htm` file |
| **Table of Contents** | Auto-generated from headings; click entries to jump |
| **Print** | Click 🖨 Print – sidebar and toolbar are hidden automatically |
| **Clear** | Click ✕ Clear to return to the welcome screen |

---

## ➕ Adding More Guideline Documents

1. Add your HTML file to this repository (e.g., `tax-guidelines.html`).
2. In `index.html`, add an `<option>` to the `#doc-select` dropdown:

```html
<option value="tax-guidelines.html">Tax Guidelines</option>
```

3. Redeploy (or push to the Pages branch).

---

## 🛠 Tech Stack

- **Pure HTML / CSS / Vanilla JS** – no framework, no build step, no dependencies
- **Vercel** for hosting (static file serving)
- Compatible with GitHub Pages
