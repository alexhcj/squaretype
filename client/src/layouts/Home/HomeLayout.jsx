import React from 'react'
import cn from 'classnames'
import { Navbar } from '../../components/common/Navbar/Navbar'
import { useSidebarModalContext } from '../../context/SidebarModalContext'
import { useThemeContext } from '../../context/ThemeContext'
import s from './HomeLayout.module.sass'

export const HomeLayout = (Hero, Main, Aside) => {
  const Layout = () => {
    const { isOpen } = useSidebarModalContext()
    const { theme } = useThemeContext()

    return (
      <>
        <div className={cn(s.page, { [s.transformed]: isOpen }, theme === 'light' ? s.light : s.dark)}>
          <header className={s.header}>
            <Hero />
          </header>
          <div className={s.container}>
            <main className={s.main}>
              <div className={s.content}>
                <Main />
              </div>
              <aside className={s.aside}>
                <Aside />
              </aside>
            </main>
          </div>
          <div className={s.container}>
            <footer className={s.footer}>Footer</footer>
          </div>
        </div>
      </>
    )
  }

  return Layout
}
