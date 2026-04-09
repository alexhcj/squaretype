import React from 'react'
import cn from 'classnames'
import s from './Title.module.sass'

// themes: 'light' | 'dark' | 'grey'
export const Title = ({title = 'Default', theme = 'light', className}) => {
    return (
        <div className={cn(s.box, className)}>
            <h5 className={cn(s.follow, s[`theme_${theme}`])}>{title}</h5>
        </div>
    )
}
