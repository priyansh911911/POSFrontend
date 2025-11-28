import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const salesAPI = {
  getDashboard: () => axios.get(`${API_BASE}/sales/dashboard`),
  registerRestaurant: (data) => axios.post(`${API_BASE}/sales/restaurants`, data),
  getActivityLog: () => axios.get(`${API_BASE}/sales/activity`),
  getCommissions: () => axios.get(`${API_BASE}/sales/commissions`)
};