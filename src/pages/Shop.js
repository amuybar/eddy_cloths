import React from 'react';
import Header from '../components/Shop/Header.js'; 
import ProductList from '../components/Shop/ProductList.js'; 
import Footer from '../components/Shop/Footer.js'; 

const Shop = () => {
  return (
    <div className="shop">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Shop;
