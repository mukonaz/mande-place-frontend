import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, setCartItems, totalPrice, setTotalPrice }) => {
  const handleRemoveFromCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct.quantity > 1) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
      setTotalPrice(prevPrice => prevPrice - product.price);
    } else {
      const updatedCart = cartItems.filter(item => item.id !== product.id);
      setCartItems(updatedCart);
      setTotalPrice(prevPrice => prevPrice - product.price);
    }
  };

  return (
    <div>
      <h1>Cart Summary</h1>
      <div className="cart-grid">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item)}>Remove One</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total Price: ${totalPrice}</h2>
        <button onClick={() => alert('Proceed to checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
