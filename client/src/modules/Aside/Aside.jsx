import React from 'react'

import {Author} from './Author/Author'
import {TrendingPosts} from './TrendingPosts/TrendingPosts'
import {Instagram} from './Instagram/Instagram'
import {Twitter} from './Twitter/Twitter'
import {Promo} from './Promo/Promo'
import {Follow} from "../../shared/components/Follow/Follow";
import s from './Aside.module.sass'

export const Aside = () => {
    return (
        <div className={s.aside}>
            <Author/>
            <Follow/>
            <TrendingPosts/>
            <Twitter/>
            <Instagram/>
            <Promo/>
        </div>
    )
}
