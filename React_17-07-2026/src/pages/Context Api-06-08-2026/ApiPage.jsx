import React from 'react'
import App from '../../components-17-07-2026/Context API-06-08-2026/App'
import Buttons from '../../components-17-07-2026/Context API-06-08-2026/Buttons'
import Counter from '../../components-17-07-2026/Context API-06-08-2026/Counter'
import { CounterContext } from '../../components-17-07-2026/Context API-06-08-2026/CounterContext'

function ApiPage() {
  return (
    <div>
        <App/>
        <Buttons/>
        <Counter/>
        <CounterContext/>
    </div>
  )
}

export default ApiPage