import React, { useEffect, useState } from 'react'

import {postsAPI} from "../../../../shared/api/posts";
import { PostSwitchItem } from './PostSwitchItem/PostSwitchItem'
import {Preloader} from "../../../../shared/components/UI/Preloader/Preloader";
import s from './PostSwitcher.module.sass'

export const PostSwitcher = ({ slug }) => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const posts = await postsAPI.getPostsToSwitch(slug)
        setPosts(posts)
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [slug])

  return (
    <>
      {isError && 'Something went wrong'}
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={s.list}>
          {posts &&
            posts.map((post, index) => (
              <PostSwitchItem
                {...post}
                isPost={!!post}
                key={index === 0 ? 'prev' : 'next'}
                type={index === 0 ? 'prev' : 'next'}
              />
            ))}
        </div>
      )}
    </>
  )
}
