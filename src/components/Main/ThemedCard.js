import React from 'react';
import '../../styles/Main/Themed.css'; 

const themes = {
  'playful': {
    color: '#3e2387',
    backgroundColor: '#f5f5f5',
  },
  'adventurous': {
    color: '#23873e',
    backgroundColor: '#f2f2f2',
  },
  'cozy': {
    color: '#873e23',
    backgroundColor: '#f8f8f8',
  },
};

const ThemedClothingCard = ({ theme, title, description, imageUrl }) => {
  const cardStyle = themes[theme]; // Get theme styles

  return (
    <div className="themed-card" style={cardStyle}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ThemedClothingCard;
