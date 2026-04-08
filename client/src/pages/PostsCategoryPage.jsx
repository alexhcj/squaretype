import React from 'react'
import { PostsLayout } from '../layouts/Posts/PostsLayout'
import { PostProvider } from '../context/PostContext'
import { PostsCategory } from '../components/PostsCategory/PostsCategory'
import { Posts } from '../components/Posts/Posts'
import { Aside } from '../modules/Aside/Aside'
import { DefaultLayout } from '../layouts/Default/DefaultLayout'

export const PostsCategoryPage = () => {
  const Layout = PostsLayout(PostsCategory, Posts, Aside)

  return (
    <PostProvider>
      <DefaultLayout>
        <Layout />
      </DefaultLayout>
    </PostProvider>
  )
}
