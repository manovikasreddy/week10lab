import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AppContext)

  return (
    <nav className={`navbar navbar-${theme}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon">📱</span>
            <span className="brand-text">SPA Deploy</span>
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/form" className="nav-link">
              Form
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="navbar-item">
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
