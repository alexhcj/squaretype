import React, {useEffect, useState} from 'react'
import {useNavigate, NavLink} from 'react-router-dom'

import {useThemeContext} from "../../../../context/ThemeContext";
import {HeroList} from './HeroList/HeroList'
import {postsAPI} from "../../../../shared/api/posts";
import {Preloader} from "../../../../shared/components/UI/Preloader/Preloader";
import {getSizedImg} from "../../../../shared/utils/img";
import {Category} from "../../../../shared/components/UI/Category/Category";
import {PostMeta} from "../../../../shared/components/UI/PostMeta/PostMeta";
import {Button} from "../../../../shared/components/UI/Button/Button";
import s from './HomeHero.module.sass'

export const HomeHero = () => {
    const {theme} = useThemeContext()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            const query = new URLSearchParams({
                sort: 'reviews',
                limit: 1
            }).toString()

            try {
                const {posts} = await postsAPI.getPosts(query)
                setPost(posts[0])
            } catch (e) {
                setIsError(true)
                console.log(`Error while fetching: ${e}`)
            }
            setIsLoading(false)
        }

        fetchData()
    }, [])

let {slug, category, title, author, img, date, views, shares, previewText, readingTime} = post

    const handleClick = () => {
        navigate(`/${slug}`, {state: {category: category.category}})
    }

    return (
        <div className={s.component} id="nav">
            <div className={s.container}>
                <div className={s.content}>
                    {isLoading && <Preloader/>}
                    {isError && <div>Something went wrong ...</div>}
                    {!post && <div>Something went wrong ...</div>}
                    {post && Object.keys(post).length > 0 && (
                        <article className={s.article}>
                            <div className={s.bg}>
                                <img src={getSizedImg(img, '1840x1380', 'jpg')} alt={title} className={s.img}/>
                            </div>
                            <div className={s.category}>
                                <Category size="large" category={category}/>
                            </div>
                            <h2 className={s.title}>
                                <NavLink className={s.title_link} to={`/${slug}`} state={{category: category.category}}>
                                    {title}
                                </NavLink>
                            </h2>
                            <div className={s.meta}>
                                <PostMeta
                                    author={author}
                                    date={date}
                                    views={views}
                                    shares={shares}
                                    readingTime={readingTime} 
                                    type="hero"
                                    color="white"
                                    theme={theme}
                                />
                            </div>
                            <div className={s.previewText}>{previewText}</div>
                            <div>
                                <Button size="xl" onClick={handleClick}>
                                    Read more
                                </Button>
                            </div>
                        </article>
                    )}
                    <HeroList/>
                </div>
            </div>
        </div>
    )
}
