import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create an axios instance
const apiClient = axios.create({
  baseURL: 'https://yourapi.com', // Set your base URL here
  timeout: 10000, // Optional timeout configuration
});

// Add a request interceptor to include token in headers
apiClient.interceptors.request.use(
  async (config) => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`; // Attach token to headers
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
