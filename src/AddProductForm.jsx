import React, { useState } from 'react';// Import React and useState to manage form input


// Form component that lets users add a new product with a set price,name, and description
function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (EventAction) => {
    EventAction.preventDefault();// Prevents page refresh so it updates automatically
    const newProduct = {
      id: Date.now(), // Use the current time to create a unique ID
      name, // Product name from the input
      price: parseFloat(price),// Converts the price to a number
      description, // Product description from is typed in 
    };
    
     // Uses the function passed from App to add the products and also clears the form fields after adding the product
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setDescription('');
  };
 
 
  // Shows the form
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={(EventAction) => setName(EventAction.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(EventAction) => setPrice(EventAction.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(EventAction) => setDescription(EventAction.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
}
// Make this usable in other files
export default AddProductForm;