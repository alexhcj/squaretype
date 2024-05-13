import React from 'react'
import {Link} from 'react-router-dom'
import cn from 'classnames'
import {getSizedImg} from '../../../../utils/img'
import s from './TrendItem.module.sass'

export const TrendItem = ({slug, category, title, img, theme}) => {
    const url = `${process.env.REACT_APP_BASE_URL}/${slug}`

    return (
        <div className={s.item}>
            <Link to={url} state={{category: category.category}} className={s.link}>
                <h5 className={cn(s.title, s[`theme_${theme}`])}>{title}</h5>
            </Link>
            <Link to={url} state={{category: category.category}} className={s.img_link}>
                <img src={getSizedImg(img, '80x80', 'jpg')} alt={title}/>
            </Link>
        </div>
    )
}
