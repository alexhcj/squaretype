import {Navigate, Outlet, useLocation} from 'react-router-dom'

export const ProtectedRoutes = ({ user }) => {
  const location = useLocation()

  if (!user || Object.keys(user).length === 0) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
