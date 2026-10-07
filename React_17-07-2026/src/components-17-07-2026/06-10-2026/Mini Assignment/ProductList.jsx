function ProductList({
  products,
  setSelectedProduct,
  setEditProduct,
  deleteProduct,
}) {
  return (
    <div>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>

            <button onClick={() => setSelectedProduct(product)}>
              View Details
            </button>

            <button onClick={() => setEditProduct(product)}>
              Edit
            </button>

            <button onClick={() => deleteProduct(product.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;