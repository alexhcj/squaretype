import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import cn from "classnames";

import {useThemeContext} from "../../../../../context/ThemeContext";
import {usePostContext} from "../../../../../context/PostContext";
import {FirstLetter} from "../../../../../shared/components/UI/FirstLetter/FirstLetter";
import s from './PostText.module.sass'

export const PostText = () => {
    const {theme} = useThemeContext()
    const {post} = usePostContext()
    const pathname = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
      post && Object.keys(post).length > 0 && (
            <>
                <p className={cn(s.text, s[`theme_${theme}`])}>
                    <FirstLetter letter={post.text[0]} theme={theme}/>
                    {post.text.slice(1)}
                </p>
            </>
        )
    )
}
