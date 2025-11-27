import Button from '../ui/Button';

const Leads = () => {
  const leads = [
    { id: 1, name: 'Sarah Wilson', phone: '+91 98765 43210', source: 'Website', status: 'New', value: '₹2,500' },
    { id: 2, name: 'David Brown', phone: '+91 98765 43211', source: 'Referral', status: 'Contacted', value: '₹1,800' },
    { id: 3, name: 'Emma Davis', phone: '+91 98765 43212', source: 'Social Media', status: 'Converted', value: '₹3,200' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-blue-500/20 text-blue-500';
      case 'Contacted': return 'bg-yellow-500/20 text-yellow-500';
      case 'Converted': return 'bg-green-500/20 text-green-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Lead Management</h2>
        <Button>Add Lead</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Total Leads</h3>
          <p className="text-2xl font-bold text-text">156</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">New Leads</h3>
          <p className="text-2xl font-bold text-blue-500">23</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Converted</h3>
          <p className="text-2xl font-bold text-green-500">45</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Conversion Rate</h3>
          <p className="text-2xl font-bold text-text">28.8%</p>
        </div>
      </div>

      <div className="bg-surface p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold text-text mb-4">Recent Leads</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-text-muted py-3">Name</th>
                <th className="text-left text-text-muted py-3">Phone</th>
                <th className="text-left text-text-muted py-3">Source</th>
                <th className="text-left text-text-muted py-3">Status</th>
                <th className="text-left text-text-muted py-3">Value</th>
                <th className="text-left text-text-muted py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id} className="border-b border-border">
                  <td className="py-3 text-text font-medium">{lead.name}</td>
                  <td className="py-3 text-text-muted">{lead.phone}</td>
                  <td className="py-3 text-text">{lead.source}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3 text-text font-semibold">{lead.value}</td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <Button variant="secondary" className="text-xs px-3 py-1">Contact</Button>
                      <Button className="text-xs px-3 py-1">Convert</Button>
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

export default Leads;