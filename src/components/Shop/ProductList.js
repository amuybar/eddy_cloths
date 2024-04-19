import React, { useState, useEffect } from 'react';
import products from '../../model/product.json';
import '../../styles/Shop/ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductList = ({ selectedCategory,addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filterProducts = () => {
      if (selectedCategory === 'all') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter((product) => product.category === selectedCategory));
      }
    };

    filterProducts();
  }, [selectedCategory]); 

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <div className="product-details">
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
            <div className="product-sizes">
              {product.sizes.map((size) => (
                <span key={size} className="product-size">
                  {size}
                </span>
              ))}
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
            <FontAwesomeIcon icon={faShoppingCart} />
           </button>
          </div>
        </div>
      ))}
    </div>
 );
};
export default ProductList;
