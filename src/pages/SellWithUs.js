import React, { useState } from 'react';
import '../styles/OtherPages/SellWithUs.css'
import { createProduct } from '../services/product_services';


const SellWithUs = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        quantity: '',
        availability: '',
        category: '',
        size: '',
        brand: '',
        color: '',
        images: [],
        acceptTerms: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // Validate form data here
      if (!formData.acceptTerms) {
          alert('Please accept the terms and conditions.');
          return;
      }
  
      try {
          // Send data to backend
          const newProduct = await createProduct(formData);
          console.log('New product created:', newProduct);
  
          // Reset form fields
          setFormData({
              title: '',
              description: '',
              price: '',
              quantity: '',
              availability: '',
              category: '',
              size: '',
              brand: '',
              color: '',
              images: [],
              acceptTerms: false,
          });
  
          alert('Product submitted successfully!');
      } catch (error) {
          console.error('Error submitting product:', error);
          alert('Failed to submit product. Please try again.');
      }
  };
    return (
        <div className="sell-with-us-page">
            <nav>
                <div className="back-icon">
                    {/* Font Awesome back icon */}
                </div>
                <h1>Sell with Us</h1>
            </nav>
            <div className="description">
                <p>Explain how selling with us works...</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
                <input type="text" name="availability" placeholder="Availability" value={formData.availability} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
                <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} />
                <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} />
                <input type="text" name="color" placeholder="Color" value={formData.color} onChange={handleChange} />
                <input type="file" name="images" multiple onChange={(e) => setFormData({ ...formData, images: [...e.target.files] })} />
                <label>
                    <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleCheckboxChange} required />
                    I accept the terms and conditions
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SellWithUs;
