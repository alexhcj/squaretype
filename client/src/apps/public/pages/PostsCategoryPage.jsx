import React from 'react'

import {PostProvider} from "../../../context/PostContext";
import {PostsLayout} from "../layouts/PostsLayout/PostsLayout";
import { PostsCategory } from '../components/PostsCategory/PostsCategory'
import { Posts } from '../components/Posts/Posts'
import {Aside} from "../../../modules/Aside/Aside";

export const PostsCategoryPage = () => {
  return (
    <PostProvider>
      <PostsLayout hero={<PostsCategory/>} main={<Posts />} aside={<Aside />} />
    </PostProvider>
  )
}
