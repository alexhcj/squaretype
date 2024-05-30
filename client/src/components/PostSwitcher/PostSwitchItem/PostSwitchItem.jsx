import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { useThemeContext } from '../../../context/ThemeContext'
import { ReactComponent as ChevronSVG } from '../../../assets/svg/chevron.svg'
import s from './PostSwitchItem.module.sass'

export const PostSwitchItem = ({ isPost, type, title, slug }) => {
  const { theme } = useThemeContext()

  if (!isPost && type === 'prev') {
    return <div>prev</div>
  }

  if (!isPost && type === 'next') {
    return <div>next</div>
  }

  return (
    <NavLink to={`/${slug}`} className={cn(s.link, s[`theme_${theme}`], s[`type_${type}`])}>
      <div className={s.typeBox}>
        <div className={s.icon}>
          <ChevronSVG className={s.svg} />
        </div>
        <span className={s.dash}>—</span>
        <h1 className={s.type}>{`${type === 'prev' ? 'Previous' : 'Next'} Article`}</h1>
      </div>
      <h3 className={s.title}>{title}</h3>
    </NavLink>
  )
}
