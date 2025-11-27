import BookingCard from './BookingCard';

const AllBookings = ({ bookings, onBookingSelect }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-text">All Bookings</h2>
      <div className="grid gap-4">
        {bookings.map(booking => (
          <BookingCard
            key={booking.id}
            booking={booking}
            onClick={() => onBookingSelect(booking)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBookings;