import { useState } from "react";

function Product() {
  const [cart, setCart] = useState(3);

  return (
    <div>
      <h2>Product Page</h2>

      <button onClick={() => setCart(cart + 1)}>
        Add to Cart
      </button>

      <h3>Items : {cart}</h3>
    </div>
  );
}

export default Product;