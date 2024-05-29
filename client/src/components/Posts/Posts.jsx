import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { postsAPI } from '../../api/posts'
import { usePostContext } from '../../context/PostContext'
import { PostItem } from '../shared/PostItem/PostItem'
import { Preloader } from '../Preloader/Preloader'
import { Button } from '../UI/Button/Button'
import { ReactComponent as ChevronSVG } from '../../assets/svg/chevron.svg'
import s from './Posts.module.sass'

export const Posts = () => {
  const { total, setTotal } = usePostContext()
  const [postsData, setPostsData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [offset, setOffset] = useState(0)
  const location = useLocation()
  const category = location.state ? location.state.category : ''
  const search = location.search.slice(1)
  const limit = 10

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      const query = new URLSearchParams({
        limit,
        sort: 'date',
        offset,
        category,
        search
      }).toString()

      try {
        const { posts, total } = await postsAPI.getPosts(query)
        postsData.length === 0 ? setPostsData(posts) : setPostsData((prev) => [...prev, ...posts])
        setTotal(total)
      } catch (e) {
        setIsError(true)
        console.log(`Error while fetching data: ${e}`)
        throw e
      }
      setIsLoading(false)
    }

    fetchData()
  }, [offset])

  const loadMoreHandler = (e) => {
    e.preventDefault()
    setOffset(offset + limit)
  }

  return (
    <>
      {isLoading && <Preloader className={s.preloader} />}
      <section className={s.posts}>
        {isError && <div>Something went wrong ...</div>}
        {postsData && postsData.map((post, index) => <PostItem post={post} key={index} />)}
      </section>
      {postsData.length < total && (
        <div className={s.btn}>
          <Button size="xxl" onClick={loadMoreHandler} isLoading={isLoading} icon={<ChevronSVG className={s.svg} />}>
            Load more
          </Button>
        </div>
      )}
    </>
  )
}
