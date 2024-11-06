import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import AddProductPage from './pages/AddProductPage';
// import ProductListingPage from './pages/ProductListingPage';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './PaymentPage';
import { Elements } from '@stripe/react-stripe-js';
import Navbar from './components/Navbar';
import OrderPage from './components/OrderPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const stripePromise = loadStripe('pk_test_51Q7NSYExJqt3Kcq0MVlj8u5b5lvKsNgmpkvkhuZk5nY6Z7kfi4N7yFHcECwgWP9xrbNrwX6nytTiYhhysM8kbMND00KMJaP8z5');

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
      <Navbar cartItems={cartItems} />
      <Elements stripe={stripePromise}>
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
          <Route
            path="/payment"
            element={
              <PaymentPage
                totalPrice={totalPrice}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/order"
            element={<OrderPage cartItems={cartItems} />}
          />
          <Route path='/add-item' element={<AddProductPage />} />
          <Route path='/product-list' element={<ProductListingPage />} />
          <Route path='login' element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
        </Routes>
      </Elements>
    </Router>
  );
};

export default App;
