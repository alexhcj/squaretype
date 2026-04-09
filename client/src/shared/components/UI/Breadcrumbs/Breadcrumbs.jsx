import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import { capitalizeFirstChar, slugToString } from '../../../utils/string'
import { ReactComponent as ChevronSVG } from '../../../../assets/svg/chevron.svg'
import s from './Breadcrumbs.module.sass'

export const Breadcrumbs = (props) => {
  // const location = useLocation()
  // const category = location.state.category
  // const slug = location.pathname.slice(7)
  const { category, slug } = props

  return (
    <div className={s.breadcrumbs}>
      <Link to="/" className={s.crumb}>
        Home
      </Link>
      <ChevronSVG className={s.chevron} />
      {props && (
        <>
          <Link to={`/posts/${category}`} state={{ category: category.category }} className={s.crumb}>
            {capitalizeFirstChar(category)}
          </Link>
          <ChevronSVG className={s.chevron} />
          <span className={cn(s.crumb, s.last)}>{capitalizeFirstChar(slugToString(slug))}</span>
        </>
      )}
    </div>
  )
}
