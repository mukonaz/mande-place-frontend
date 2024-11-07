import React, {useState} from 'react';
import styled from 'styled-components';
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
                price: parseFloat(price), 
            });
            console.log('Product added:', response.data);
            // Reset form or redirect as necessary
        } catch (error) {
            console.error('Error adding product:', error.response.data); // Log error response
        }
    };

  return (
    <StyledWrapper>
      <div className="login-card">
        <div className="card-header">
          <h1>Add Items</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required   />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description:</label>
              <input type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}   required />
            </div>
            <div className="form-group">
              <label htmlFor="Price">Price:</label>
              <input type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}  required />
            </div>
            <div className="form-group">
                
              <button type="submit" className="login-button">ADD</button>
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .login-card {
    background-color: #f8f8f8;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    max-width: 400px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .card-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .card-header h1 {
    font-size: 2em;
    color: #333;
    text-shadow: 1px 1px #ddd;
  }

  .form-group {
    margin-bottom: 10px;
  }

  .form-group label {
    display: block;
    font-size: 1.2em;
    color: #555;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f0f0f0;
    font-size: 1.2em;
    color: #555;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.3);
    outline: none;
  }

  input[type="submit"] {
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1.2em;
    padding: 10px;
    transition: background-color 0.3s ease;
  }

  input[type="submit"]:hover {
    background-color: #0069d9;
  }

  .login-button {
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1.2em;
    padding: 10px;
    width: 100%;
    transition: background-color 0.3s ease;
    transition: 0.25s;
  }

  .login-button:hover {
    background-color: #4caf4ff5;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
    box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
  }`;

export default AddProductPage;