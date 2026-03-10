import { AppProvider } from './context/AppContext'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
