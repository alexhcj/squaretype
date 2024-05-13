import React from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'
import {divideNumber} from '../../../../utils/number'
import {ReactComponent as FacebookSVG} from '../../../../assets/svg/socials/facebook.svg'
import {ReactComponent as TwitterSVG} from '../../../../assets/svg/socials/twitter.svg'
import {ReactComponent as InstagramSVG} from '../../../../assets/svg/socials/instagram.svg'
import {ReactComponent as PinterestSVG} from '../../../../assets/svg/socials/pinterest.svg'
import {ReactComponent as GithubSVG} from '../../../../assets/svg/socials/github.svg'
import {ReactComponent as VkSVG} from '../../../../assets/svg/socials/vk.svg'
import {ReactComponent as YoutubeSVG} from '../../../../assets/svg/socials/youtube.svg'
import {ReactComponent as BehanceSVG} from '../../../../assets/svg/socials/behance.svg'
import {ReactComponent as TelegramSVG} from '../../../../assets/svg/socials/telegram.svg'
import {capitalizeFirstChar} from '../../../../utils/string'
import s from './FollowItem.module.sass'

const icons = [
    {contact: 'facebook', icon: <FacebookSVG/>},
    {contact: 'github', icon: <GithubSVG/>},
    {contact: 'twitter', icon: <TwitterSVG/>},
    {contact: 'instagram', icon: <InstagramSVG/>},
    {contact: 'youtube', icon: <YoutubeSVG/>},
    {contact: 'pinterest', icon: <PinterestSVG/>},
    {contact: 'vk', icon: <VkSVG/>},
    {contact: 'behance', icon: <BehanceSVG/>},
    {contact: 'telegram', icon: <TelegramSVG/>}
]

// types: 'row' | 'square'
// themes: 'light' | 'dark'
export const FollowItem = ({type = 'square', contact, link, subsTotal, theme}) => {
    return (
        <NavLink to={link} className={cn(s.link, s[contact], s[`grid_${type}`], s[`theme_${theme}`])}>
            <div className={s.icon}>{icons.find((item) => item.contact === contact).icon}</div>
            <div className={s.type}>{capitalizeFirstChar(contact)}</div>
            <div className={s.subs}>{divideNumber(subsTotal)}</div>
        </NavLink>
    )
}
