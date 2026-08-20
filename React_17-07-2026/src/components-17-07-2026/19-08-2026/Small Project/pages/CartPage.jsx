import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

function CartPage() {
  const items = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
    },
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart Items: {items.length}</h2>

      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price}
          </p>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default CartPage;