import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({})

export const useThemeContext = () => useContext(ThemeContext)

// themes: 'light' | 'dark'
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
