import React, { useState } from 'react'

function Navbar() {
    const [cart] = useState(3)
  return (
    <div>
        <h2>Shopping Cart</h2>
        <h3>Items : {cart}</h3>

    </div>
  )
}

export default Navbar