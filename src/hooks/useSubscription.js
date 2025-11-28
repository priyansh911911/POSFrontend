import { useState, useEffect } from 'react';
import { subscriptionAPI } from '../api/subscription.api';

export const useSubscription = () => {
  const [subscription, setSubscription] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSubscription = async () => {
    try {
      const response = await subscriptionAPI.getSubscription();
      setSubscription(response.data);
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  };

  const fetchPlans = async () => {
    try {
      const response = await subscriptionAPI.getPlans();
      setPlans(response.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  useEffect(() => {
    fetchSubscription();
    fetchPlans();
  }, []);

  return { subscription, plans, loading, fetchSubscription, fetchPlans };
};