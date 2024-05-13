import React, {useState, useEffect} from 'react'
import cn from 'classnames'
import {postsAPI} from '../../../api/posts'
import {useThemeContext} from '../../../context/ThemeContext'
import {Preloader} from '../../Preloader/Preloader'
import {HeroListItem} from './HeroListItem/HeroListItem'
import s from './HeroList.module.sass'

export const HeroList = () => {
    const {theme} = useThemeContext()
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            const query = new URLSearchParams({
                limit: 5,
                sort: 'date'
            }).toString()

            try {
                const {posts} = await postsAPI.getPosts(query)
                setPosts(posts)
            } catch (e) {
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData()
    }, [])

    return (
        <div className={cn(s.items, theme === 'light' ? s.light : s.dark)}>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <Preloader/>
            ) : (
                posts &&
                posts.map((item, index) => {
                    return <HeroListItem {...item} key={index}/>
                })
            )}
        </div>
    )
}
