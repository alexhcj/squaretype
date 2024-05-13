import { createContext, useContext, useState } from 'react'

const SidebarModalContext = createContext({})
export const useSidebarModalContext = () => useContext(SidebarModalContext)

export const SidebarModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return <SidebarModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarModalContext.Provider>
}
