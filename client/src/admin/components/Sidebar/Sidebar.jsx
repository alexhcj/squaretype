import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.sass'

const nav = [
  {
    page: 'posts',
    url: 'posts'
  },
  {
    page: 'profile',
    url: 'profile'
  },
  {
    page: 'socials',
    url: 'socials'
  },
  {
    page: 'categories',
    url: 'categories'
  }
]

export const Sidebar = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false)

  const toggleSidebar = () => setIsSidebarToggled(!isSidebarToggled)

  return (
    <div className={s.sidebar}>
      <h3 className={s.logo} onClick={toggleSidebar}>
        Squaretype
      </h3>
      <ul>
        {nav.map((item) => (
          <NavLink to={item.url} key={item.page}>
            {item.page}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}
