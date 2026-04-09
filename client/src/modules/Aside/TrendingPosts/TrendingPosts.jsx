import React, {useEffect, useState} from 'react'

import {useThemeContext} from '../../../context/ThemeContext'
import {TrendItem} from './TrendItem/TrendItem'
import {postsAPI} from "../../../shared/api/posts";
import {Title} from "../../../shared/components/UI/Title/Title";
import s from './TrendingPosts.module.sass'

export const TrendingPosts = () => {
    const {theme} = useThemeContext()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const query = new URLSearchParams({
                sort: 'date',
                limit: 3
            }).toString()

            const {posts} = await postsAPI.getPosts(query)
            setPosts(posts)
        }
        fetchData()
    }, [])

    return (
        <div className={s.block}>
            <Title title="Trending this week" theme={theme === 'light' ? 'dark' : 'light'}/>
            <div className={s.items}>
                {posts.map((post, index) => (
                    <TrendItem key={index} {...post} theme={theme}/>
                ))}
            </div>
        </div>
    )
}
