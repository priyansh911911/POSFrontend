import { useState, useEffect } from 'react';

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      setBookings(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addBooking = (booking) => {
    setBookings(prev => [...prev, { ...booking, id: Date.now() }]);
  };

  const updateBooking = (id, updates) => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, ...updates } : booking
    ));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return { bookings, loading, error, addBooking, updateBooking, refetch: fetchBookings };
};

export default useBookings;