import React, { useState } from 'react';
import axios from 'axios';

const AddProductPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/api/products', {
                name,
                description,
                price: parseFloat(price), // Ensure price is sent as a number
            });
            console.log('Product added:', response.data);
            // Reset form or redirect as necessary
        } catch (error) {
            console.error('Error adding product:', error.response.data); // Log error response
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Description:</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Price:</label>
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductPage;
