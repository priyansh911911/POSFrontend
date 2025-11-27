import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import AllBookings from '../components/bookings/AllBookings';
import useBookings from '../hooks/useBookings';

const Bookings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { bookings, loading } = useBookings();

  const handleBookingSelect = (booking) => {
    console.log('Selected booking:', booking);
  };

  return (
    <div className="min-h-screen bg-app-gradient">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} title="Bookings" />
        <main className="p-6">
          {loading ? (
            <div className="text-center text-text">Loading...</div>
          ) : (
            <AllBookings bookings={bookings} onBookingSelect={handleBookingSelect} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Bookings;