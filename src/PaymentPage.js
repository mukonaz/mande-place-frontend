import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ totalPrice, cartItems, setCartItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment('YOUR_CLIENT_SECRET', {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      console.error('Payment error:', error);
    } else {
      console.log('Payment successful:', paymentIntent);
      alert('Payment successful!');

      // Redirect to order page
      navigate('/order', {
        state: { cartItems }, // Pass the cart items to the order page
      });
      
      // Reset cart after successful payment
      setCartItems([]);
    }
  };

  return (
    <div>
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay ${totalPrice.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
