const BASE_URL = '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

export const request = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const config = {
    headers: getAuthHeaders(),
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers
    }
  };

  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`Request failed: ${response.statusText}`);
  }
  
  return response.json();
};

export const get = (endpoint) => request(endpoint);
export const post = (endpoint, data) => request(endpoint, { method: 'POST', body: JSON.stringify(data) });
export const put = (endpoint, data) => request(endpoint, { method: 'PUT', body: JSON.stringify(data) });
export const del = (endpoint) => request(endpoint, { method: 'DELETE' });