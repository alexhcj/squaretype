import React from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'
import {useThemeContext} from '../../../../../context/ThemeContext'
import {ImageWithOverlay} from '../../../ImageWithOverlay/ImageWithOverlay'
import {divideNumber} from '../../../../../utils/number'
import {ReactComponent as ViewsSVG} from '../../../../../assets/svg/rate.svg'
import s from './PostItem.module.sass'

export const PostItem = ({category, slug, title, img, views}) => {
    const {theme} = useThemeContext()

    return (
        <div>
            <NavLink className={s.img_link} to={`/${slug}`}>
                <ImageWithOverlay img={img} alt={title} size={'400x220'}/>
            </NavLink>
            <NavLink className={s.title_link} to={`/${slug}`} key={category}>
                <h3 className={cn(s.title, theme === 'light' ? s.light : s.dark)}>{title}</h3>
            </NavLink>
            <div className={s.views}>
                <ViewsSVG className={s.icon}/>
                {divideNumber(views)} views
            </div>
        </div>
    )
}
