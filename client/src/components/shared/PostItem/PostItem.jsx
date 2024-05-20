import React from 'react'
import {Link} from 'react-router-dom'
import cn from 'classnames'
import {useThemeContext} from '../../../context/ThemeContext'
import {Category} from '../../UI/Category/Category'
import {PostMeta} from '../../UI/PostMeta/PostMeta'
import {ImageWithOverlay} from '../../UI/ImageWithOverlay/ImageWithOverlay'
import s from './PostItem.module.sass'

export const PostItem = ({post}) => {
    const {theme} = useThemeContext()
    let {slug, author, category, title, date, views, shares, previewText, img, read} = post

    const url = `${process.env.REACT_APP_BASE_URL}/${slug}`

    return (
        <article className={s.article}>
            <div className={cn(s.content, theme === 'light' ? s.light : s.dark)}>
                <div className={s.categoryBox}>
                    <Category size="small" themeColor="grey" category={category}/>
                </div>
                <Link to={url} state={{category: category.category}} className={s.img}>
                    <ImageWithOverlay img={img} alt={title} size="400x220" read={read}/>
                </Link>
                <h2 className={s.titleBox}>
                    <Link to={url} state={{category: category.category}} className={s.title}>
                        {title}
                    </Link>
                </h2>
                <div className={s.metaBox}>
                    <PostMeta author={author} date={date} views={views} shares={shares} color="grey" theme={theme}/>
                </div>
                <div className={s.previewText}>{previewText}</div>
            </div>
        </article>
    )
}
