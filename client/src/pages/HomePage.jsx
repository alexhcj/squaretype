import React from 'react'
import { PostProvider } from '../context/PostContext'
import { Aside } from '../modules/Aside/Aside'
import { HomeHero } from '../components/HomeHero/HomeHero'
import { Posts } from '../components/Posts/Posts'
import { HomeLayout } from '../layouts/Home/HomeLayout'

export const HomePage = () => {
  const PageLayout = HomeLayout(HomeHero, Posts, Aside)

  return (
    <PostProvider>
          <PageLayout />
    </PostProvider>
  )
}
