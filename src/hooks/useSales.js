import { useState, useEffect } from 'react';
import { salesAPI } from '../api/sales.api';

export const useSales = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSalesData = async () => {
    setLoading(true);
    try {
      const response = await salesAPI.getDashboard();
      setSalesData(response.data);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return { salesData, loading, refetch: fetchSalesData };
};