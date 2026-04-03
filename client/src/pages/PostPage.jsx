import React from 'react'
import { PostLayout } from '../layouts/Post/PostLayout'
import { PostProvider } from '../context/PostContext'
import { ThemeProvider } from '../context/ThemeContext'
import { PostHero } from '../components/Post/PostHero/PostHero'
import { PostText } from '../components/Post/PostText/PostText'
import { Aside } from '../modules/Aside/Aside'

export const PostPage = () => {
  const Layout = PostLayout(PostHero, PostText, Aside)

  return (
    <PostProvider>
      <ThemeProvider>
          <Layout />
      </ThemeProvider>
    </PostProvider>
  )
}
