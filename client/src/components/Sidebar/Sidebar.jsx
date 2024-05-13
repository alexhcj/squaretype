import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { useSidebarModalContext } from '../../context/SidebarModalContext'
import { SidebarSubscribe } from '../SidebarSubscribe/SidebarSubscribe'
import { Follow } from '../shared/Follow/Follow'
import { ReactComponent as XMarkSVG } from '../../assets/svg/xmark.svg'
import s from './Sidebar.module.sass'

export const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebarModalContext()

  return (
    <aside className={cn(s.aside, { [s.open]: isOpen })}>
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
