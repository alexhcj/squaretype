import React from 'react'
import cn from 'classnames'
import { useThemeContext } from '../../../context/ThemeContext'
import s from './AdminLayout.module.sass'

export const AdminLayout = (Main, Aside) => {
  const { theme } = useThemeContext()

  const Layout = () => {
    return (
      <div className={cn(s.page, s[`theme_${theme}`])}>
        <main className={s.main}>
          <Main />
        </main>
        <aside className={s.aside}>
          <Aside />
        </aside>
        <h1>AdminLayout</h1>
      </div>
    )
  }

  return Layout
}
