import React from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'

import {divideNumber} from '../../../utils/number'
import {transformPostDate} from '../../../utils/date'
import {ReactComponent as ViewsSVG} from '../../../../assets/svg/rate.svg'
import {ReactComponent as ShareSVG} from '../../../../assets/svg/share.svg'
import s from './PostMeta.module.sass'

// grey === 'black' author
//colors: 'white' | 'gray'
//types: 'full' | 'short'
export const PostMeta = ({ 
  author, 
  date, 
  views, 
  shares, 
  readingTime, 
  type = 'full', 
  color = 'grey', 
  theme 
}) => {
  return (
    <div className={cn(s.meta, s[`color_${color}`], s[`theme_${theme}`])}>
      <div className={s.author}>
        by <NavLink to="/" className={s.authorLink}>{author}</NavLink>
      </div>

      <div className={s.date}>{transformPostDate(date)}</div>

      <div className={s.views}>
        <ViewsSVG className={s.icon}/>
        {divideNumber(views)} views
      </div>

      {type === 'full' && (
        <div className={s.shares}>
          <ShareSVG className={s.icon}/>
          {divideNumber(shares)} shares
        </div>
      )}

      {readingTime && (
        <div className={s.item}>
          {readingTime} minute{readingTime !== 1 ? 's' : ''} read
        </div>
      )}
    </div>
  )
}
