import React from 'react'
import { useLocation } from 'react-router-dom'
import { usePostContext } from '../../context/PostContext'
import { Title } from '../UI/Title/Title'
import s from './PostsSearch.module.sass'

export const PostsSearch = () => {
  const { total } = usePostContext()
  const { search } = useLocation()

  return (
    <div className={s.block}>
      <div className={s.container}>
        <div className={s.content}>
          <Title title="Search results" theme="dark" className={s.title} />
          <h1 className={s.search}>{search.slice(1)}</h1>
          <p className={s.total}>{total} posts</p>
        </div>
      </div>
    </div>
  )
}
