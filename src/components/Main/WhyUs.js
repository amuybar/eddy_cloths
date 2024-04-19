import React from 'react';
import '../../styles/Main/WhyUs.css'; 

const WhyUs = () => {
  return (
    <section className="why-us">
      <h2>Why Choose Little Eddy?</h2>
      <div className="why-us-content">
        <p>
          Here at Little Eddy, we're passionate about providing parents in Nairobi with an exceptional shopping experience for their little ones. We understand the importance of finding high-quality, stylish, and comfortable clothes that kids will love to wear. But beyond just clothing, we offer a unique approach that sets us apart:
        </p>
        <ul className="why-us-reasons">
         
          <li>
            <strong>Unwavering Quality:</strong> We use high-quality, comfortable fabrics that are gentle on your child's delicate skin. Our clothes are built to last.
          </li>
         
          <li>
            <strong>Exceptional Customer Service:</strong> Our dedicated team is here to answer any questions and provide personalized recommendations.
          </li>
          <li>
            <strong>More Than Just Clothing:</strong> We're a community of parents, providing resources and inspiration to create magical moments with your children.
          </li>
        </ul>
       
      </div>
    </section>
  );
};

export default WhyUs;
