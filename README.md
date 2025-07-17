# Sadman Biazid Arnob | Portfolio

A modern, production-ready, and SEO-optimized portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features
- Fully responsive and mobile-first design
- SEO meta tags (title, description, Open Graph, Twitter, canonical, robots)
- Accessible, semantic HTML and ARIA labels
- PWA support (manifest, icons, favicon)
- Animations and smooth transitions
- Easy deployment to GitHub Pages
- LLM-friendly (llm.txt)

## 🛠️ Setup
1. **Clone the repo:**
   ```sh
   git clone https://github.com/arnobiscoding/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run locally:**
   ```sh
   npm run dev
   ```

## 🌐 Production Deployment (GitHub Pages)
1. **Set the correct base in `vite.config.ts`:**
   ```ts
   base: '/portfolio/',
   ```
2. **Add homepage and deploy scripts in `package.json`:**
   ```json
   "homepage": "https://arnobiscoding.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. **Deploy:**
   ```sh
   npm run deploy
   ```
4. **Set GitHub Pages source:**
   - Go to your repo Settings → Pages
   - Set source to `gh-pages` branch (root)
   - Your site will be live at: https://arnobiscoding.github.io/portfolio

## 🔍 SEO & Social
- All meta tags use your real GitHub Pages URL
- `manifest.json` and `robots.txt` are configured for best SEO
- Add a `sitemap.xml` for even better discoverability

## ♿ Accessibility
- All interactive elements have descriptive `aria-label`s
- Keyboard navigation and focus rings are supported
- Semantic HTML structure

## 🧑‍💻 Maintenance
- To update, make changes locally, then run `npm run deploy`
- Replace `public/favicon.ico` with your real favicon for branding
- Update `arnob.jpg` for your profile image

---

For more, see the code and comments in `index.html`, `public/robots.txt`, `public/llm.txt`, and `public/manifest.json`.
