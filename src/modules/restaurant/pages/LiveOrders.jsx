import React, { useState, useEffect } from "react";

const LiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const [allHistoryOrders, setAllHistoryOrders] = useState([]);
  const [historyOrders, setHistoryOrders] = useState([]);
  const [itemStates, setItemStates] = useState({});
  const [activeTab, setActiveTab] = useState('active');
  const [selectedDate, setSelectedDate] = useState('');
  const [isConnected, setIsConnected] = useState(true);

  // Mock data
  const mockOrders = [
    {
      _id: 'f794',
      tableNo: '201',
      customerName: 'Guest',
      status: 'pending',
      createdAt: new Date().toISOString(),
      amount: 0,
      items: [
        { name: 'Chicken Curry', quantity: 1, price: 0, prepTime: 15 }
      ]
    },
    {
      _id: '2228',
      tableNo: '201',
      customerName: 'Guest',
      status: 'preparing',
      createdAt: new Date(Date.now() - 300000).toISOString(),
      amount: 0,
      items: [
        { name: 'Chicken Curry', quantity: 1, price: 0, prepTime: 15 }
      ]
    }
  ];

  useEffect(() => {
    setOrders(mockOrders);
    setAllHistoryOrders([]);
    setHistoryOrders([]);
    
    // Initialize item states
    const newItemStates = {};
    mockOrders.forEach(order => {
      order.items.forEach((item, index) => {
        const key = `${order._id}-${index}`;
        newItemStates[key] = { status: 'pending', checked: false };
      });
    });
    setItemStates(newItemStates);
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => 
      order._id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Live Orders Dashboard</h1>
            <p className="text-gray-600">Manage kitchen orders</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-5 h-5 ${isConnected ? 'text-green-500' : 'text-red-500'}`}>
              {isConnected ? '📶' : '📵'}
            </div>
            <span className={`text-sm font-medium ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
              {isConnected ? 'Live Updates Active' : 'Offline Mode'}
            </span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'active'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Active Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'history'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            History ({historyOrders.length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(activeTab === 'active' ? orders : historyOrders).map((order) => (
          <div key={order._id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 min-h-[320px] flex flex-col">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <div className="flex-1">
                <div className="text-xs sm:text-sm text-gray-500 truncate">
                  Order# {order._id} / Dine In
                </div>
                <div className="text-xs text-gray-400">
                  {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>

            {/* Table Info */}
            <div className="flex items-center mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold mr-2">
                {order.tableNo}
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">Table/Room</div>
                <div className="text-sm font-medium truncate">{order.tableNo}</div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center justify-end mb-3">
              <div className="text-xs sm:text-sm text-orange-500 font-medium">
                {order.items?.length || 0} Items →
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 mb-3">
              <div className="grid grid-cols-6 text-xs text-gray-500 font-medium border-b pb-2 mb-2 gap-2">
                <span className="text-center">✓</span>
                <span className="col-span-3">Items</span>
                <span className="text-right">Price</span>
                <span className="text-right">Timer</span>
              </div>
              <div className="max-h-32 sm:max-h-40 overflow-y-auto space-y-2">
                {order.items?.map((item, index) => (
                  <div key={index} className="grid grid-cols-6 text-xs sm:text-sm gap-2 py-1 border-b border-gray-100 last:border-b-0">
                    <div className="flex justify-center">
                      <input 
                        type="checkbox" 
                        className="w-3 h-3" 
                        checked={itemStates[`${order._id}-${index}`]?.checked || false}
                        onChange={(e) => {
                          const key = `${order._id}-${index}`;
                          setItemStates(prev => ({
                            ...prev,
                            [key]: { 
                              ...prev[key], 
                              checked: e.target.checked 
                            }
                          }));
                        }}
                      />
                    </div>
                    <span className="col-span-3 break-words text-xs leading-tight text-gray-700">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-right text-gray-600">₹{item.price}</span>
                    <div className="text-right">
                      <span className="text-xs text-gray-400">--</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t pt-2 mb-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800 text-sm">Total</span>
                <span className="font-bold text-base sm:text-lg">₹{order.amount}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => updateOrderStatus(order._id, 'completed')}
                className="w-full bg-green-500 text-white py-1 px-2 rounded text-xs font-medium hover:bg-green-600"
              >
                Complete Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {(activeTab === 'active' ? orders : historyOrders).length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">{activeTab === 'active' ? '🍳' : '📋'}</div>
          <div className="text-gray-500">
            {activeTab === 'active' ? 'No active orders in kitchen' : 'No order history available'}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveOrders;