import React from 'react'

import {PostProvider} from "../../../context/PostContext";
import { HomeLayout } from '../layouts/HomeLayout/HomeLayout'
import { HomeHero } from '../components/HomeHero/HomeHero'
import { Posts } from '../components/Posts/Posts'
import {Aside} from "../../../modules/Aside/Aside";
import useDocumentTitle from '../../../hooks/useDocumentTitle'

export const HomePage = () => {
  useDocumentTitle("Home")
  return (
    <PostProvider>
      <HomeLayout hero={<HomeHero />} main={<Posts />} aside={<Aside />} />
    </PostProvider>
  )
}
