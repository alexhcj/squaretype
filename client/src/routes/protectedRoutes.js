import {Navigate, Outlet, useLocation} from 'react-router-dom'

export const ProtectedRoutes = ({ user, children }) => {
  const pathname = useLocation()

  if (Object.keys(user).length === 0) {
    return <Navigate to={'/admin/login'} replace />
  }

  if (pathname.pathname === '/admin') {
    return <Navigate to={'/admin/posts'} replace />
  }

  return children ? children : <Outlet />
}
