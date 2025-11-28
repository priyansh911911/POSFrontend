import { useState, useEffect } from 'react';
import { restaurantAPI } from '../api/restaurant.api';

export const useRestaurant = () => {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchOrders = async (filters = {}) => {
    setLoading(true);
    try {
      const response = await restaurantAPI.getOrders(filters);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await restaurantAPI.getStats();
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchStats();
  }, []);

  return { orders, stats, loading, fetchOrders, fetchStats };
};