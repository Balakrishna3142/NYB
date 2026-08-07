import { useState } from 'react'
import { ThemeContext } from './ThemeValueContext'

function ThemeProvider({ children }) {
    const [theme] = useState("Light");
  return (
       <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
