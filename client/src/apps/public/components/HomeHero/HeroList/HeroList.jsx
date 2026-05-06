import React, {useState, useEffect} from 'react'
import cn from 'classnames'

import {useThemeContext} from "../../../../../context/ThemeContext";
import {postsAPI} from "../../../../../shared/api/posts";
import {HeroListItem} from './HeroListItem/HeroListItem'
import {Preloader} from "../../../../../shared/components/UI/Preloader/Preloader";
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

        const query = {
          limit: 5,
          sort: 'date'
        }

        try {
          const {posts} = await postsAPI.getPosts(query)
          setPosts(posts)
        } catch (e) {
          setIsError(true)
        } finally {
          setIsLoading(false)
        }
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
