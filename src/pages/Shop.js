import React, { useState } from 'react';
import ProductList from '../components/Shop/ProductList.js';
import NavigationBar from '../components/Shop/NavigationBar.js';
import OptionTab from '../components/Shop/OptionTab.js';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [cart, setCart] = useState([]); 
  const [count, setCount] = useState(0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    // Check if product already exists in cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if product already exists
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add new product to cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
      setCount(+1);
    }
  };

  return (
    <div className="shop">
      <NavigationBar count={count} />
      <OptionTab categories={['Boys', 'Girls', 'Newborn']} onCategoryChange={handleCategoryChange} />
      <ProductList selectedCategory={selectedCategory} addToCart={addToCart}/>
    </div>
  );
};

export default Shop;
