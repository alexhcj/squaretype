import React from 'react'

import {PostProvider} from "../../../context/PostContext";
import { PostLayout } from '../layouts/PostLayout/PostLayout'
import { PostHero } from '../components/Post/PostHero/PostHero'
import { PostText } from '../components/Post/PostText/PostText'
import {Aside} from "../../../modules/Aside/Aside";

export const PostPage = () => {
  return (
    <PostProvider>
      <PostLayout hero={<PostHero/>} main={<PostText />} aside={<Aside />} />
    </PostProvider>
  )
}
