import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {usePostContext} from "../../../../context/PostContext";
import {postsAPI} from "../../../../shared/api/posts";
import {Preloader} from "../../../../shared/components/UI/Preloader/Preloader";
import {Button} from "../../../../shared/components/UI/Button/Button";
import {PostCard} from "../../../../shared/components/PostCard/PostCard";
import { ReactComponent as ChevronSVG } from '../../../../assets/svg/chevron.svg'
import s from './Posts.module.sass'

export const Posts = ({ categoryName }) => {
  const { total, setTotal } = usePostContext()
  const [postsData, setPostsData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [offset, setOffset] = useState(0)
  
  const location = useLocation()
  const search = location.search.slice(1)
  const limit = 10

  useEffect(() => {
    setPostsData([])
    setOffset(0)
  }, [categoryName, search])

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      const query = {
        limit,
        sort: 'date',
        offset,
        category: categoryName || '', 
        search
      }

      try {
        const { posts, total } = await postsAPI.getPosts(query)
        
        if (offset === 0) {
          setPostsData(posts)
        } else {
          setPostsData((prev) => [...prev, ...posts])
        }
        
        setTotal(total)
      } catch (e) {
        setIsError(true)
        console.log(`Error: ${e}`)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [offset, categoryName, search])

    const loadMoreHandler = (e) => {
    e.preventDefault()
    setOffset(offset + limit)
  }

  return (
    <>
      {isLoading && <Preloader className={s.preloader} />}
      <section className={s.posts}>
        {isError && <div>Something went wrong ...</div>}
        {postsData && postsData.map((post, index) => <PostCard post={post} key={index} />)}
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

