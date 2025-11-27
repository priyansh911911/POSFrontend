import Button from '../ui/Button';

const Dashboard = () => {
  const stats = [
    { label: 'Today\'s Sales', value: '₹12,450', change: '+12%' },
    { label: 'Orders', value: '45', change: '+8%' },
    { label: 'Customers', value: '32', change: '+15%' },
    { label: 'Revenue', value: '₹1,24,500', change: '+22%' }
  ];

  const recentOrders = [
    { id: '#001', customer: 'John Doe', amount: '₹450', status: 'Completed', time: '2 min ago' },
    { id: '#002', customer: 'Jane Smith', amount: '₹320', status: 'Preparing', time: '5 min ago' },
    { id: '#003', customer: 'Mike Johnson', amount: '₹680', status: 'Pending', time: '8 min ago' }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-surface p-6 rounded-lg border border-border">
            <h3 className="text-text-muted text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-text mt-2">{stat.value}</p>
            <span className="text-green-500 text-sm">{stat.change}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-text mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {recentOrders.map(order => (
              <div key={order.id} className="flex justify-between items-center p-3 bg-background rounded">
                <div>
                  <p className="text-text font-medium">{order.id} - {order.customer}</p>
                  <p className="text-text-muted text-sm">{order.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-text font-semibold">{order.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    order.status === 'Completed' ? 'bg-green-500/20 text-green-500' :
                    order.status === 'Preparing' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-20 flex flex-col items-center justify-center">
              <span className="text-2xl mb-1">🛒</span>
              New Order
            </Button>
            <Button variant="secondary" className="h-20 flex flex-col items-center justify-center">
              <span className="text-2xl mb-1">💳</span>
              Billing
            </Button>
            <Button variant="secondary" className="h-20 flex flex-col items-center justify-center">
              <span className="text-2xl mb-1">📱</span>
              QR Menu
            </Button>
            <Button variant="secondary" className="h-20 flex flex-col items-center justify-center">
              <span className="text-2xl mb-1">📊</span>
              Reports
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;