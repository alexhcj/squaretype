import React from 'react'
import {NavLink} from "react-router-dom";
import {useThemeContext} from "../../../context/ThemeContext";
import promoImg from '../../../assets/images/promo.jpg'
import promoImgDark from '../../../assets/images/promo-dark.jpg'
import s from './Promo.module.sass'

export const Promo = () => {
    const {theme} = useThemeContext()

    return (
        <NavLink to={'/'}>
            <img className={s.img} src={theme === 'light' ? promoImg : promoImgDark}
                 alt='Professional web development alexhcj'/>
        </NavLink>
    )
}
