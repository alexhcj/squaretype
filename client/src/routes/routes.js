import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { HomePage } from '../pages/HomePage'
import { PostPage } from '../pages/PostPage'
import { PostsCategoryPage } from '../pages/PostsCategoryPage'
import { SidebarModalProvider } from '../context/SidebarModalContext'
import { PostsSearchPage } from '../pages/PostsSearchPage'
import { ProtectedRoutes } from './protectedRoutes'
import { PostsPage } from '../admin/pages/PostsPage/PostsPage'
import { ProfilePage } from '../admin/pages/ProfilePage/ProfilePage'
import { LoginPage } from '../admin/pages/LoginPage/LoginPage'
import { CreatePostPage } from '../admin/pages/CreatePostPage/CreatePostPage'
import { EditPostPage } from '../admin/pages/EditPostPage/EditPostPage'

export const AppRoutes = () => {
  const { user } = useAuthContext()

  return (
    <SidebarModalProvider>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/:slug" element={<PostPage />} />
        <Route path="/posts/:category" element={<PostsCategoryPage />} />
        <Route path="/search" element={<PostsSearchPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoutes user={user} />}>
          <Route path="/admin/posts" element={<PostsPage />} />
          <Route path="/admin/profile" element={<ProfilePage />} />
          <Route path="/admin/create-post" element={<CreatePostPage />} />
          <Route path="/admin/edit-post/:slug" element={<EditPostPage />} />
          <Route path="/admin/*" element={<PostsPage />} />
        </Route>
      </Routes>
    </SidebarModalProvider>
  )
}
