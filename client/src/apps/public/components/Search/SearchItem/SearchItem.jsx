import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import {useThemeContext} from "../../../../../context/ThemeContext";
import {getSizedImg} from "../../../../../shared/utils/img";
import {transformPostDate} from "../../../../../shared/utils/date";
import s from './SearchItem.module.sass'

export const SearchItem = ({ title, slug, img, date, onClick }) => {
  const { theme } = useThemeContext()

  return (
    <article className={cn(s.article, s[`theme_${theme}`])}>
      <NavLink className={s.item} to={`/${slug}`} onClick={onClick}>
        <img className={s.img} src={getSizedImg(img, '80x80')} alt={title} />

        <div className={s.info}>
          <h3 className={s.title}>{title}</h3>
          <span className={s.date}>{transformPostDate(date)}</span>

        </div>

        <span className={s.type}>Post</span>
      </NavLink>
    </article>
  )
}

