import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.hook'

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', {})

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
