import React, { useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    localStorage.setItem('theme', theme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
export { ThemeContext }
