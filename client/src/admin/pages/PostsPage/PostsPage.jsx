import { AdminLayout } from '../../layouts/Admin/AdminLayout'
import { ThemeProvider } from '../../../context/ThemeContext'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Posts } from '../../components/Posts/Posts'

export const PostsPage = () => {
  const Layout = AdminLayout(Posts, Sidebar)

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}
