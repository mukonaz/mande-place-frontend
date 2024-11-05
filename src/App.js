// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import AddProductPage from './pages/AddProductPage';
// import ProductListingPage from './pages/ProductListingPage';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './PaymentPage';

const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_KEY');

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const savedTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
    setCartItems(savedCartItems);
    setTotalPrice(savedTotalPrice);
  }, []);

  // Save cart items and total price to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [cartItems, totalPrice]);

  return (
    <Router>
      <Routes>
      <Route 
          path="/" 
          element={
            <ProductListingPage 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              totalPrice={totalPrice} 
              setTotalPrice={setTotalPrice} 
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              totalPrice={totalPrice} 
              setTotalPrice={setTotalPrice} 
            />
          } 
        />
        <Route path='/add-item' element={<AddProductPage />} />
        <Route path='/product-list' element={<ProductListingPage/>} />
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
};

export default App;
