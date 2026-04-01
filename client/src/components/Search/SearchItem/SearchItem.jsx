import React from 'react'
import { NavLink } from 'react-router-dom'
import { getSizedImg } from '../../../utils/img'
import { transformPostDate } from '../../../utils/date'
import s from './SearchItem.module.sass'

export const SearchItem = ({ title, slug, img, date, onClick }) => {
  return (
    <NavLink className={s.item} to={`/${slug}`} onClick={onClick}>
      <img className={s.img} src={getSizedImg(img, '80x80')} alt={title} />
      <h3 className={s.title}>{title}</h3>
      <span className={s.date}>{transformPostDate(date)}</span>
      <span className={s.type}>Post</span>
    </NavLink>
  )
}
