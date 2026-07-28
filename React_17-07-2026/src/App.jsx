import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ComponentsPage from './pages/Components_22-07-2026/ComponentsPage'
import PropsPage from './pages/Props/PropsPage'
import JSXPage from './pages/JSXtask/JSXPage'
// import StatePage from './pages/state/StatePage'
import ParentandChildPage from './pages/Parent and Child_(23-07-2026)/ParentandChildPage'
import ComponetHierarchyPage from './pages/component hierarchy-23-07-2026/ComponetHierarchyPage'
import DummyPage from './pages/Dummy_24-07-2026/DummyPage'
import NestingMultipleChildComponentsPage from './pages/nesting multiple child components28-07-2026/NestingMultipleChildComponentsPage'
import OrganizingComponentsPage from './pages/Organizing Components-28-07-2026/OrganizingComponentsPage'
import UseStatePage from './pages/UseState-28-07-2026/UseStatePage'



const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/components' element={<ComponentsPage/>}/>
    <Route path='/props' element={<PropsPage/>}/>
    <Route path='/jsx' element={<JSXPage/>}/>
    {/* <Route path='/state' element={<StatePage/>}/> */}
    <Route path='/jsx1' element={<ParentandChildPage/>}/>
    <Route path='/parent'element={<ComponetHierarchyPage/>}/>
    <Route path='/dummytwo' element={<DummyPage/>}/>
    <Route path='/nesting' element={<NestingMultipleChildComponentsPage/>}/>
    <Route path='/organizing' element={<OrganizingComponentsPage/>}/>
    <Route path='/State' element={<UseStatePage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App