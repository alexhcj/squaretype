import React from 'react'

import {PostProvider} from "../../../context/PostContext";
import { SearchLayout } from '../layouts/SearchLayout/SearchLayout'
import { PostsSearch } from '../components/PostsSearch/PostsSearch'
import { Posts } from '../components/Posts/Posts'
import {Aside} from "../../../modules/Aside/Aside";

export const PostsSearchPage = () => {
  return (
    <PostProvider>
      <SearchLayout hero={<PostsSearch/>} main={<Posts/>} aside={<Aside/>} />
    </PostProvider>
  )
}
