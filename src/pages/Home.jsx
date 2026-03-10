import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/global.css'

const Home = () => {
  const { submissions } = useContext(AppContext)

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SPA Deployment App</h1>
          <p className="hero-subtitle">
            A production-ready React application with form engineering, routing, and deployment optimization
          </p>
          <div className="hero-buttons">
            <Link to="/form" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/dashboard" className="btn btn-secondary">
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Optimized</h3>
            <p>Built with Vite for lightning-fast development and production builds with tree-shaking and minification</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Form Engineering</h3>
            <p>Complete form validation, error handling, and state management with Context API</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛣️</div>
            <h3>React Router</h3>
            <p>Nested routing, protected routes, and dynamic page transitions for smooth navigation</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Production Ready</h3>
            <p>Environment configuration, linting, formatting, and deployment-ready optimization</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <h2>Quick Stats</h2>
        <div className="stats-overview">
          <div className="stat">
            <span className="stat-count">{submissions.length}</span>
            <span className="stat-text">Form Submissions</span>
          </div>
          <div className="stat">
            <span className="stat-count">3</span>
            <span className="stat-text">Pages Available</span>
          </div>
          <div className="stat">
            <span className="stat-count">v1.0.0</span>
            <span className="stat-text">App Version</span>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Technology Stack</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-name">React 19</span>
          </div>
          <div className="tech-item">
            <span className="tech-name">React Router 7</span>
          </div>
          <div className="tech-item">
            <span className="tech-name">Vite 7</span>
          </div>
          <div className="tech-item">
            <span className="tech-name">ESLint</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
