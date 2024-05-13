import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import cn from 'classnames'
import {useThemeContext} from '../../context/ThemeContext'
import {categoriesAPI} from '../../api/categories'
import {usePostContext} from '../../context/PostContext'
import {Subcategories} from '../UI/Subcategories/Subcategories'
import s from './PostsCategory.module.sass'

export const PostsCategory = () => {
    const {theme} = useThemeContext()
    const {total} = usePostContext()
    const location = useLocation()
    const category = location.pathname.slice(7)
    const [categoryEntity, setCategoryEntity] = useState({})
    const subcategories = false

    useEffect(() => {
        const fetchData = async () => {
            const data = await categoriesAPI.getCategory(category)
            setCategoryEntity(data)
        }

        fetchData()
    }, [category])

    return (
        <section
            className={cn(s.section, s[`theme_${theme}`])}
            style={theme === 'light' ? {backgroundColor: `${categoryEntity.color}`} : {}}
        >
            <div className={s.container}>
                <div className={s.subtitle}>Browsing category</div>
                <h1 className={s.category}>{category}</h1>
                <div className={s.total}>{total} posts</div>
                <p className={s.description}>{categoryEntity.description}</p>
                {subcategories && <Subcategories/>}
            </div>
        </section>
    )
}
