import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (EventAction) => {
    EventAction.preventDefault();// Prevents page refresh so it updates automatically
    const newProduct = {
      id: Date.now(), // Unique ID for each product
      name,
      price: parseFloat(price),
      description,
    };
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setDescription('');
  };

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

export default AddProductForm;