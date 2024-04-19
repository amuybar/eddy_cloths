import React, { useState } from 'react';
import '../../styles/Shop/OptionTab.css';


const OptionTab = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Set initial selected category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="option-tab">
      {categories.map((category) => (
        <button
          key={category}
          className={`option-button ${category === selectedCategory ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default OptionTab;
