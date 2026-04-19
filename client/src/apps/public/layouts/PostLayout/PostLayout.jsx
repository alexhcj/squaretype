import React from 'react'
import cn from 'classnames'

import {usePostContext} from "../../../../context/PostContext";
import {useThemeContext} from "../../../../context/ThemeContext";
import { RelatedPosts } from '../../components/RelatedPosts/RelatedPosts'
import { PostSwitcher } from '../../components/PostSwitcher/PostSwitcher'
import s from './PostLayout.module.sass'

export const PostLayout = ({hero, main, aside}) => {
  const { post } = usePostContext()
  const { theme } = useThemeContext()

  return (
    <div className={cn(s.page, s[`theme_${theme}`])}>
      <div>
        {hero}
        <div className={s.container}>
          <div className={s.main}>
            <div className={s.content}>
              {main}
              {post && Object.keys(post).length > 0 && <PostSwitcher slug={post.slug} />}
              {post && Object.keys(post).length > 0 && <RelatedPosts category={post.category.category} grid="two-column" />}
            </div>
            <aside className={s.aside}>{aside}</aside>
          </div>
        </div>
      </div>
    </div>
  )
}
