import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        // Implementing the unique key prop using product.id
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;