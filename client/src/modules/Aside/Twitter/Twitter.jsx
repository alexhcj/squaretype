import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import cn from "classnames";
import {useThemeContext} from '../../../context/ThemeContext'
import {twitterAPI} from '../../../api/twitter'
import {TweetItem} from './TweetItem/TweetItem'
import {Button} from '../../../components/UI/Button/Button'
import s from './Twitter.module.sass'

export const Twitter = () => {
    const {theme} = useThemeContext()
    const [twitter, setTwitter] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const twitter = await twitterAPI.getTwitter()
            setTwitter(twitter)
        }
        fetchData()
    }, [])

    const {profileName, nickName, following, followers, img, tweets} = twitter

    return (
        <div className={cn(s.twitter, theme === 'light' ? s.light : s.dark)}>
            <div className={s.account}>
                <div className={s.imgBox}>
                    {img ? <img src={img} alt={`${nickName} profile`} className={s.img}/> :
                        <div className={s.img_mock}></div>}
                </div>
                <div className={s.userBlock}>
                    <h6>
                        <NavLink to="/" className={s.user}>
                            {profileName}
                        </NavLink>
                    </h6>
                    <span className={s.userNickNameBox}>
            <NavLink to="/" className={s.userNickName}>
              {nickName}
            </NavLink>
          </span>
                </div>
                <div className={s.followBox}>
                    <div className={s.follow}>
                        <span className={s.number}>{following}</span>Following
                    </div>
                    <div className={s.follow}>
                        <span className={s.number}>{followers}</span>Followers
                    </div>
                </div>
            </div>
            <div className={s.tweets}>
                {tweets && tweets.map((tweet, index) => <TweetItem key={index} {...tweet} theme={theme}/>)}
            </div>
            <Button className={s.btn} size="xs">
                Follow
            </Button>
        </div>
    )
}
