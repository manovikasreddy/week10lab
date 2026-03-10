import '../styles/global.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>SPA Deployment Application built with React, Vite, and React Router for production-ready deployments.</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#form">Form</a></li>
              <li><a href="#dashboard">Dashboard</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Docs</a></li>
              <li><a href="https://vite.dev" target="_blank" rel="noopener noreferrer">Vite Docs</a></li>
              <li><a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">React Router</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} SPA Deployment App. All rights reserved.</p>
          <p>Environment: {import.meta.env.VITE_ENVIRONMENT}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
