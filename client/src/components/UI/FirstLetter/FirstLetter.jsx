import React from 'react'
import cn from "classnames";
import s from './FirstLetter.module.sass'

export const FirstLetter = ({letter, theme}) => {
    return <span className={cn(s.letter, s[`theme_${theme}`])}>{letter}</span>
}
