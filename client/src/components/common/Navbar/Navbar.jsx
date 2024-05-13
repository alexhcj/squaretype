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

export const Navbar = () => {
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
        <nav className={s.nav}>
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
            <div className={s.bottom}>
                <div>
                    <div className={s.container}>
                        <div className={s.box}>
                            <Burger
                                onClick={() => setIsOpen(!isOpen)}
                                className={cn(s.burgerBtn, theme === 'light' ? s.light : s.dark)}
                            />
                            <div className={s.links}>
                                <CategoryDropdown
                                    className={cn(s.link, theme === 'light' ? s.light : s.dark)}
                                    icon={<ChevronSVG
                                        className={cn(s.chevron_icon, theme === 'light' ? s.light : s.dark)}/>}
                                >
                                    Categories
                                </CategoryDropdown>
                            </div>
                            <div className={s.meta}>
                                <button className={s.btn_meta} type="button">
                                    <ProfileSVG className={cn(s.icon, theme === 'light' ? s.light : s.dark)}/>
                                </button>
                                <span className={s.divider}></span>
                                <button className={s.btn_meta} type="button" onClick={toggleSearch}>
                                    <MagnifierSVG className={cn(s.icon, theme === 'light' ? s.light : s.dark)}/>
                                </button>
                                <button className={s.btn_meta} type="button" onClick={handleTheme}>
                                    {theme === 'light' ? (
                                        <MoonSVG className={cn(s.icon, theme === 'light' ? s.light : s.dark)}/>
                                    ) : (
                                        <SunSVG className={cn(s.icon, theme === 'light' ? s.light : s.dark)}/>
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
