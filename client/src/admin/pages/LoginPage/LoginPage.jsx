import { useAuthContext } from '../../../context/AuthContext'
import { LoginLayout } from '../../layouts/Login/LoginLayout'
import { ThemeProvider } from '../../../context/ThemeContext'
import { Login } from '../../components/Login/Login'
import { Navigate } from 'react-router-dom'

export const LoginPage = () => {
  const { user } = useAuthContext()

  if (Object.keys(user).length !== 0) return <Navigate to="/admin/posts" replace />

  const PageLayout = LoginLayout(Login)

  return (
    <ThemeProvider>
      <PageLayout />
    </ThemeProvider>
  )
}
