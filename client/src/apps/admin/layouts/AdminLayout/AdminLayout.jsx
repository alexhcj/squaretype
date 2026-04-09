import React from 'react'
import {Outlet} from "react-router-dom"
import cn from 'classnames'

import {useThemeContext} from "../../../../context/ThemeContext";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import s from './AdminLayout.module.sass'

export const AdminLayout = () => {
  const { theme } = useThemeContext()

  return (
    <div className={cn(s.layout, s[`theme_${theme}`])}>
      <Sidebar />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}
