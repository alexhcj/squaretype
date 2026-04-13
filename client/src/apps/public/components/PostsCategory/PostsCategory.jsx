import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import cn from 'classnames'

import {categoriesAPI} from "../../../../shared/api/categories";
import {useThemeContext} from "../../../../context/ThemeContext";
import {usePostContext} from "../../../../context/PostContext";
import s from './PostsCategory.module.sass'

export const PostsCategory = ({ categoryName }) => {
    const { theme } = useThemeContext()
    const { total } = usePostContext()
    const [categoryEntity, setCategoryEntity] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            if (!categoryName) return
            try {
                const data = await categoriesAPI.getCategory(categoryName)
                setCategoryEntity(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [categoryName])

    return (
        <section
            className={cn(s.section, s[`theme_${theme}`])}
            style={theme === 'light' ? {backgroundColor: `${categoryEntity.color}`} : {}}
        >
            <div className={s.container}>
                <div className={s.subtitle}>Browsing category</div>
                <h1 className={s.category}>{categoryName}</h1> 
                <div className={s.total}>{total} posts</div> 
                <p className={s.description}>{categoryEntity.description}</p>
            </div>
        </section>
    )
}
