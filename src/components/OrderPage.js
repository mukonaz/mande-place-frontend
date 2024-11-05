import React from 'react';

const OrderPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Your Orders</h1>
      {cartItems.length > 0 ? (
        <div className="order-list">
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default OrderPage;
