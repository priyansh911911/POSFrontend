import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const supportAPI = {
  getDashboard: () => axios.get(`${API_BASE}/support/dashboard`),
  getVerificationRequests: () => axios.get(`${API_BASE}/support/verifications`),
  updateVerification: (id, status) => axios.put(`${API_BASE}/support/verifications/${id}`, { status }),
  getActivity: () => axios.get(`${API_BASE}/support/activity`)
};