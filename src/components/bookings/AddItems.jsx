import { useState } from 'react';
import Button from '../ui/Button';
import Select from '../ui/Select';

const AddItems = ({ items, onAddItem }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (selectedItem) {
      const item = items.find(i => i.id === selectedItem);
      onAddItem({ ...item, quantity });
      setSelectedItem('');
      setQuantity(1);
    }
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <h3 className="text-text font-semibold mb-3">Add Items</h3>
      <div className="space-y-3">
        <Select
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
          options={[
            { value: '', label: 'Select item...' },
            ...items.map(item => ({ value: item.id, label: `${item.name} - ₹${item.price}` }))
          ]}
        />
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20 p-2 bg-background border border-border rounded text-text"
          />
          <Button onClick={handleAdd} variant="primary" className="flex-1">
            Add Item
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddItems;