import React from 'react'
import { useParams } from 'react-router-dom'

import {PostProvider} from "../../../context/PostContext";
import { PostLayout } from '../layouts/PostLayout/PostLayout'
import { PostHero } from '../components/Post/PostHero/PostHero'
import { PostText } from '../components/Post/PostText/PostText'
import {Aside} from "../../../modules/Aside/Aside";
import useDocumentTitle from '../../../hooks/useDocumentTitle'
import { kebabToTitleSpaces } from '../../../shared/utils/transform'

export const PostPage = () => {
  const { slug } = useParams()
  useDocumentTitle(kebabToTitleSpaces(slug))
  return (
    <PostProvider>
      <PostLayout hero={<PostHero/>} main={<PostText />} aside={<Aside />} />
    </PostProvider>
  )
}
