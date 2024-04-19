import React, { useState, useEffect } from 'react';
import '../../styles/Main/FeatureListing.css'; 
import products from '../../model/product.json'; 


const FeatureListing = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching featured products (replace with actual API call)
    setFeaturedProducts(products.slice(0, 6)); 
  }, []);

  return (
    <section className="feature-listing">
      <h2>Featured Products</h2>
      <div className="feature-carousel">
        {featuredProducts.map((product) => (
          <div key={product.id} className="feature-card">
            <a href={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} className="feature-card-image" />
              <div className="feature-card-info">
                <h3>{product.name}</h3>
                <p>Ksh {product.price}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureListing;
