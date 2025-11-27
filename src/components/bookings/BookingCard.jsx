const BookingCard = ({ booking, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-surface border border-border rounded-lg p-4 hover:bg-background cursor-pointer transition-colors"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-text">{booking.customerName}</h3>
          <p className="text-text-muted">Table {booking.tableNo}</p>
          <p className="text-text-muted">{booking.date} at {booking.time}</p>
        </div>
        <div className="text-right">
          <p className="text-text font-semibold">₹{booking.amount}</p>
          <span className={`px-2 py-1 rounded text-xs ${
            booking.status === 'confirmed' ? 'bg-green-600 text-white' :
            booking.status === 'pending' ? 'bg-yellow-600 text-white' :
            'bg-red-600 text-white'
          }`}>
            {booking.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;