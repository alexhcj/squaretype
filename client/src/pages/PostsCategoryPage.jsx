import React from 'react'
import { PostsLayout } from '../layouts/Posts/PostsLayout'
import { ThemeProvider } from '../context/ThemeContext'
import { PostProvider } from '../context/PostContext'
import { PostsCategory } from '../components/PostsCategory/PostsCategory'
import { Posts } from '../components/Posts/Posts'
import { Aside } from '../modules/Aside/Aside'

export const PostsCategoryPage = () => {
  const Layout = PostsLayout(PostsCategory, Posts, Aside)

  return (
    <PostProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </PostProvider>
  )
}
