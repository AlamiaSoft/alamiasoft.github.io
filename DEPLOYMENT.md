# GitHub Pages Deployment Guide

This guide explains how to deploy the AlamiaSoft React website to GitHub Pages at `https://alamiasoft.github.io`.

## Prerequisites

- GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Repository Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `alamiasoft.github.io`
   - **Important:** For user/organization pages, the repository MUST be named `<username>.github.io`
   - Set it to **Public** (required for free GitHub Pages)
   - Do NOT initialize with README, .gitignore, or license (we already have these)

### 2. Initialize Git Repository Locally

```bash
cd d:/MyApps/alamiasoft.github.io-published-website

# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: React website conversion"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/alamiasoft.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Deployment Configuration

### 3. Update Vite Configuration

The `vite.config.js` is already configured with `base: '/'` which is correct for a user/organization GitHub Pages site.

**Note:** If this were a project page (e.g., `username.github.io/project-name`), you would need to set:
```javascript
base: '/project-name/'
```

### 4. Create GitHub Actions Workflow

Create a file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the settings

## Deployment Process

### Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Install dependencies
2. Build the React app
3. Deploy to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Updating the Website

To update your website:

```bash
# Make your changes to the code

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

The site will automatically rebuild and deploy within 2-3 minutes.

## Project Structure

```
alamiasoft.github.io-published-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── dist/                       # Build output (generated, not committed)
├── legacy_site/                # Original static HTML files (backup)
├── public/                     # Static assets (images, fonts, etc.)
│   ├── assets/
│   │   ├── css/
│   │   ├── fonts/
│   │   └── images/
├── src/
│   ├── components/
│   │   ├── home/              # Home page sections
│   │   └── layout/            # Header, Footer, Layout
│   ├── pages/                 # Page components
│   ├── App.jsx                # Main app with routing
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── vite.config.js             # Vite configuration
```

## Important Files to Commit

**DO commit:**
- All source files (`src/`, `public/`)
- Configuration files (`package.json`, `vite.config.js`, etc.)
- `.github/workflows/deploy.yml`
- `index.html`

**DO NOT commit:**
- `node_modules/` (add to `.gitignore`)
- `dist/` (build output, add to `.gitignore`)
- `.env` files with secrets

## Create .gitignore

Create a `.gitignore` file in the root:

```
# Dependencies
node_modules/

# Build output
dist/
dist-ssr/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production.local
.env.development.local

# Temporary files
.cache/
```

## Troubleshooting

### Build Fails

**Issue:** GitHub Actions build fails
**Solution:**
1. Check the Actions tab for error logs
2. Ensure `package.json` has all dependencies
3. Test build locally: `npm run build`
4. Check Node version compatibility

### 404 Errors on Routes

**Issue:** Direct navigation to routes (e.g., `/services/custom-development`) shows 404
**Solution:** Add a `404.html` file in `public/` that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

Then update `src/main.jsx` to handle the redirect.

### Assets Not Loading

**Issue:** Images or CSS not loading
**Solution:**
1. Ensure assets are in `public/` directory
2. Use absolute paths starting with `/` (e.g., `/assets/images/logo.png`)
3. Check browser console for 404 errors

## Custom Domain (Optional)

To use a custom domain like `www.alamiasoft.com`:

1. Add a `CNAME` file to `public/` with your domain:
   ```
   www.alamiasoft.com
   ```

2. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `alamiasoft.github.io`

3. In GitHub Settings → Pages, add your custom domain

## Monitoring

- **Build Status:** Check the Actions tab for deployment status
- **Live Site:** Visit `https://alamiasoft.github.io`
- **Build Time:** Typically 2-3 minutes from push to live

## Support

For issues:
1. Check GitHub Actions logs
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Review [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)

---

**Last Updated:** November 22, 2025
**Version:** 1.0.0
