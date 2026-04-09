import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import {useThemeContext} from "../../../../context/ThemeContext";
import s from './Sidebar.module.sass'

const nav = [
  {
    page: 'posts',
    url: '/admin/posts'
  },
  {
    page: 'users',
    url: '/admin/users'
  },
  {
    page: 'socials',
    url: '/admin/socials'
  },
  {
    page: 'categories',
    url: '/admin/categories'
  }
]

export const Sidebar = () => {
  const { theme } = useThemeContext()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const collapseSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <aside className={cn(s.aside, isCollapsed && s.collapsed, s[`theme_${theme}`])}>
      <div className={s.header}>
        <h3 className={s.title} onClick={collapseSidebar}>
          Squaretype
        </h3>
      </div>
      <div className={s.box}>
      <ul className={s.nav}>
        {nav.map((item, idx) => (
          <li key={idx}>
            <NavLink className={s.nav_link} to={item.url} key={item.page}>
              {item.page}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className={s.btn_logout} type="button">Log out</button>
      </div>
    </aside>
  )
}
