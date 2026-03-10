import { Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import FormPage from '../pages/FormPage'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'

// Layout component that shows nested routes
const Layout = () => {
  return <Outlet />
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
