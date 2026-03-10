import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/dashboard.css'

const Dashboard = () => {
  const { submissions } = useContext(AppContext)

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">View all form submissions</p>

        {submissions.length === 0 ? (
          <div className="empty-state">
            <p className="empty-message">📝 No submissions yet</p>
            <p className="empty-subtext">Submit a form to see data here</p>
          </div>
        ) : (
          <div className="submissions-table">
            <div className="table-header">
              <div className="table-cell">Name</div>
              <div className="table-cell">Email</div>
              <div className="table-cell">Subject</div>
              <div className="table-cell">Timestamp</div>
            </div>
            {submissions.map((submission) => (
              <div key={submission.id} className="table-row">
                <div className="table-cell">{`${submission.firstName} ${submission.lastName}`}</div>
                <div className="table-cell">{submission.email}</div>
                <div className="table-cell">{submission.subject}</div>
                <div className="table-cell">{submission.timestamp}</div>
              </div>
            ))}
          </div>
        )}

        <div className="dashboard-stats">
          <h2>Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{submissions.length}</div>
              <div className="stat-label">Total Submissions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{new Set(submissions.map((s) => s.email)).size}</div>
              <div className="stat-label">Unique Emails</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{new Set(submissions.map((s) => s.subject)).size}</div>
              <div className="stat-label">Unique Subjects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
