import React, { useState, useEffect } from 'react';
import '../../styles/Main/Hero.css'; 

const images = [
  { src: '/images/1 (9).jpg', alt: 'Eddy Clothing - Image 1' },
  { src: '/images/hero1.jpg', alt: 'Eddy Clothing - Image 2' },
  { src: '/images/hero2.jpg', alt: 'Eddy Clothing - Image 3' },
  // Add more images as needed
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change interval as desired (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-carousel">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={index === currentImage ? 'active' : 'inactive'}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1>Welcome to Eddy Clothing</h1>
        <p>Dress to impress with our stylish and comfortable collection.</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;