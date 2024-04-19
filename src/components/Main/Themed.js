import React from 'react';
import ThemedClothingCard from './ThemedCard'; 
import '../../styles/Main/Themed.css'; 

const clothingData = [
  {
    theme: 'playful',
    title: 'Striped T-Shirt & Colorful Shorts Set',
    description: 'Perfect for active and stylish kids!',
    imageUrl: '/images/1 (10).jpg',
  },
  {
    theme: 'adventurous',
    title: 'Hiking Jacket & Cargo Pants Outfit',
    description: 'Ready for any exploration!',
    imageUrl: '/images/1 (9).jpg',
  },
  {
    theme: 'cozy',
    title: 'Soft Fleece Pajamas',
    description: 'Snuggle time made even better!',
    imageUrl: '/images/1 (8).jpg',
  },
];

const ClothingList = () => {
  return (
    <section className="clothing-list">
      <h2>Explore Our Clothing Themes</h2>
      <div className="clothing-cards">
        {clothingData.map((item) => (
          <ThemedClothingCard
            key={item.title}
            theme={item.theme}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothingList;
