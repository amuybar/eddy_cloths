import React from 'react';
import '../../styles/Main/Category.css'; 

const categories = [
  { id: 1, title: 'Boys', image: '/images/1 (7).jpg', link: '/shop/boys' },
  { id: 2, title: 'Girls', image: '/images/1 (8).jpg', link: '/shop/girls' },
  { id: 3, title: 'New Born', image: '/images/1 (4).jpg', link: '/shop/newborn' },
];

const Category = () => {
  return (
    <><h2>Shop by Category</h2><section className="category-container">

      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <a href={category.link} className="category-card-link">
            <img src={category.image} alt={category.title} className="category-card-image" />
            <div className="category-card-overlay">
              <h3>{category.title}</h3>
              <p>Shop Now</p>
            </div>
          </a>
        </div>
      ))}
    </section></>
  );
};

export default Category;
