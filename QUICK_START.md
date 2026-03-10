# 🚀 Quick Start Guide - SPA Deployment App

## Installation & Setup (30 seconds)

```bash
# Navigate to project
cd "c:\Front End  Even SEM\PRACTICAL\Experiment-10"

# Install dependencies (already done if you see node_modules)
npm install

# Start development server
npm run dev
```

**App opens automatically at `http://localhost:5173`**

---

## Available Commands

### Development
```bash
npm run dev           # Start dev server with HMR
npm run lint          # Check code quality
npm run lint:fix      # Fix linting issues
```

### Production
```bash
npm run build         # Create optimized build → dist/
npm run preview       # Preview production build locally
```

---

## Project Layout

```
src/
├── components/       # Reusable UI components
│   ├── Navbar       # Navigation with theme toggle
│   ├── Footer       # Page footer
│   └── FormInput    # Form field component
│
├── pages/           # Full page components
│   ├── Home        # Landing page
│   ├── FormPage    # Form with validation
│   ├── Dashboard   # Submissions viewer
│   └── NotFound    # 404 page
│
├── routes/         # Routing setup
├── context/        # State management
├── styles/         # CSS files
├── App.jsx         # Main app component
└── config.js       # Environment config
```

---

## Key Features Demo

### 1. **Home Page**
- Click "Get Started" to navigate to form
- Click "View Dashboard" to see submissions
- Click 🌙 in navbar to toggle theme

### 2. **Form Page**
- Fill out contact form
- See real-time validation errors
- Submit to view in dashboard

### 3. **Dashboard**
- View all form submissions
- See statistics
- Track submissions by email/subject

---

## Environment Configuration

### Development (`.env`)
```env
VITE_ENVIRONMENT=development
VITE_DEBUG=true
VITE_API_URL=http://localhost:3000/api
```

### Production (`.env.production`)
```env
VITE_ENVIRONMENT=production
VITE_DEBUG=false
VITE_API_URL=https://api.example.com/api
```

---

## Form Validation Rules

- **First Name**: Required, non-empty
- **Last Name**: Required, non-empty
- **Email**: Required, valid email format
- **Phone**: Required, any format
- **Subject**: Required, non-empty
- **Message**: Required, non-empty

---

## Deployment (Choose One)

### Option 1: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 2: Vercel
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Option 3: GitHub Pages
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push
```

---

## Performance Optimizations ✨

- **Tree-shaking**: Unused code removed
- **Code Splitting**: Vendor bundle separate
- **Minification**: 60% size reduction
- **Gzip**: Additional 70% compression
- **CSS Splitting**: Per-page stylesheets

**Final Build Size**: ~77 kB (gzipped)

---

## Troubleshooting

**Port 5173 in use?**
```bash
npm run dev -- --port 3000
```

**ESLint errors?**
```bash
npm run lint:fix
```

**Build size too large?**
```bash
npm run build  # Check dist/ folder size
```

**Dependencies issue?**
```bash
rm -r node_modules package-lock.json
npm install
```

---

## File Structure Summary

```
📦 spa-deployment-app
 ├── 📂 src
 │  ├── 📂 components (3 files)
 │  ├── 📂 pages (4 files)
 │  ├── 📂 routes (1 file)
 │  ├── 📂 context (1 file)
 │  ├── 📂 styles (4 CSS files)
 │  ├── App.jsx
 │  ├── main.jsx
 │  ├── config.js
 │  └── index.css
 ├── 📂 dist (production build)
 ├── 🔧 package.json
 ├── ⚙️ vite.config.js
 ├── 🧹 eslint.config.js
 ├── 🌍 .env (development)
 ├── 🌍 .env.production
 └── 📖 README.md
```

---

## 📊 Bundle Analysis

```
dist/
├── index.html               0.53 kB
├── assets/
│   ├── index-*.css         11.42 kB (gzipped: 2.81 kB)
│   ├── vendor-*.js         42.26 kB (gzipped: 14.69 kB)
│   └── index-*.js         191.13 kB (gzipped: 59.44 kB)
```

---

## 🎯 Next Steps

1. ✅ Run: `npm install` (already done)
2. ✅ Run: `npm run dev`
3. ✅ Test the app in browser
4. ✅ Fill out and submit a form
5. ✅ Check dashboard for submissions
6. ✅ Build for production: `npm run build`
7. ✅ Deploy to cloud platform

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- [React Router Docs](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

## ✅ Checklist

- [ ] Dependencies installed
- [ ] Dev server running (`npm run dev`)
- [ ] App opens in browser
- [ ] Form page working
- [ ] Validation working
- [ ] Dashboard showing submissions
- [ ] Navbar theme toggle working
- [ ] Production build created (`npm run build`)
- [ ] Ready to deploy

---

**You're all set! 🎉**

Start with: `npm run dev`

Then open: `http://localhost:5173`
