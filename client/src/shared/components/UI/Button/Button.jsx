import React from 'react'
import cn from 'classnames'

import {useThemeContext} from "../../../../context/ThemeContext";
import {Preloader} from "../Preloader/Preloader";
import s from './Button.module.sass'

// sizes: 'xs' | 'sm' | 'md' | 'xl' | 'xxl'
// types: 'loader'
export const Button = ({
  onClick,
  children,
  htmlType = 'button',
  size,
  type,
  icon,
  loadMoreHandler,
  isLoading,
  className
}) => {
  const { theme } = useThemeContext()

  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={cn(s.btn, size && s[`size_${size}`], theme === 'light' ? s.light : s.dark, className)}
    >
      {type === 'loader' && isLoading ? <Preloader size="small" /> : children}
      {icon && icon}
    </button>
  )
}

// LATER: preloader img width 71!!!
