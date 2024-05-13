import React from 'react'
import { NavLink } from 'react-router-dom'
import { getSizedImg } from '../../../../utils/img'
import { Category } from '../../../UI/Category/Category'
import s from './HeroListItem.module.sass'

export const HeroListItem = ({ slug, category, title, img }) => {
  if (img) {
    img = getSizedImg(img, '80x80', 'jpg')
  }

  return (
    <div className={s.item}>
      <div className={s.header}>
        <Category size="small" category={category} className={s.category} />
        <NavLink to={`/${slug}`} state={{ category: category.category }} className={s.title_link}>
          <h5 className={s.title}>{title}</h5>
        </NavLink>
      </div>
      <NavLink to={`/${slug}`} state={{ category: category.category }} className={s.img_link}>
        <img src={img} alt={title} />
      </NavLink>
    </div>
  )
}
