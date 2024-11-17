import React from 'react';

function ProductItem({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.pricee}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;