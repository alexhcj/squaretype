import React from 'react'
import { useParams } from 'react-router-dom'
import {PostProvider} from "../../../context/PostContext";
import {PostsLayout} from "../layouts/PostsLayout/PostsLayout";
import { PostsCategory } from '../components/PostsCategory/PostsCategory'
import { Posts } from '../components/Posts/Posts'
import {Aside} from "../../../modules/Aside/Aside";

export const PostsCategoryPage = () => {
  const { category } = useParams()

  return (
    <PostProvider>
      <PostsLayout 
        hero={<PostsCategory categoryName={category} />} 
        main={<Posts categoryName={category} />} 
        aside={<Aside />} 
      />
    </PostProvider>
  )
}