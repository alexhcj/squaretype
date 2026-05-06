import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cn from 'classnames'

import { useThemeContext } from '../../../../context/ThemeContext'
import { useContactsContext } from '../../../../context/ContactsContext'
import { divideNumber } from "../../../../shared/utils/number";
import { ReactComponent as FacebookSVG } from '../../../../assets/svg/socials/facebook.svg';
import { ReactComponent as TwitterSVG } from '../../../../assets/svg/socials/twitter.svg';
import { ReactComponent as VkSVG } from '../../../../assets/svg/socials/vk.svg';
import { ReactComponent as TelegramSVG } from '../../../../assets/svg/socials/telegram.svg';

import s from './Footer.module.sass'

const icons = [
  { contact: 'facebook', icon: <FacebookSVG /> },
  { contact: 'twitter', icon: <TwitterSVG /> },
  { contact: 'vk', icon: <VkSVG /> },
  { contact: 'telegram', icon: <TelegramSVG /> }
]


const footerLinks = [
  {
    title: 'Categories',
    url: '/categories'
  },
  {
    title: 'Profile',
    url: '/profile'
  },
  {
    title: 'Subscribe',
    url: '/subscribe'
  }
]

export const Footer = () => {
    const { theme } = useThemeContext()
    const { contacts } = useContactsContext()

  return <footer className={cn(s.footer, s[`theme_${theme}`])}>
    <div className={s.container}>
        <div className={s.top}>
            123
        </div>
        <div className={s.bottom}>
            <div>
                <Link className={s.logo} to="/">Squaretype</Link>
                <p className={s.text}>Fresh insights, trend analysis, and helpful guides. Squaretype: growing together. Stay connected and discover new things in every article on our blog.</p>
            </div>
            <div>
                <nav className={s.footer_nav}>
                    {footerLinks.map((link) => (
                        <NavLink key={link.title} to={link.url} className={s.footer_link}>
                        {link.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className={s.socials}>
                {contacts.map(({ contact, subsTotal }) => {
                    const iconData = icons.find((item) => item.contact === contact);
                    if (iconData) {
                        return (
                            <Link to="/" key={contact} className={cn(s.socialLink, s[contact])}>
                                <div className={s.icon}>{iconData.icon}</div>
                                <div className={s.subs}>{divideNumber(subsTotal)}</div>
                            </Link>
                        );
                    }  
                    return null;
                })}
            </div>
        </div>
    </div>
  </footer>
}
