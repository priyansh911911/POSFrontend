import Button from '../ui/Button';

const Inventory = () => {
  const inventory = [
    { id: 1, item: 'Chicken', quantity: 25, unit: 'kg', minStock: 10, status: 'Good' },
    { id: 2, item: 'Rice', quantity: 8, unit: 'kg', minStock: 15, status: 'Low' },
    { id: 3, item: 'Onions', quantity: 2, unit: 'kg', minStock: 5, status: 'Critical' },
    { id: 4, item: 'Tomatoes', quantity: 12, unit: 'kg', minStock: 8, status: 'Good' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Good': return 'bg-green-500/20 text-green-500';
      case 'Low': return 'bg-yellow-500/20 text-yellow-500';
      case 'Critical': return 'bg-red-500/20 text-red-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Inventory & Pantry</h2>
        <div className="flex space-x-3">
          <Button variant="secondary">Add Stock</Button>
          <Button>New Item</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Total Items</h3>
          <p className="text-2xl font-bold text-text">124</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Low Stock</h3>
          <p className="text-2xl font-bold text-yellow-500">8</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Out of Stock</h3>
          <p className="text-2xl font-bold text-red-500">3</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Value</h3>
          <p className="text-2xl font-bold text-text">₹45,680</p>
        </div>
      </div>

      <div className="bg-surface p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold text-text mb-4">Inventory Items</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-text-muted py-3">Item</th>
                <th className="text-left text-text-muted py-3">Current Stock</th>
                <th className="text-left text-text-muted py-3">Min Stock</th>
                <th className="text-left text-text-muted py-3">Status</th>
                <th className="text-left text-text-muted py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id} className="border-b border-border">
                  <td className="py-3 text-text font-medium">{item.item}</td>
                  <td className="py-3 text-text">{item.quantity} {item.unit}</td>
                  <td className="py-3 text-text-muted">{item.minStock} {item.unit}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <Button variant="secondary" className="text-xs px-3 py-1">Update</Button>
                      <Button className="text-xs px-3 py-1">Reorder</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;