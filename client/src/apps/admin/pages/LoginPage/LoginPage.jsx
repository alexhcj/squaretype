import { Navigate } from 'react-router-dom'

import { LoginLayout } from '../../layouts/LoginLayout/LoginLayout'
import {useAuthContext} from "../../../../context/AuthContext";

export const LoginPage = () => {
  const { user } = useAuthContext()

  if (Object.keys(user).length !== 0) return <Navigate to="/admin/posts" replace />

  return (
      <LoginLayout />
  )
}
