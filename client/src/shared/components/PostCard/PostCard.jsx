import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { useThemeContext } from '../../../context/ThemeContext'
import {Category} from "../UI/Category/Category";
import {ImageWithOverlay} from "../UI/ImageWithOverlay/ImageWithOverlay";
import {PostMeta} from "../UI/PostMeta/PostMeta";
import s from './PostCard.module.sass'

export const PostCard = ({ post }) => {
  const { theme } = useThemeContext()
  let { slug, author, category, title, date, views, shares, previewText, img, read, readingTime } = post

  const url = `${process.env.REACT_APP_BASE_URL}/${slug}`

  return (
    <article className={cn(s.article, s[`theme_${theme}`])}>
      <div className={s.category}>
        <Category size="small" themeColor="grey" category={category} />
      </div>
      <Link to={url} state={{ category: category.category }} className={s.img}>
        <ImageWithOverlay img={img} alt={title} size='400x220' read={read} readingTime={readingTime} />
      </Link>
      <h2 className={s.titleBox}>
        <Link to={url} state={{ category: category.category }} className={s.title}>
          {title}
        </Link>
      </h2>
      <div className={s.metaBox}>
        <PostMeta 
          author={author} 
          date={date} 
          views={views} 
          shares={shares} 
          color="grey" 
          theme={theme} 
        />
      </div>
      <div className={s.previewText}>{previewText}</div>
    </article>
  )
}

