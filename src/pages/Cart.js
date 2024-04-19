import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Import Header component
import CartItem from './components/CartItem'; // Import CartItem component
import Footer from './components/Footer'; // Import Footer component
import { Link } from 'react-router-dom'; // For navigation link

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Store cart items

  // Fetch cart items from local storage or database (replace with actual logic)
  useEffect(() => {
    const storedCart = localStorage.getItem('little_eddy_cart'); // Assuming localStorage for cart data
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Update cart items (replace with actual logic for adding/removing items)
  const handleUpdateCart = (itemId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    // Update cart data in local storage or database as needed
    localStorage.setItem('little_eddy_cart', JSON.stringify(updatedCart));
  };

  // Remove item from cart (replace with actual logic for removal)
  const handleRemoveItem = (itemId) => {
    const filteredCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(filteredCart);
    // Update cart data in local storage or database as needed
    localStorage.setItem('little_eddy_cart', JSON.stringify(filteredCart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <Header />
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <h2>Shopping Cart</h2>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateCart={handleUpdateCart}
                onRemoveItem={handleRemoveItem}
              />
            ))}
          </ul>
          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <Link to="/checkout">Proceed to Checkout</Link> {/* Link to checkout page */}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
