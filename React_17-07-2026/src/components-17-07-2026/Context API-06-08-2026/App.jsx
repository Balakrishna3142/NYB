import React from 'react'
import Counter from './Counter'
import Buttons from './Buttons'
import { CounterContext } from './CounterContext'

function App() {
  return (
    <div>
        <Counter/>
        <Buttons/>
        <CounterContext/>
    </div>
  )
}

export default App