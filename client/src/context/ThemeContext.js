import {createContext, useContext, useEffect} from 'react'
import {useLocalStorage} from "../hooks/useLocalStorage.hook";
import {useThemeDetector} from "../hooks/useThemeDetector";

const ThemeContext = createContext({})

export const useThemeContext = () => useContext(ThemeContext)

// themes: 'light' | 'dark'
export const ThemeProvider = ({children}) => {
    const isDarkTheme = useThemeDetector()
    const [theme, setTheme] = useLocalStorage('theme', isDarkTheme ? 'dark' : 'light')

    useEffect(() => {
        isDarkTheme ? setTheme('dark') : setTheme('light')
    }, [isDarkTheme]);

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}
