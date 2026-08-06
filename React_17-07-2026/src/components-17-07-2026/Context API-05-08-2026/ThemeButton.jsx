import React from 'react'
import { useContext } from "react"
import { ThemeContext, } from "./ThemeContext"


function ThemeButton() {
    const { ThemeContext } =useContext(ThemeContext)
  return (
    <div>
        <button onClick={toggleTheme}>
      Change Theme
    </button>
    </div>
  )
}

export default ThemeButton