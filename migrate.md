# Migration from Jekyll to Nuxt.js

## What was migrated:

### ✅ Content
- [x] Homepage content (index.md → pages/index.vue)
- [x] Experience page (experience.md → pages/experience.vue)
- [x] Site configuration (_config.yml → nuxt.config.ts)

### ✅ Layout & Styling
- [x] Default layout (_layouts/default.html → layouts/default.vue)
- [x] CSS styles (assets/css/* → assets/css/main.css)
- [x] Responsive design
- [x] Theme control functionality

### ✅ Assets
- [x] Logo and social media icons (assets/img/* → public/*)
- [x] JavaScript functionality (theme control, scale fix)

### ✅ Configuration
- [x] Package.json with Nuxt.js dependencies
- [x] Nuxt.js configuration
- [x] GitHub Actions for deployment
- [x] .gitignore for Nuxt.js

## Next steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run generate
   ```

4. **Deploy:**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Set source to "GitHub Actions"

## Key differences:

- **Routing**: File-based routing instead of Jekyll's page system
- **Components**: Vue components instead of Liquid templates
- **Styling**: Tailwind CSS + custom CSS instead of pure CSS
- **Build**: Nuxt.js static generation instead of Jekyll build
- **Assets**: Public directory instead of assets directory for static files