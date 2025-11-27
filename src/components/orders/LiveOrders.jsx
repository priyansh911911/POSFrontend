import Button from '../ui/Button';

const LiveOrders = () => {
  const orders = [
    { id: '#001', table: 'T-5', items: ['Butter Chicken', 'Naan', 'Rice'], total: '₹450', status: 'Preparing', time: '5 min' },
    { id: '#002', table: 'T-2', items: ['Pizza Margherita', 'Coke'], total: '₹320', status: 'Ready', time: '12 min' },
    { id: '#003', table: 'Online', items: ['Biryani', 'Raita', 'Pickle'], total: '₹680', status: 'Pending', time: '2 min' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Live Orders</h2>
        <Button>New Order</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map(order => (
          <div key={order.id} className="bg-surface p-6 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text">{order.id}</h3>
                <p className="text-text-muted">{order.table}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'Ready' ? 'bg-green-500/20 text-green-500' :
                order.status === 'Preparing' ? 'bg-yellow-500/20 text-yellow-500' :
                'bg-red-500/20 text-red-500'
              }`}>
                {order.status}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="text-text font-medium mb-2">Items:</h4>
              <ul className="text-text-muted text-sm space-y-1">
                {order.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-text">{order.total}</span>
              <span className="text-text-muted text-sm">{order.time} ago</span>
            </div>

            <div className="mt-4 flex space-x-2">
              <Button variant="secondary" className="flex-1">Update</Button>
              <Button className="flex-1">Complete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveOrders;