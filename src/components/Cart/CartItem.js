import React from 'react';
import '../../styles/Cart/CartItem.css';


const CartItem = ({ item, onUpdateCart, onRemoveItem }) => {
  return (
    <li key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <p className="cart-item-quantity">
          Quantity: {item.quantity}
          {/* Optional: Buttons for quantity adjustment (replace with your logic) */}
          {/* <button onClick={() => onUpdateCart(item.id, item.quantity - 1)}> - </button>
          <button onClick={() => onUpdateCart(item.id, item.quantity + 1)}> + </button> */}
        </p>
        <button className="cart-item-remove" onClick={() => onRemoveItem(item.id)}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
