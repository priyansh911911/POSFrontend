import React from 'react';

const RecentOrders = () => {
  const orders = [
    {
      id: "#001",
      customer: "John Doe",
      time: "2 min ago",
      amount: "₹450",
      status: "Completed"
    },
    {
      id: "#002",
      customer: "Jane Smith",
      time: "5 min ago",
      amount: "₹320",
      status: "Preparing"
    },
    {
      id: "#003",
      customer: "Mike Johnson",
      time: "8 min ago",
      amount: "₹680",
      status: "Pending"
    }
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'Completed': return 'status-completed';
      case 'Preparing': return 'status-preparing';
      case 'Pending': return 'status-pending';
      default: return '';
    }
  };

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <div className="order-info">
              <div className="order-header">
                <span className="order-id">{order.id} - {order.customer}</span>
                <span className="order-amount">{order.amount}</span>
              </div>
              <div className="order-time">{order.time}</div>
            </div>
            <div className={`order-status ${getStatusClass(order.status)}`}>
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;