import React from 'react'
import { useLocation } from 'react-router-dom'

import {PostProvider} from "../../../context/PostContext";
import { SearchLayout } from '../layouts/SearchLayout/SearchLayout'
import { PostsSearch } from '../components/PostsSearch/PostsSearch'
import { Posts } from '../components/Posts/Posts'
import {Aside} from "../../../modules/Aside/Aside";
import useDocumentTitle from '../../../hooks/useDocumentTitle'

export const PostsSearchPage = () => {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const searchQuery = queryParams.get('search')
  useDocumentTitle(searchQuery)
  return (
    <PostProvider>
      <SearchLayout hero={<PostsSearch />} main={<Posts />} aside={<Aside />} />
    </PostProvider>
  )
}
