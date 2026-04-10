import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import {useThemeContext} from "../../../../../context/ThemeContext";
import {usePostContext} from "../../../../../context/PostContext";
import {postsAPI} from "../../../../../shared/api/posts";
import {getSizedImg} from "../../../../../shared/utils/img";
import {Breadcrumbs} from "../../../../../shared/components/UI/Breadcrumbs/Breadcrumbs";
import {Category} from "../../../../../shared/components/UI/Category/Category";
import {PostMeta} from "../../../../../shared/components/UI/PostMeta/PostMeta";
import s from './PostHero.module.sass'

export const PostHero = () => {
    const {theme} = useThemeContext()
    const {post, setPost} = usePostContext()
    const slug = useParams().slug
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            try {
                const data = await postsAPI.getPostBySlug(slug)
                setPost(data)
            } catch (e) {
                setIsError(true)
                console.log(`Error while fetching data: ${e}`)
                throw e
            }
            setIsLoading(false)
        }

        fetchData()
    }, [slug])

    let {img, title, category, author, date, views, shares, readingTime} = post

    return (
        <div className={s.block}>
            <div className={s.imgBox}>
                <img src={getSizedImg(img, '1840x1380', 'jpg')} alt={title} className={s.img}/>
            </div>
            <div className={s.box}>
                <div className={s.container}>
                    <div className={s.content}>
                        {post && Object.keys(post).length > 0 && (
                            <>
                                <Breadcrumbs category={category.category} slug={slug}/>
                                <Category size="large" category={category}/>
                                <h1 className={s.title}>{title}</h1>
                                <PostMeta 
                                    author={author} 
                                    date={date} 
                                    views={views} 
                                    shares={shares} 
                                    readingTime={readingTime} 
                                    showReadingTime={true} 
                                    color="white"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
