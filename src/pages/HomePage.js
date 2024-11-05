import React from 'react';
import ProductList from './ProductList';
import AddProductPage from './AddProductPage';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Marketplace!</h1>
      <p>Browse and find the best products.</p>
      <ProductList />
      <AddProductPage />
      {/* You can add product listings or other components here */}
    </div>
  );
};

export default HomePage;
