import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { SidebarSubscribe } from '../SidebarSubscribe/SidebarSubscribe'
import {useSidebarModalContext} from "../../../../context/SidebarModalContext";
import {useThemeContext} from "../../../../context/ThemeContext";
import {Follow} from "../../../../shared/components/Follow/Follow";
import { ReactComponent as XMarkSVG } from '../../../../assets/svg/xmark.svg'
import s from './Sidebar.module.sass'

export const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebarModalContext()
  const { theme } = useThemeContext()

  return (
    <aside className={cn(s.aside, { [s.open]: isOpen }, s[theme])}>
      <header className={s.header}>
        <NavLink className={s.title} to={'/'}>
          Squaretype
        </NavLink>
        <button className={s.btn} onClick={() => setIsOpen(false)} type="button">
          <XMarkSVG className={s.close_svg} />
        </button>
      </header>
      <div className={s.content}>
        <Follow type="row" />
        <SidebarSubscribe />
      </div>
    </aside>
  )
}
