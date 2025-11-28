import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const subscriptionAPI = {
  getPlans: () => axios.get(`${API_BASE}/subscriptions/plans`),
  subscribe: (planData) => axios.post(`${API_BASE}/subscriptions/subscribe`, planData),
  getSubscription: () => axios.get(`${API_BASE}/subscriptions/current`),
  cancelSubscription: () => axios.post(`${API_BASE}/subscriptions/cancel`)
};