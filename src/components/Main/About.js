import React from 'react';
import '../../styles/Main/About.css'; // Import the CSS file

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Little Eddy: Nairobi's Destination for Adorable Kids' Clothes</h2>
        <p>
          Here at Little Eddy, we're passionate about dressing your little ones in stylish, comfortable, and high-quality clothing. We understand the joy (and sometimes the challenge!) of finding the perfect outfit for your growing child, and we're here to make it an enjoyable experience for both of you.
        </p>
       
     
        <div className="about-beyond">
          <h3>Beyond Clothing</h3>
          <p>
            Little Eddy is more than just a clothing store. We're a community of parents who understand the joys and challenges of raising little ones. We believe in fostering creativity and imagination in children, and we strive to provide resources and inspiration to help you create magical moments with your children.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
