import { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // Default product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Grand Theft Auto VI', price: 80, description: 'A highly antcipated game of 2025 (the coder who coded this is excited' },
    { id: 2, name: 'Tom Ford Ombre Leather', price: 150, description: 'he sensuality of rich black leather is texturized with patchouli and vetiver, while floral tones of jasmine sambac conjure wild desert beauty' },
    { id: 3, name: 'PS5 Pro', price: 700, description: 'a gaming console that offers enhanced performance, graphics, and storage' },

  // Function in order to add a new product (Add ProductForm)
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm onAddProduct={addProduct} />
    </div>
  );
}

export default App;