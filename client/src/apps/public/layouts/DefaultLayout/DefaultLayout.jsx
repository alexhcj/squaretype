import React from 'react'
import {Outlet} from "react-router-dom";

import {useSidebarModalContext} from "../../../../context/SidebarModalContext";
import {Navbar} from "../../components/Navbar/Navbar";
import {Modal} from "../../../../shared/components/Modal/Modal";
import { Sidebar } from '../../components/Sidebar/Sidebar'
import {Scroll} from "../../../../shared/components/Scroll/Scroll";

export const DefaultLayout = () => {
  const { isOpen, setIsOpen } = useSidebarModalContext()

  return (
    <div className="app-wrapper">
      <Navbar border={true} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Sidebar />
      </Modal>

      <Outlet />

      <Scroll />
    </div>
  )
}
