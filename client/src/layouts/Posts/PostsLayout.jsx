import React from 'react'
import cn from 'classnames'
import {useThemeContext} from '../../context/ThemeContext'
import {Navbar} from '../../components/common/Navbar/Navbar'
import {Scroll} from '../../components/Scroll/Scroll'
import {Footer} from '../../components/common/Footer/Footer'
import s from './PostsLayout.module.sass'

export const PostsLayout = (Hero, Main, Aside) => {
    const Layout = () => {
        const {theme} = useThemeContext()

        return (
            <div className={cn(s.page, s[`theme_${theme}`])}>
                <header className={s.header}>
                    <div className={s.container}>
                        <Navbar/>
                    </div>
                </header>
                <div>
                    <Hero/>
                    <div className={s.container}>
                        <div className={s.main}>
                            <div className={s.content}>
                                <Main/>
                            </div>
                            <aside className={s.aside}>
                                <Aside/>
                            </aside>
                        </div>
                    </div>
                </div>
                <div className={s.container}>
                    <Footer/>
                </div>
                <Scroll/>
            </div>
        )
    }
    return Layout
}
