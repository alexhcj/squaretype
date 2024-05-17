import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import cn from 'classnames'
import {contactsAPI} from '../../../api/contacts'
import {useSidebarModalContext} from '../../../context/SidebarModalContext'
import {useThemeContext} from '../../../context/ThemeContext'
import {useLocalStorage} from '../../../hooks/useLocalStorage.hook'
import {Search} from '../../Search/Search'
import {Button} from '../../UI/Button/Button'
import {CategoryDropdown} from '../../UI/CategoryDropdown/CategoryDropdown'
import {divideNumber} from '../../../utils/number'
import {ReactComponent as MailSVG} from '../../../assets/svg/mail.svg'
import {ReactComponent as Burger} from '../../../assets/svg/burger.svg'
import {ReactComponent as FacebookSVG} from '../../../assets/svg/socials/facebook.svg'
import {ReactComponent as TwitterSVG} from '../../../assets/svg/socials/twitter.svg'
import {ReactComponent as VkSVG} from '../../../assets/svg/socials/vk.svg'
import {ReactComponent as TelegramSVG} from '../../../assets/svg/socials/telegram.svg'
import {ReactComponent as MagnifierSVG} from '../../../assets/svg/magnifier.svg'
import {ReactComponent as MoonSVG} from '../../../assets/svg/moon.svg'
import {ReactComponent as SunSVG} from '../../../assets/svg/sun.svg'
import {ReactComponent as ProfileSVG} from '../../../assets/svg/profile.svg'
import {ReactComponent as ChevronSVG} from '../../../assets/svg/chevron.svg'
import s from './Navbar.module.sass'

const icons = [
    {contact: 'facebook', icon: <FacebookSVG/>},
    {contact: 'twitter', icon: <TwitterSVG/>},
    {contact: 'vk', icon: <VkSVG/>},
    {contact: 'telegram', icon: <TelegramSVG/>}
]

export const Navbar = ({border}) => {
    const {isOpen, setIsOpen} = useSidebarModalContext()
    const {theme, setTheme} = useThemeContext()
    const [contacts, setContacts] = useLocalStorage('contacts', [])
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await contactsAPI.getContacts()
            setContacts(data)
        }
        fetchData()
    }, [])

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <nav className={cn(s.nav, theme === 'light' ? s.light : s.dark)}>
            <div className={s.container}>
                <div className={s.top}>
                    <div className={s.contacts}>
                        {contacts.map(({contact, subsTotal}) => {
                            if (icons.find((item) => item.contact === contact)) {
                                return (
                                    <Link to="/" key={contact} className={cn(s.socialLink, s[contact])}>
                                        <div className={cn(s.icon, theme === 'light' ? s.light : s.dark)}>
                                            {icons.find((item) => item.contact === contact).icon}
                                        </div>
                                        <div
                                            className={cn(s.subs, theme === 'light' ? s.light : s.dark)}>{divideNumber(subsTotal)}</div>
                                    </Link>
                                )
                            }
                        })}
                    </div>
                    <div className={s.logo}>
                        <Link to="/" className={cn(s.link, theme === 'light' ? s.light : s.dark)}>
                            Squaretype
                        </Link>
                    </div>
                    <Button className={s.btn_sub} size="sm" icon={<MailSVG className={s.mail_icon}/>}>
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className={cn(s.bottom, border && s.border)}>
                <div>
                    <div className={s.container}>
                        <div className={s.box}>
                            <div className={s.left}>
                                <Burger
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={s.burgerBtn}
                                />
                                <div className={cn(s.logo, s.small)}>
                                    <Link to="/"
                                          className={s.link}>
                                        Squaretype
                                    </Link>
                                </div>
                            </div>
                            <div className={s.links}>
                                <CategoryDropdown
                                    className={s.link}
                                    icon={<ChevronSVG
                                        className={s.chevron_icon}/>}
                                >
                                    Categories
                                </CategoryDropdown>
                            </div>
                            <div className={s.meta}>
                                <button className={s.btn_meta} type="button">
                                    <ProfileSVG className={s.icon}/>
                                </button>
                                <span className={s.divider}></span>
                                <button className={s.btn_meta} type="button" onClick={toggleSearch}>
                                    <MagnifierSVG className={s.icon}/>
                                </button>
                                <button className={s.btn_meta} type="button" onClick={handleTheme}>
                                    {theme === 'light' ? (
                                        <MoonSVG className={s.icon}/>
                                    ) : (
                                        <SunSVG className={s.icon}/>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Search isOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
            </div>
        </nav>
    )
}
