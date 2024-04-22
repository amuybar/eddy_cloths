import React, { useState, useEffect } from 'react';
import '../../styles/Main/Hero.css'; 
import { useNavigate } from 'react-router-dom';

const images = [
  { src: '/images/11.jpg', alt: 'Kids Clothing ' },
  { src: '/images/12.jpg', alt: 'Kids Clothing ' },
  { src: '/images/13.jpg', alt: 'Kids Clothing' },
  { src: '/images/14.jpg', alt: 'Kids Clothing ' },
  { src: '/images/15.jpg', alt: 'Kids Clothing ' },
  { src: '/images/16.jpg', alt: 'Kids Clothing' },
  { src: '/images/17.jpg', alt: 'Kids Clothing ' },
  { src: '/images/18.jpg', alt: 'Kids Clothing ' },
  { src: '/images/19.jpg', alt: 'Kids Clothing' },
  
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true); 
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsAnimating(false), 500); 
    }, 500000); 

    return () => clearInterval(intervalId);
  }, []);

  const handleNextImage = () => {
    setIsAnimating(true);
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 400);
  };
  const handleNavigatetoSell=()=>{
    navigate('/sell');
  }
  const handleNavigatetoShop=()=>{
    navigate('/shop');
  }
  return (
    <section className="hero">
      <div className="hero-carousel">
        <img
          key={images[currentImage].src}
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className={`hero-image ${isAnimating ? 'animate' : ''}`} // Apply animation class conditionally
        />
      </div>

      <div className="hero-content">
        <h1 className={`hero-title ${isAnimating ? 'animate-down' : ''}`}>Welcome to Kids Clothing</h1> {/* Animate heading */}
        <p className={`hero-text ${isAnimating ? 'animate-down' : ''}`}>Dress to impress...</p> {/* Animate paragraph */}
        <div className="cta-btns">
          <button onClick={handleNavigatetoShop}>Shop Now</button>
          <button onClick={handleNavigatetoSell}>Sell With Us</button>
        </div>
      </div>

      <button className="hero-next-btn" onClick={handleNextImage}>
        Next
      </button>
    </section>
  );
};

export default Hero;