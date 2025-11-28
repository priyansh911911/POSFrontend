import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const authAPI = {
  login: (credentials) => axios.post(`${API_BASE}/auth/login`, credentials),
  register: (userData) => axios.post(`${API_BASE}/auth/register`, userData),
  logout: () => axios.post(`${API_BASE}/auth/logout`),
  refreshToken: () => axios.post(`${API_BASE}/auth/refresh`)
};