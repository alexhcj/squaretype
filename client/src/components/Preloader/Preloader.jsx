import React from 'react'
import { ReactComponent as PreloaderPulse } from '../../assets/preloader-pulse.svg'
import classNames from 'classnames/bind'
import s from './Preloader.module.sass'

export const Preloader = ({ size }) => {
  let cx = classNames.bind(s)
  let imgCN = cx(s.img, size)

  return (
    <div className={s.preloader}>
      <PreloaderPulse alt="Loading..." className={imgCN} />
    </div>
  )
}

// LATER: animation playes not in all cases
