import React from 'react'
import { getSizedImg } from '../../../utils/img'
import { ReactComponent as ClockSVG } from '../../../../assets/svg/clock.svg'
import s from './ImageWithOverlay.module.sass'

export const ImageWithOverlay = ({ img, alt, size, readingTime }) => {
  return (
    <div className={s.block}>
      <img className={s.img} src={getSizedImg(img, size, 'jpg')} alt={alt} />
      <div className={s.overlay}>
        <p className={s.read}>Read more</p>
        
        {readingTime && (
          <div className={s.min}>
            <ClockSVG className={s.clock} />
            {readingTime} minute{readingTime !== 1 ? 's' : ''} read
          </div>
        )}
      </div>
    </div>
  )
}
