import React from 'react'; // Import React to create components


// A component that shows the details of a single product
function ProductItem({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
// Makes this usable in other files
export default ProductItem;