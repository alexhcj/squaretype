import React from 'react'
import cn from 'classnames'

import {useThemeContext} from "../../../../context/ThemeContext";
import s from './PostsLayout.module.sass'

export const PostsLayout = ({hero, main, aside}) => {
  const { theme } = useThemeContext()

  return (
    <div className={cn(s.page, s[`theme_${theme}`])}>
      <div>
        {hero}
        <div className={s.container}>
          <div className={s.main}>
            <div className={s.content}>{main}</div>
            <aside className={s.aside}>{aside}</aside>
          </div>
        </div>
      </div>
    </div>
  )
}
