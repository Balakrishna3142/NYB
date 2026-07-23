import React, {useState } from 'react'
import Parent from './Parent'

 function Child1() {
    let a = 13
    let [A,B] =useState(1000)
    console.log(A)
    console.log(B)
    console.log(useState())
    console.log(a)
    function Increase(a){
      a++
      console.log(a)
    }
    let inc =()=>{
      B(A+1)
    }
  return (
    <div>
        <Parent value={A}/>
        <button onClick={()=>{Increase(a)}}>Increase</button>
        <button onClick={inc}>Click</button>
        </div>
  )
}
 export default Child1