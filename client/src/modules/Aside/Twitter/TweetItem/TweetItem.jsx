import React from 'react'
import {NavLink} from 'react-router-dom'
import cn from "classnames";
import {calcDaysFromTweet} from '../../../../utils/date'
import {ReactComponent as TwitterIcon} from '../../../../assets/svg/socials/twitter.svg'
import {ReactComponent as ReplyIcon} from '../../../../assets/reply.svg'
import {ReactComponent as RetweetIcon} from '../../../../assets/retweet.svg'
import {ReactComponent as LikeIcon} from '../../../../assets/like.svg'
import s from './TweetItem.module.sass'

export const TweetItem = ({text, date, theme}) => {
    return (
        <div className={cn(s.tweet, theme === 'light' ? s.light : s.dark)}>
            <div className={s.text}>{text}</div>
            <div className={s.meta}>
                <NavLink to="/" className={s.twitterLink}>
                    <TwitterIcon className={s.twitterIcon} alt="twitter icon"/>
                    {calcDaysFromTweet(date)}
                </NavLink>
                <div className={s.actions}>
                    <NavLink to="/" className={s.actionLink}>
                        <ReplyIcon className={s.replyIcon} alt="twitter reply"/>
                    </NavLink>
                    <NavLink to="/" className={s.actionLink}>
                        <RetweetIcon className={s.retweetIcon} alt="twitter reply"/>
                    </NavLink>
                    <NavLink to="/" className={s.actionLink}>
                        <LikeIcon className={s.likeIcon} alt="twitter reply"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
