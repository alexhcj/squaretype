import React from 'react'
import cn from 'classnames'

import {useThemeContext} from "../../../../context/ThemeContext";
import {Login} from "../../components/Login/Login";
import {Header} from "../../components/Header/Header";
import s from './LoginLayout.module.sass'

export const LoginLayout = () => {
  const { theme } = useThemeContext()

  return (
    <div className={cn(s.page, s[`theme_${theme}`])}>
      <Header/>
      <Login />
    </div>
  )
}
