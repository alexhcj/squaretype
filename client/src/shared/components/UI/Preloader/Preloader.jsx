import React from 'react'
import cn from 'classnames'

import { ReactComponent as PreloaderPulse } from '../../../../assets/preloader-pulse.svg'
import s from './Preloader.module.sass'

export const Preloader = ({ className }) => {
  return (
    <div className={cn(s.preloader, className)}>
      <PreloaderPulse alt="Loading..." className={s.img} />
    </div>
  )
}