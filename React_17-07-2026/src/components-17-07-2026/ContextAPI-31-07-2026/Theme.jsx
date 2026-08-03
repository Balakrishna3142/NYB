import React from 'react'
import { useContext } from 'react'
import { UserContext } from './AppContext'

function Theme() {
    const {theme, setTheme } = useContext(UserContext)
  return (
    <div>
        <h2>{theme}</h2>
        <button>
            onClick={()=>setTheme("Dark")}
            Dark Theme
        </button>
    </div>
  )
}

export default Theme