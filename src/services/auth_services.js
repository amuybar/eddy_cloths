import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

const register = async (name, email, password, phone) => {
  try {
    console.log('Registering user:', name, email, phone);
    const response = await axios.post(`${API_URL}/register`, { name, email, password, phone });
    console.log('Registration response:', response.data);
    return response.data; // Return data from the server (e.g., success message or user object)
  } catch (error) {
    console.error('Error registering user:', error.response.data);
    throw error.response.data; // Throw error response from the server
  }
};

const login = async (email, password) => {
  try {
    console.log('Logging in user:', email);
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log('Login response:', response.data);

    // Check if session data is included in the response
    if (response.data && response.data.user) {
      // Save session data to local storage or session storage
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      console.log(sessionStorage.getItem('user'));
    }

    return response.data; // Return response data (optional)
  } catch (error) {
    console.error('Error logging in user:', error.response.data);
    throw error.response.data; // Throw error response data
  }
};

const logout = async () => {
  try {
    // Send a POST request to the backend to logout
    const response = await axios.post(`${API_URL}/logout`);
    return response.data; // Return response data if needed
  } catch (error) {
    console.error('Error logging out:', error.response.data);
    throw error.response.data; // Throw error response data
  }
};

const getUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Throw error if unable to fetch user data
  }
};

// Function to check authentication status
const checkAuthStatus = async () => {
  try {
    console.log('Checking authentication status');
    const response = await axios.get(`${API_URL}/status`);
    console.log('Authentication status response:', response.data.authenticated);
    return response.data.authenticated;
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false; // Return false in case of error or if not authenticated
  }
};

export { register, login,logout, getUserData, checkAuthStatus };
