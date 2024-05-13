import React from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'
import {useThemeContext} from '../../../context/ThemeContext'
import {Title} from '../../../components/UI/Title/Title'
import {ReactComponent as FacebookSVG} from '../../../assets/svg/socials/facebook.svg'
import {ReactComponent as TwitterSVG} from '../../../assets/svg/socials/twitter.svg'
import {ReactComponent as YoutubeSVG} from '../../../assets/svg/socials/youtube.svg'
import {ReactComponent as InstagramSVG} from '../../../assets/svg/socials/instagram.svg'
import {ReactComponent as GithubSVG} from '../../../assets/svg/socials/github.svg'
import author from '../../../assets/author.jpg'
import s from './Author.module.sass'

const socials = [
    {social: 'github', link: '/', svg: <GithubSVG/>},
    {social: 'facebook', link: '/', svg: <FacebookSVG/>},
    {social: 'twitter', link: '/', svg: <TwitterSVG/>},
    {social: 'youtube', link: '/', svg: <YoutubeSVG/>},
    {social: 'instagram', link: '/', svg: <InstagramSVG/>}
]

export const Author = () => {
    const {theme} = useThemeContext()

    return (
        <div className={cn(s.author, theme === 'light' ? s.light : s.dark)}>
            <div className={s.content}>
                <h5 className={s.title}>
                    <NavLink to="/" className={cn(s.link, theme === 'light' ? s.light : s.dark)}>
                        Hello, I’m Alex
                    </NavLink>
                </h5>
                <div className={s.body}>
                    <div className={cn(s.description, theme === 'light' ? s.light : s.dark)}>
                        Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing…
                    </div>
                </div>
                <div className={s.footer}>
                    <div className={s.socialBox}>
                        <Title theme={theme === 'dark' && 'grey'} title="Contact me"/>
                        <div className={s.socialLinks}>
                            {socials.map(({social, link, svg}) => (
                                <NavLink key={social} to={link} className={s.socialLink}>
                                    <div
                                        className={cn(s.icon, s[social], theme === 'light' ? s.light : s.dark)}>{svg}</div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className={s.imgBox}>
                        <img src={author} alt="Project author" className={s.img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
