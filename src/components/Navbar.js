// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for the navbar

const Navbar = ({ cartItems}) => {
  return (
    <nav className="navbar">
      <h1 className="shop-name">the chosen one</h1>
      <div className="nav-links">
        <Link to="/order">Order</Link>
        <div className="dropdown">
          <button className="dropbtn">My Account</button>
          <div className="dropdown-content">
            <Link to="/add-item">Add Item</Link>
            <Link to="/product-list">Product List</Link>
          </div>
        </div>
        <Link to="/cart" className='cart-link'>
          Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
