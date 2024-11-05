// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css'; // Import CSS for the product card

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
