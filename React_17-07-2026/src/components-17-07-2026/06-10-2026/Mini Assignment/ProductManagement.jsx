import { useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import ProductForm from "./ProductForm";

function ProductManagement() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      category: "Electronics",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  // Add Product
  const addProduct = (product) => {
    setProducts([
      ...products,
      {
        ...product,
        id: Date.now(),
      },
    ]);
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setSelectedProduct(null);
  };

  // Edit Product
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    setEditProduct(null);
  };

  return (
    <div>
      <h1>Product Management</h1>

      <ProductForm
        addProduct={addProduct}
        editProduct={editProduct}
        updateProduct={updateProduct}
      />

      <ProductList
        products={products}
        setSelectedProduct={setSelectedProduct}
        setEditProduct={setEditProduct}
        deleteProduct={deleteProduct}
      />

      {/* Conditional Display */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )}
    </div>
  );
}

export default ProductManagement;