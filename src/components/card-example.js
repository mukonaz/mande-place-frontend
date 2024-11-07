// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// // import './CartPage.css';

// const CartPage = ({ cartItems, setCartItems, totalPrice, setTotalPrice }) => {
//   const navigate = useNavigate();

//   const handleRemoveFromCart = (product) => {
//     const existingProduct = cartItems.find(item => item.id === product.id);

//     if (existingProduct.quantity > 1) {
//       const updatedCart = cartItems.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       setCartItems(updatedCart);
//       setTotalPrice(prevPrice => prevPrice - product.price);
//     } else {
//       const updatedCart = cartItems.filter(item => item.id !== product.id);
//       setCartItems(updatedCart);
//       setTotalPrice(prevPrice => prevPrice - product.price);
//     }
//   };

//   const handleProceedToCheckout = () => {
//     navigate('/payment'); // Navigate to payment page
//   };

//   return (
//     <StyledWrapper>
//       <div className="master-container">
//         <div className="card cart">
//           <label className="title">Your cart</label>
//           {cartItems.map(item => (
//           <div key={item.id}  className="products">
          
//             <div  className="product">
//             <img src={item.image} alt={item.name} className="cart-image" />
//               <div>
//                 <span>{item.name}</span>
//               </div>
//               <div className="quantity">
//                 <label>{item.quantity}</label>
//               </div>
//               <label className="price small">R{item.price}</label>
//             </div>
//             <button className="bin-button" onClick={() => handleRemoveFromCart(item)}>
//         <svg className="bin-top" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <line y1={5} x2={39} y2={5} stroke="white" strokeWidth={4} />
//           <line x1={12} y1="1.5" x2="26.0357" y2="1.5" stroke="white" strokeWidth={3} />
//         </svg>
//         <svg className="bin-bottom" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <mask id="path-1-inside-1_8_19" fill="white">
//             <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
//           </mask>
//           <path d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" fill="white" mask="url(#path-1-inside-1_8_19)" />
//           <path d="M12 6L12 29" stroke="white" strokeWidth={4} />
//           <path d="M21 6V29" stroke="white" strokeWidth={4} />
//         </svg>
//       </button>
    
//           </div>
//           ))}
//         </div>
    
//         <div className="card checkout">
            
//           <label className="title">Checkout</label>
//           <div className="details">
//             <span>Your cart subtotal:</span>
//             <span>R{totalPrice}</span>
//           </div>
//           <div className="checkout--footer">
//             <label className="price"><sup>R</sup>{totalPrice}</label>
//             <button className="checkout-btn" onClick={handleProceedToCheckout}>Checkout</button>
//           </div>
//         </div>
        
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .master-container {
//     display: grid;
//     grid-template-columns: auto;
//     gap: 5px;
//   }

//   .card {
//     width: 400px;
//     background: #ffffff;
//     box-shadow:
//       0px 187px 75px rgba(0, 0, 0, 0.01),
//       0px 105px 63px rgba(0, 0, 0, 0.05),
//       0px 47px 47px rgba(0, 0, 0, 0.09),
//       0px 12px 26px rgba(0, 0, 0, 0.1),
//       0px 0px 0px rgba(0, 0, 0, 0.1);
//   }

//   .title {
//     width: 100%;
//     height: 40px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     padding-left: 20px;
//     border-bottom: 1px solid #efeff3;
//     font-weight: 700;
//     font-size: 11px;
//     color: #63656b;
//   }

//   /* cart */
//   .cart {
//     border-radius: 19px 19px 7px 7px;
//   }

//   .cart .products {
//     display: flex;
//     flex-direction: column;
//     padding: 10px;
//   }

//   .cart .products .product {
//     display: grid;
//     grid-template-columns: 60px 1fr 80px 1fr;
//     gap: 10px;
//   }

//   .cart .products .product span {
//     font-size: 13px;
//     font-weight: 600;
//     color: #47484b;
//     margin-bottom: 8px;
//     display: block;
//   }

//   .cart .products .product p {
//     font-size: 11px;
//     font-weight: 600;
//     color: #7a7c81;
//   }

//   .cart .quantity {
//     height: 30px;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     margin: auto;
//     background-color: #ffffff;
//     border: 1px solid #e5e5e5;
//     border-radius: 7px;
//     filter: drop-shadow(0px 1px 0px #efefef)
//       drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
//   }

//   .cart .quantity label {
//     width: 20px;
//     height: 30px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding-bottom: 2px;
//     font-size: 15px;
//     font-weight: 700;
//     color: #47484b;
//   }

//   .cart .quantity button {
//     width: 30px;
//     height: 30px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 0;
//     outline: none;
//     background-color: transparent;
//     padding-bottom: 2px;
//   }

//   .card .small {
//     font-size: 15px;
//     margin: 0 0 auto auto;
//   }

//   .card .small sup {
//     font-size: px;
//   }

//   /* coupons */
//   .coupons {
//     border-radius: 7px;
//   }

//   .coupons form {
//     display: grid;
//     grid-template-columns: 1fr 80px;
//     gap: 10px;
//     padding: 10px;
//   }

//   .input_field {
//     width: auto;
//     height: 36px;
//     padding: 0 0 0 12px;
//     border-radius: 5px;
//     outline: none;
//     border: 1px solid #e5e5e5;
//     filter: drop-shadow(0px 1px 0px #efefef)
//       drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
//     transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
//   }

//   .input_field:focus {
//     border: 1px solid transparent;
//     box-shadow: 0px 0px 0px 2px #242424;
//     background-color: transparent;
//   }

//   .coupons form button {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     padding: 10px 18px;
//     gap: 10px;
//     width: 100%;
//     height: 36px;
//     background: linear-gradient(180deg, #4480ff 0%, #115dfc 50%, #0550ed 100%);
//     box-shadow:
//       0px 0.5px 0.5px #efefef,
//       0px 1px 0.5px rgba(239, 239, 239, 0.5);
//     border-radius: 5px;
//     border: 0;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 12px;
//     line-height: 15px;
//     color: #ffffff;
//   }

//   /* Checkout */
//   .checkout {
//     border-radius: 9px 9px 19px 19px;
//   }

//   .checkout .details {
//     display: grid;
//     grid-template-columns: 3fr 1fr;
//     padding: 10px;
//     gap: 5px;
//   }

//   .checkout .details span {
//     font-size: 13px;
//     font-weight: 600;
//   }

//   .checkout .details span:nth-child(odd) {
//     font-size: 11px;
//     font-weight: 700;
//     color: #707175;
//     margin: auto auto auto 0;
//   }

//   .checkout .details span:nth-child(even) {
//     font-size: 13px;
//     font-weight: 600;
//     color: #47484b;
//     margin: auto 0 auto auto;
//   }

//   .checkout .checkout--footer {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px 10px 10px 20px;
//     background-color: #efeff3;
//   }

//   .price {
//     position: relative;
//     font-size: 22px;
//     color: #2b2b2f;
//     font-weight: 900;
//   }

//   .price sup {
//     font-size: 13px;
//   }

//   .price sub {
//     width: fit-content;
//     position: absolute;
//     font-size: 11px;
//     color: #5f5d6b;
//     bottom: 5px;
//     display: inline-block;
//   }

//   .checkout .checkout-btn {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     width: 150px;
//     height: 36px;
//     background: linear-gradient(180deg, #4480ff 0%, #115dfc 50%, #0550ed 100%);
//     box-shadow:
//       0px 0.5px 0.5px #efefef,
//       0px 1px 0.5px rgba(239, 239, 239, 0.5);
//     border-radius: 7px;
//     border: 0;
//     outline: none;
//     color: #ffffff;
//     font-size: 13px;
//     font-weight: 600;
//     transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
//   }
//    .bin-button {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 55px;
//     height: 55px;
//     border-radius: 15px;
//     background-color: rgb(255, 95, 95);
//     cursor: pointer;
//     border: 3px solid rgb(255, 201, 201);
//     transition-duration: 0.3s;
//   }
//   .bin-bottom {
//     width: 15px;
//   }
//   .bin-top {
//     width: 17px;
//     transform-origin: right;
//     transition-duration: 0.3s;
//   }
//   .bin-button:hover .bin-top {
//     transform: rotate(45deg);
//   }
//   .bin-button:hover {
//     background-color: rgb(255, 0, 0);
//   }
//   .bin-button:active {
//     transform: scale(0.9);
//   }`;
  

//   export default CartPage;
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
                price: parseFloat(price), // Ensure price is sent as a number
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
          <h1>Login</h1>
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
              <button type="submit" className="login-button">Login</button>
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
    background-color: #007bff;
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
    background-color: #0069d9e7;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
    box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
  }`;

export default AddProductPage;
