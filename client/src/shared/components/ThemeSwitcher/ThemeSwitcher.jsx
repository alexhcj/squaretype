import React from "react";

import {useThemeContext} from "../../../context/ThemeContext";
import { ReactComponent as MoonSVG } from '../../../assets/svg/moon.svg';
import { ReactComponent as SunSVG } from '../../../assets/svg/sun.svg';
import s from './ThemeSwitcher.module.sass'

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useThemeContext()

	const handleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<button className={s.btn_theme} type="button" onClick={handleTheme}>
			{theme === 'light' ? <MoonSVG className={s.icon} /> : <SunSVG className={s.icon} />}
		</button>
	)
}