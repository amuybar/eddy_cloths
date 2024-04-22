import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Function to fetch all products
export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Function to fetch a single product by ID
export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

// Function to create a new product
export const createProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productData);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

// Function to update an existing product
export const updateProduct = async (productId, productData) => {
    try {
        const response = await axios.put(`${API_URL}/products/${productId}`, productData);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Function to delete a product by ID
export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
