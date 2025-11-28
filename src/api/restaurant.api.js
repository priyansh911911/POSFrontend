import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const restaurantAPI = {
  getOrders: (filters) => axios.get(`${API_BASE}/restaurant/orders`, { params: filters }),
  createOrder: (orderData) => axios.post(`${API_BASE}/restaurant/orders`, orderData),
  updateOrder: (id, data) => axios.put(`${API_BASE}/restaurant/orders/${id}`, data),
  getMenu: () => axios.get(`${API_BASE}/restaurant/menu`),
  getStats: () => axios.get(`${API_BASE}/restaurant/stats`)
};