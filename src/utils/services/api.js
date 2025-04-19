// src/utils/services/api.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 5000,
});

export const api = {
    getAllProducts: () => axiosInstance.get('/products'),
    getCategories: () => axiosInstance.get('/products/categories'),
    getProductById: (id) => axiosInstance.get(`/products/${id}`),
};

export default axiosInstance;
