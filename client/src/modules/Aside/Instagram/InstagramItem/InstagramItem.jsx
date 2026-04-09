import React from 'react'
import { NavLink } from 'react-router-dom'

import {getSizedImg} from "../../../../shared/utils/img";
import {divideNumber} from "../../../../shared/utils/number";
import { ReactComponent as LikeIcon } from '../../../../assets/like.svg'
import { ReactComponent as CommentIcon } from '../../../../assets/comment.svg'
import s from './InstagramItem.module.sass'

export const InstagramItem = ({ img, likes, comments }) => {
  return (
    <div className={s.imgBox}>
      <NavLink to="/" className={s.link}>
        <img src={getSizedImg(img)} alt="" className={s.img} />
        <div className={s.meta}>
          <div className={s.count}>
            <LikeIcon alt="Total likes" className={s.iconImg} />
            {divideNumber(likes)}
          </div>
          <div className={s.count}>
            <CommentIcon alt="Total comments" className={s.iconImg} />
            {divideNumber(comments)}
          </div>
        </div>
      </NavLink>
    </div>
  )
}
