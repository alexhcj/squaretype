import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { postsAPI } from '../../api/posts'
import { useThemeContext } from '../../context/ThemeContext'
import { Preloader } from '../Preloader/Preloader'
import { PostItem } from '../shared/PostItem/PostItem'
import { Title } from '../UI/Title/Title'
import { clearObject } from '../../utils/string'
import s from './RelatedPosts.module.sass'

// grids: 'column' | 'two-column'
export const RelatedPosts = ({ category, grid = 'column', className }) => {
  const { theme } = useThemeContext()
  const [posts, setPosts] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      const query = new URLSearchParams(
        clearObject({
          limit: 6,
          category
        })
      ).toString()

      try {
        const { posts } = await postsAPI.getPostsByCategory(query)
        setPosts(posts)
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className={className}>
      <div className={s.container}>
        <Title className={s.title} title="You may also like" theme={theme === 'light' ? 'dark' : 'light'} />
        <div className={cn(s.list, s[`grid_${grid}`])}>
          {isError && 'Something went wrong'}
          {isLoading && <Preloader />}
          {posts && posts.map((post) => <PostItem post={post} key={post.slug} />)}
        </div>
      </div>
    </div>
  )
}
