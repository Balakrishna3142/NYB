import { useState, useEffect } from "react";

function ProductForm({
  addProduct,
  editProduct,
  updateProduct,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editProduct) {
      setName(editProduct.name);
      setPrice(editProduct.price);
      setCategory(editProduct.category);
    }
  }, [editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
      category,
    };

    if (editProduct) {
      updateProduct({
        ...product,
        id: editProduct.id,
      });
    } else {
      addProduct(product);
    }

    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <div>
      <h2>{editProduct ? "Edit Product" : "Add Product"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">
          {editProduct ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;