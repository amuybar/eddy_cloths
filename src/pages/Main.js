import React from 'react';
import Header from '../components/Main/Header.js'; 
import Hero from '../components/Main/Hero.js'; 
import Category from '../components/Main/Category.js'; 
import FeatureListing from '../components/Main/FeaturedListing.js'; 
import About from '../components/Main/About.js'; 
import Themed from '../components/Main/Themed.js'; 
import WhyUs from '../components/Main/WhyUs.js'; 
import Footer from '../components/Main/Footer.js'; 
import RegistrationPopup from '../components/Main/SignupPopUp.js';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Category />
      <RegistrationPopup/> 
      <FeatureListing />
      <About />
      <Themed />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Main;
