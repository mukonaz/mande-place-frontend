import React from 'react';
import './ProductListingPage.css';

const ProductListingPage = ({ products, cartItems, setCartItems, setTotalPrice }) => {
  const handleAddToCart = (product) => {
    
    const existingProduct = cartItems.find(item => item.id === product.id);

    let updatedCart;
    if (existingProduct) {
      // Increase the quantity if the product already exists in the cart
      updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
     
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    setTotalPrice(prevPrice => prevPrice + product.price);

    console.log(`Added ${product.name} to cart. Quantity: ${existingProduct ? existingProduct.quantity + 1 : 1}`);
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <div className="product-grid">
        {(Array.isArray(products) ? products : []).map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>R{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
