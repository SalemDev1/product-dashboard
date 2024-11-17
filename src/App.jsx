import { useState } from 'react';
import ProductList from './ProductList';// Brings in the other parts of the app, like the product list and form to add products
import AddProductForm from './AddProductForm';
import './App.css';



function App() {
  // Default product list which is what is orginally displayed 
  const [products, setProducts] = useState([
    { id: 1, name: 'Grand Theft Auto VI', price: 80, description: 'A highly antcipated game of 2025 (the coder who coded this is excited for this game :D' },
    { id: 2, name: 'Tom Ford Ombre Leather', price: 150, description: 'The sensuality of rich black leather is texturized with patchouli and vetiver, while floral tones of jasmine sambac conjure wild desert beauty' },
    { id: 3, name: 'PS5 Pro', price: 700, description: 'a gaming console that offers enhanced performance, graphics, and storage' },
]); 

  // Function in order to add a new product (Add ProductForm)
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (  // Show the product list and the form for adding new products
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm onAddProduct={addProduct} />
    </div>
  );
}
// Make this App function usable in other files
export default App;