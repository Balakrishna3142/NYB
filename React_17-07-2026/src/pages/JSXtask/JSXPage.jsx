import React from 'react'
import Calling from '../../tasks-17-07-2026/JSX_20-07-2026/Calling'
import DynamicData from '../../tasks-17-07-2026/JSX_20-07-2026/DynamicData'
import Valid from '../../tasks-17-07-2026/JSX_20-07-2026/Valid'
import JSX1 from '../../tasks-17-07-2026/JSX_20-07-2026/JSX1'
import Miniproject from '../../tasks-17-07-2026/Miniproject/Miniproject'

const JSXPage = () => {
  return (
    <div>JSXPage
      <Miniproject/>
      <JSX1/>
      <DynamicData/>
      <Valid/>
      <h1>{Calling()}</h1>;
    </div>
  )
}

export default JSXPage