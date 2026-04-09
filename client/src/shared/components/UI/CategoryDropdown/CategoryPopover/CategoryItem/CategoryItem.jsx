import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import {useThemeContext} from "../../../../../../context/ThemeContext";
import s from './CategoryItem.module.sass'

export const CategoryItem = ({ category, showedCategory, onMouseEnter }) => {
  const { theme } = useThemeContext()

  return (
    <NavLink
      onMouseEnter={onMouseEnter}
      className={cn(s.category, { [s.active]: showedCategory === category }, theme === 'light' ? s.light : s.dark)}
      to={`/posts/${category}`}
      state={{ category: category.category }}
    >
      {category}
    </NavLink>
  )
}
