import React, {useEffect, useState} from 'react'

import {useThemeContext} from '../../../context/ThemeContext'
import {InstagramItem} from './InstagramItem/InstagramItem'
import {instagramAPI} from "../../../shared/api/instagram";
import {Title} from "../../../shared/components/UI/Title/Title";
import {Button} from "../../../shared/components/UI/Button/Button";
import s from './Instagram.module.sass'

export const Instagram = () => {
    const {theme} = useThemeContext()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const query = new URLSearchParams({
                limit: 6,
                sort: 'date'
            }).toString()

            const data = await instagramAPI.getPosts(query)
            setPosts(data)
        }
        fetchData()
    }, [])

    return (
        <div className={s.instagram}>
            <Title title="Instagram" theme={theme === 'light' ? 'dark' : 'light'}/>
            <div className={s.items}>
                {posts.map((post, index) => (
                    <InstagramItem key={index} {...post} />
                ))}
            </div>
            <Button size="xs" className={s.btn}>
                Follow
            </Button>
        </div>
    )
}
