import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <input
        type="text"
        placeholder="Name"
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
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;