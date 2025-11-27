import { useState } from 'react';
import Button from '../ui/Button';
import Select from '../ui/Select';

const TransferTable = ({ tables, currentTable, onTransfer }) => {
  const [selectedTable, setSelectedTable] = useState('');

  const availableTables = tables.filter(table => 
    table.id !== currentTable && table.status === 'available'
  );

  const handleTransfer = () => {
    if (selectedTable) {
      onTransfer(selectedTable);
      setSelectedTable('');
    }
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <h3 className="text-text font-semibold mb-3">Transfer Table</h3>
      <div className="space-y-3">
        <p className="text-text-muted text-sm">Current: Table {currentTable}</p>
        <Select
          value={selectedTable}
          onChange={(e) => setSelectedTable(e.target.value)}
          options={[
            { value: '', label: 'Select new table...' },
            ...availableTables.map(table => ({ 
              value: table.id, 
              label: `Table ${table.number}` 
            }))
          ]}
        />
        <Button 
          onClick={handleTransfer} 
          variant="primary" 
          disabled={!selectedTable}
          className="w-full"
        >
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default TransferTable;