# SPA Deployment App - Production Ready

A fully functional React Single Page Application (SPA) built with modern tooling for production deployment. This project demonstrates best practices in bundling, optimization, environment management, and cloud deployment.

## 📋 Project Overview

**Experiment 10 - Week 10: Packaging and Deployment of SPA with Forms**

This application is built with:
- ⚡ **Vite 7** - Lightning-fast build tool with tree-shaking and minification
- ⚛️ **React 19** - Latest React with hooks and best practices
- 🛣️ **React Router 7** - Advanced routing with nested routes
- 🎯 **Context API** - State management for forms and application state
- 🎨 **Modern CSS** - Responsive design with CSS Grid and Flexbox
- 📦 **Optimized Build** - Production-ready with code splitting and asset compression

## 🗂️ Project Structure

```
spa-deployment-app/
│
├── public/
│   └── index.html              # Static HTML entry point
│
├── src/
│   ├── assets/                 # Images and media files
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   ├── Footer.jsx          # Application footer
│   │   └── FormInput.jsx       # Reusable form input component
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero section
│   │   ├── FormPage.jsx        # Form with validation
│   │   ├── Dashboard.jsx       # Form submissions viewer
│   │   └── NotFound.jsx        # 404 error page
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx       # Application routing setup
│   │
│   ├── context/
│   │   └── AppContext.jsx      # Global app context and state
│   │
│   ├── styles/
│   │   ├── global.css          # Global styling and theme
│   │   ├── navbar.css          # Navigation styles
│   │   ├── form.css            # Form page styles
│   │   └── dashboard.css       # Dashboard styles
│   │
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React DOM render point
│   ├── index.css               # Base CSS resets
│   ├── App.css                 # App-level styles
│   └── config.js               # Environment configuration
│
├── .env                        # Development environment variables
├── .env.production             # Production environment variables
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration with optimizations
├── eslint.config.js            # ESLint configuration
├── .gitignore                  # Git ignore patterns
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ (LTS recommended)
- npm or yarn package manager

### Installation

```bash
# Clone or navigate to project directory
cd spa-deployment-app

# Install dependencies
npm install

# Start development server with hot module reloading
npm run dev
```

The app will open automatically at `http://localhost:5173`

## 📝 Available Scripts

### Development
```bash
npm run dev           # Start development server with HMR
npm run lint          # Run ESLint to check code quality
npm run lint:fix      # Auto-fix ESLint issues
npm run format        # Format code with Prettier
```

### Production
```bash
npm run build         # Create optimized production build
npm run preview       # Preview production build locally
npm run build:analyze # Analyze bundle size
```

## 🔧 Configuration

### Environment Variables

Create `.env` file for development:
```env
VITE_APP_TITLE=SPA Deployment App
VITE_APP_VERSION=1.0.0
VITE_API_URL=http://localhost:3000/api
VITE_ENVIRONMENT=development
VITE_DEBUG=true
```

Create `.env.production` for production:
```env
VITE_APP_TITLE=SPA Deployment App
VITE_APP_VERSION=1.0.0
VITE_API_URL=https://api.example.com/api
VITE_ENVIRONMENT=production
VITE_DEBUG=false
```

### Vite Configuration

The `vite.config.js` includes production optimizations:

- **Tree-shaking**: Removes unused code
- **Minification**: Terser for JavaScript compression
- **Code Splitting**: Separate vendor bundle
- **CSS Code Splitting**: Individual CSS files per component
- **Asset Optimization**: Compressed images and files

## 📱 Features

### 1. Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Breakpoints for different screen sizes

### 2. Form Engineering
- **Validation**: Client-side form validation
- **Error Handling**: Field-level error messages
- **State Management**: Context API for form state
- **FormInput Component**: Reusable, validated input fields

### 3. Routing
- **Nested Routes**: Organized route structure
- **Dynamic Navigation**: React Router Link components
- **404 Handling**: NotFound page for invalid routes

### 4. Context API
- Centralized state management
- Form data persistence
- Submission history tracking
- Theme switching capability

### 5. Production Ready
- Linting with ESLint
- Code splitting strategies
- Minification and compression
- Optimized bundle size
- Source maps for debugging

## 🎨 Styling

### Global CSS Variables
```css
--primary-color: #3b82f6
--secondary-color: #10b981
--danger-color: #ef4444
--dark-bg: #1f2937
--light-bg: #f9fafb
```

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 📊 Form Validation

The form includes validation for:
- Required fields
- Email format validation
- Phone number format
- Field-level error messages
- Submission tracking in dashboard

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

Creates optimized build in `dist/` folder.

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

1. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repo-name/',
  // ... rest of config
})
```

2. Deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push
```

## 🔍 Performance Optimization

### Bundle Analysis
```bash
npm run build:analyze
```

### Key Optimizations Implemented

1. **Tree-shaking** - Removes unused exports
2. **Code Splitting** - Separate vendor bundle
3. **CSS Splitting** - Individual CSS per route
4. **Minification** - Terser compression
5. **Asset Compression** - Images and fonts optimized
6. **Lazy Loading** - Route-based code splitting in router

### Performance Tips

- Use `React.memo()` for component optimization
- Implement code splitting for large components
- Optimize images before deployment
- Monitor bundle size regularly

## 📚 Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI Framework |
| React Router | 7.0.0 | Routing |
| Vite | 7.3.1 | Build Tool |
| ESLint | 9.39.1 | Linting |
| Terser | Latest | Minification |

## 🐛 Troubleshooting

### Issues and Solutions

**Port 5173 already in use:**
```bash
# Use different port
npm run dev -- --port 3000
```

**Build size too large:**
```bash
# Analyze bundle
npm run build:analyze
# Check for unused dependencies
npm ls
```

**Environment variables not loading:**
- Restart dev server
- Variables must start with `VITE_`
- Check `.env` file exists in root

## 📖 Learning Resources

- [Vite Documentation](https://vite.dev)
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)

## 🤝 Best Practices Implemented

✓ Component-based architecture
✓ Separation of concerns
✓ Reusable components
✓ Centralized state management
✓ Environment-based configuration
✓ Production optimizations
✓ Code quality with ESLint
✓ Responsive design
✓ Accessibility considerations
✓ Performance monitoring

## 📝 License

This project is part of Experiment 10 course material. Use for educational purposes.

## 📞 Support

For issues or questions, refer to the course materials or documentation.

---

**Version**: 1.0.0  
**Last Updated**: 2026  
**Environment**: Production Ready
