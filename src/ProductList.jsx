
import React from 'react'; // Import React to create components
import ProductItem from './ProductItem'; // Import ProductItem component to display each produc

// A component that displays a list of products passed from the App
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

// Makes this usable in other files
export default ProductList;