import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import {useSidebarModalContext} from "../../../../context/SidebarModalContext";
import {useThemeContext} from "../../../../context/ThemeContext";
import {useLocalStorage} from "../../../../hooks/useLocalStorage.hook";
import {useScrollDirection} from "../../../../hooks/useScrollDirection.hook";
import {Search} from "../Search/Search";
import {contactsAPI} from "../../../../shared/api/contacts";
import {divideNumber} from "../../../../shared/utils/number";
import {Button} from "../../../../shared/components/UI/Button/Button";
import {CategoryDropdown} from "../../../../shared/components/UI/CategoryDropdown/CategoryDropdown";
import {ThemeSwitcher} from "../../../../shared/components/ThemeSwitcher/ThemeSwitcher";

import { ReactComponent as MailSVG } from '../../../../assets/svg/mail.svg';
import { ReactComponent as Burger } from '../../../../assets/svg/burger.svg';
import { ReactComponent as FacebookSVG } from '../../../../assets/svg/socials/facebook.svg';
import { ReactComponent as TwitterSVG } from '../../../../assets/svg/socials/twitter.svg';
import { ReactComponent as VkSVG } from '../../../../assets/svg/socials/vk.svg';
import { ReactComponent as TelegramSVG } from '../../../../assets/svg/socials/telegram.svg';
import { ReactComponent as MagnifierSVG } from '../../../../assets/svg/magnifier.svg';
import { ReactComponent as ProfileSVG } from '../../../../assets/svg/profile.svg';
import { ReactComponent as ChevronSVG } from '../../../../assets/svg/chevron.svg';
import s from './Navbar.module.sass';

const icons = [
  { contact: 'facebook', icon: <FacebookSVG /> },
  { contact: 'twitter', icon: <TwitterSVG /> },
  { contact: 'vk', icon: <VkSVG /> },
  { contact: 'telegram', icon: <TelegramSVG /> }
]

export const Navbar = ({ border }) => {
  const { isOpen, setIsOpen } = useSidebarModalContext()
  const { theme } = useThemeContext()
  const [contacts, setContacts] = useLocalStorage('contacts', [])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const direction = useScrollDirection()

  const stickyMenu = () => {
    document.scrollingElement.scrollTop >= 100 ? setSticky(true) : setSticky(false)
  }

  const showMenu = () => {
    return direction === 'up' && document.scrollingElement.scrollTop >= 100
  }

  const stickyHide = () => {
    return direction === 'down' && document.scrollingElement.scrollTop >= 100
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await contactsAPI.getContacts()
      setContacts(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', stickyMenu)
    return () => window.removeEventListener('scroll', stickyMenu)
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <nav className={cn(s.nav, { [s.bottom_sticky]: sticky }, theme === 'light' ? s.light : s.dark)}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.contacts}>
            {contacts.map(({ contact, subsTotal }) => {
              if (icons.find((item) => item.contact === contact)) {
                return (
                  <Link to="/" key={contact} className={cn(s.socialLink, s[contact])}>
                    <div className={s.icon}>{icons.find((item) => item.contact === contact).icon}</div>
                    <div className={s.subs}>{divideNumber(subsTotal)}</div>
                  </Link>
                )
              }
            })}
          </div>
          <div className={s.logo}>
            <Link to="/" className={s.link}>
              Squaretype
            </Link>
          </div>
          <Button className={s.btn_sub} size="sm" icon={<MailSVG className={s.mail_icon} />}>
            Subscribe
          </Button>
        </div>
      </div>
      <div
        className={cn(s.bottom, border && s.border, {
          [s.sticky]: sticky,
          [s.sticky_show]: showMenu(),
          [s.sticky_hide]: stickyHide()
        })}
      >
        <div className={s.container}>
          <div className={s.box}>
            <div className={s.left}>
              <Burger onClick={() => setIsOpen(!isOpen)} className={s.burgerBtn} />
              <div className={cn(s.logo, s.small, { [s.visible]: sticky })}>
                <Link to="/" className={s.link}>
                  Squaretype
                </Link>
              </div>
            </div>
            <div className={s.links}>
              <CategoryDropdown className={s.link} icon={<ChevronSVG className={s.chevron_icon} />}>
                Categories
              </CategoryDropdown>
            </div>
            <div className={s.meta}>
              <button className={s.btn_meta} type="button">
                <ProfileSVG className={s.icon} />
              </button>
              <span className={s.divider}></span>
              <button className={s.btn_meta} type="button" onClick={toggleSearch}>
                <MagnifierSVG className={s.icon} />
              </button>
              <ThemeSwitcher/>
            </div>
          </div>
        </div>
        <Search isOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} theme={theme} />
      </div>
    </nav>
  )
}
