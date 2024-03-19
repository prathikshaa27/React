import React from 'react';
import ProductList from './productlist';
import ShoppingCart from './shoppingcart';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ProductList />
      <ShoppingCart />
    </div>
  );
};

export default Dashboard;
