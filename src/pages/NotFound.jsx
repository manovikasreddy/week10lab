import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-message">Page Not Found</p>
          <p className="not-found-description">Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
