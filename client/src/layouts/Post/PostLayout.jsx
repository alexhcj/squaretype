import React from 'react'
import cn from 'classnames'
import { useThemeContext } from '../../context/ThemeContext'
import { usePostContext } from '../../context/PostContext'
import { RelatedPosts } from '../../components/RelatedPosts/RelatedPosts'
import { Navbar } from '../../components/common/Navbar/Navbar'
import { Scroll } from '../../components/Scroll/Scroll'
import { Footer } from '../../components/common/Footer/Footer'
import { PostSwitcher } from '../../components/PostSwitcher/PostSwitcher'
import s from './PostLayout.module.sass'

export const PostLayout = (Hero, Main, Aside) => {
  const Layout = () => {
    const { post } = usePostContext()
    const { theme } = useThemeContext()

    return (
      <div className={cn(s.page, s[`theme_${theme}`])}>
        <div>
          <Hero />
          <div className={s.container}>
            <div className={s.main}>
              <div className={s.content}>
                <Main />
                {Object.keys(post).length !== 0 && <PostSwitcher slug={post.slug} />}
                {Object.keys(post).length !== 0 && <RelatedPosts category={post.category.category} grid="two-column" />}
              </div>
              <aside className={s.aside}>
                <Aside />
              </aside>
            </div>
          </div>
        </div>
        <div className={s.container}>
          <Footer />
        </div>
      </div>
    )
  }
  return Layout
}
