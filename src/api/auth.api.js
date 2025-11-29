const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const authAPI = {
  login: (credentials) => 
    fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    }).then(res => res.json()),
    
  register: (userData) => 
    fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }).then(res => res.json()),
    
  logout: () => 
    fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()),
    
  refreshToken: () => 
    fetch(`${API_BASE}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
};