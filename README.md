# AlamiaSoft Website

Modern React-based website for AlamiaSoft - Innovative Software Solutions.

## Live Site 

Visit: [https://alamiasoft.github.io](https://alamiasoft.github.io)

## Features

- **Modern React Architecture** - Built with Vite + React for optimal performance
- **Responsive Design** - Mobile-first design that works on all devices
- **Service Pages** - Detailed pages for Custom Development, Cloud Solutions, Data Analytics, and Consulting
- **Product Showcase** - Featured product: AI Agent Kit Pro
- **Smooth Navigation** - Client-side routing with React Router
- **Custom Styling** - Tailwind CSS with custom brand colors and animations
- **SEO Optimized** - Proper meta tags and semantic HTML

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS 4
- **Icons:** Font Awesome 6
- **Fonts:** Ubuntu & Nunito (Google Fonts)

## Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/alamiasoft.github.io.git

# Navigate to project directory
cd alamiasoft.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── home/              # Home page sections
│   │   ├── Hero.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ProductsSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── ContactSection.jsx
│   └── layout/            # Layout components
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Layout.jsx
├── pages/                 # Page components
│   ├── Home.jsx
│   ├── CustomDevelopment.jsx
│   ├── CloudSolutions.jsx
│   ├── DataAnalytics.jsx
│   ├── Consulting.jsx
│   └── AIAgentKitPro.jsx
├── App.jsx               # Main app with routing
├── index.css             # Global styles
└── main.jsx              # Entry point
```

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Customization

### Colors

Brand colors are defined in `tailwind.config.js`:
- Primary: Indigo/Purple gradient
- Accent: Blue
- Background: Light gray gradient

### Fonts

- Headings: Ubuntu
- Body: Nunito

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/layout/Header.jsx`

## License

Copyright © 2025 AlamiaSoft. All rights reserved.

## Contact

- **Email:** amr.shah@gmail.com
- **Phone:** +92 334 5112969
- **Website:** [https://alamiasoft.github.io](https://alamiasoft.github.io)

---

Built with ❤️ by AlamiaSoft
