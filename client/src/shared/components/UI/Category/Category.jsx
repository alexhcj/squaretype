import React from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'

import {useThemeContext} from "../../../../context/ThemeContext";
import {stringDashedToNormal} from '../../../utils/string'
import s from './Category.module.sass'

// themeColors: 'white' | 'grey'
// sizes: 'small' | 'large'
export const Category = ({size = 'small', themeColor = 'white', category: {category, color}, className}) => {
    const {theme} = useThemeContext()

    return (
        Object.keys(category).length !== 0 && (
            <NavLink
                to={`/posts/${category}`}
                state={{category: category}}
                className={cn(s.link, themeColor && s[`${themeColor}`], s[`theme_${theme}`], className)}
            >
                <span
                    className={cn(s.char, size && s[`${size}`])}
                    style={theme !== 'dark' ? {backgroundColor: `${color}`} : {}}
                >
                  {category[0]}
                </span>
                <span className={s.category}>
                  {category.includes('-') ? stringDashedToNormal(category) : category}
                </span>
            </NavLink>
        )
    )
}
