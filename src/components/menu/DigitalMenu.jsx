import Button from '../ui/Button';

const DigitalMenu = () => {
  const menuItems = [
    { id: 1, name: 'Butter Chicken', price: 280, category: 'Main Course', available: true },
    { id: 2, name: 'Naan', price: 45, category: 'Bread', available: true },
    { id: 3, name: 'Biryani', price: 320, category: 'Rice', available: false }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Digital Menu & QR</h2>
        <div className="flex space-x-3">
          <Button variant="secondary">Generate QR</Button>
          <Button>Add Item</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-surface p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-text mb-4">Menu Items</h3>
            
            <div className="space-y-3">
              {menuItems.map(item => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-background rounded">
                  <div>
                    <h4 className="text-text font-medium">{item.name}</h4>
                    <p className="text-text-muted text-sm">{item.category}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-text font-semibold">₹{item.price}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.available 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-red-500/20 text-red-500'
                    }`}>
                      {item.available ? 'Available' : 'Out of Stock'}
                    </span>
                    <Button variant="secondary" className="text-xs px-3 py-1">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-lg border border-border text-center">
            <h3 className="text-lg font-semibold text-text mb-4">QR Code</h3>
            <div className="bg-white p-4 rounded mb-4 mx-auto w-32 h-32 flex items-center justify-center">
              <div className="text-6xl">📱</div>
            </div>
            <p className="text-text-muted text-sm mb-4">Customers can scan to view menu</p>
            <Button className="w-full">Download QR</Button>
          </div>

          <div className="bg-surface p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-text mb-4">Menu Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-text-muted">Total Items:</span>
                <span className="text-text">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Available:</span>
                <span className="text-green-500">22</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Out of Stock:</span>
                <span className="text-red-500">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMenu;