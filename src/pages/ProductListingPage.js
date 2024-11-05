import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import ProductList from '../components/ProductList';
import './ProductListingPage.css';

const ProductListingPage = ({ cartItems, setCartItems, totalPrice, setTotalPrice }) => {
    const handleAddToCart = (product) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
      setTotalPrice((prevTotal) => prevTotal + product.price);
      console.log(`Added ${product.name} to cart`);
    };
  
    const handleSearch = (query) => {
      console.log(`Searching for: ${query}`);
    };

  return (
    <div className="product-listing-page">
      <Navbar cartItems={cartItems} />
      <Search onSearch={handleSearch} />
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductListingPage;
