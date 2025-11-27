import Button from '../ui/Button';

const Reports = () => {
  const salesData = [
    { period: 'Today', sales: '₹12,450', gst: '₹2,241', orders: 45 },
    { period: 'This Week', sales: '₹87,320', gst: '₹15,718', orders: 312 },
    { period: 'This Month', sales: '₹3,45,680', gst: '₹62,222', orders: 1245 }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">GST Reports & Analytics</h2>
        <div className="flex space-x-3">
          <Button variant="secondary">Export PDF</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {salesData.map((data, index) => (
          <div key={index} className="bg-surface p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-text mb-4">{data.period}</h3>
            <div className="space-y-3">
              <div>
                <p className="text-text-muted text-sm">Total Sales</p>
                <p className="text-2xl font-bold text-text">{data.sales}</p>
              </div>
              <div>
                <p className="text-text-muted text-sm">GST Collected</p>
                <p className="text-lg font-semibold text-primary">{data.gst}</p>
              </div>
              <div>
                <p className="text-text-muted text-sm">Orders</p>
                <p className="text-lg font-semibold text-text">{data.orders}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold text-text mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-text-muted py-3">Order ID</th>
                <th className="text-left text-text-muted py-3">Date</th>
                <th className="text-left text-text-muted py-3">Amount</th>
                <th className="text-left text-text-muted py-3">GST</th>
                <th className="text-left text-text-muted py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 text-text">#001</td>
                <td className="py-3 text-text-muted">Today, 2:30 PM</td>
                <td className="py-3 text-text">₹450</td>
                <td className="py-3 text-text">₹81</td>
                <td className="py-3 text-text font-semibold">₹531</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text">#002</td>
                <td className="py-3 text-text-muted">Today, 1:15 PM</td>
                <td className="py-3 text-text">₹320</td>
                <td className="py-3 text-text">₹58</td>
                <td className="py-3 text-text font-semibold">₹378</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;