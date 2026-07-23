import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ComponentsPage from './pages/Components_22-07-2026/ComponentsPage'
import PropsPage from './pages/Props/PropsPage'
import JSXPage from './pages/JSXtask/JSXPage'
import StatePage from './pages/state/StatePage'

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/components' element={<ComponentsPage/>}/>
    <Route path='/props' element={<PropsPage/>}/>
    <Route path='/jsx' element={<JSXPage/>}/>
    <Route path='/state' element={<StatePage/>}/>
    
  </Routes>
  </BrowserRouter>
  )
}

export default App