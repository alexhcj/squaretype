import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routes'
import { AuthProvider } from './context/AuthContext'
import { SidebarModalProvider } from './context/SidebarModalContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SidebarModalProvider>
          <AppRoutes />
        </SidebarModalProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
