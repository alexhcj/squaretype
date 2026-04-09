import React, {useEffect, useState} from 'react'
import {Link as LinkS} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
import classNames from 'classnames/bind'

import {ReactComponent as ChevronSVG} from '../../../assets/svg/chevron.svg'
import s from './Scroll.module.sass'

export const Scroll = () => {
    const [scrollBtn, setScrollBtn] = useState(false)

    const showScroll = () => {
        if (window.scrollY >= 700) {
            setScrollBtn(true)
        } else {
            setScrollBtn(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showScroll)

        return function cleanup() {
            window.removeEventListener('scroll', showScroll)
        }
    }, [scrollBtn])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    let cx = classNames.bind(s)
    let scrollCN = cx(s.scroll, {[s.scrollShow]: scrollBtn})

    return (
        <div className={scrollCN}>
            <LinkS to="nav" className={s.btn} onClick={toggleHome} duration={400} spy={true}>
                <ChevronSVG className={s.icon}/>
            </LinkS>
        </div>
    )
}

// LATER: animate btn display

// NOTE: too often render component
