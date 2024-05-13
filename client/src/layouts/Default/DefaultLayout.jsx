import React from 'react'
import { useSidebarModalContext } from '../../context/SidebarModalContext'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Modal } from '../../components/shared/Modal/Modal'
import { Scroll } from '../../components/Scroll/Scroll'

export const DefaultLayout = ({ children }) => {
  const { isOpen, setIsOpen } = useSidebarModalContext()

  return (
    <>
      {children}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Sidebar />
      </Modal>
      <Scroll />
    </>
  )
}
