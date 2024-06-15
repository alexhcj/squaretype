import React from 'react'
import cn from 'classnames'
import { useThemeContext } from '../../../context/ThemeContext'
import { ThemeNav } from '../../components/ThemeNav/ThemeNav'
import s from './LoginLayout.module.sass'

export const LoginLayout = (Login) => {
  const { theme } = useThemeContext()

  const Layout = () => {
    return (
      <div className={cn(s.page, s[`theme_${theme}`])}>
        <ThemeNav />
        <Login />
      </div>
    )
  }

  return Layout
}
