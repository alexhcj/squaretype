import React from 'react'
import { Outlet } from "react-router-dom"
import cn from 'classnames'

import { useSidebarModalContext } from "../../../../context/SidebarModalContext"
import { useThemeContext } from "../../../../context/ThemeContext"
import { Navbar } from "../../components/Navbar/Navbar"
import { Modal } from "../../../../shared/components/Modal/Modal"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Scroll } from "../../../../shared/components/Scroll/Scroll"
import s from './DefaultLayout.module.sass'
import { Footer } from '../../components/Footer/Footer'

export const DefaultLayout = () => {
  const { isOpen, setIsOpen } = useSidebarModalContext()
  const { theme } = useThemeContext()

  return (
    <div className={cn("app-wrapper", theme === 'light' ? s.light : s.dark)}>
      <Navbar border={true} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Sidebar />
      </Modal>

      <Outlet />

      <Footer />

      <Scroll />
    </div>
  )
}
