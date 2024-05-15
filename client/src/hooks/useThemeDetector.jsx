import {useEffect, useState} from 'react'

export const useThemeDetector = () => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)")
    const [isDarkTheme, setIsDarkTheme] = useState(theme.matches);

    useEffect(() => {
        theme.addEventListener('change', e => setIsDarkTheme(e.matches))

        return () => theme.removeEventListener('change', e => setIsDarkTheme(e.matches))
    }, [])

    return isDarkTheme
}
