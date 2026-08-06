import React from 'react'
import Header from './Header'
import Home from './Home'

function App() {
    const user = "NYB";
  return (
    <div>
        <Header user ={user} />
        <Home user ={user} />
    </div>
  )
}

export default App