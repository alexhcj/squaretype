import React from 'react'
import { AdminLayout } from '../../layouts/Admin/AdminLayout'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { ThemeProvider } from '../../../context/ThemeContext'

export const CreatePostPage = () => {
  const Layout = AdminLayout(() => 'create posts', Sidebar)

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}
