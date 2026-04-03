import React from 'react'
import { PostProvider } from '../context/PostContext'
import { ThemeProvider } from '../context/ThemeContext'
import { SearchLayout } from '../layouts/Search/SearchLayout'
import { PostsSearch } from '../components/PostsSearch/PostsSearch'
import { Posts } from '../components/Posts/Posts'
import { Aside } from '../modules/Aside/Aside'

export const PostsSearchPage = () => {
  const Layout = SearchLayout(PostsSearch, Posts, Aside)

  return (
    <PostProvider>
      <ThemeProvider>
          <Layout />
      </ThemeProvider>
    </PostProvider>
  )
}
