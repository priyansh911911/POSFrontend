import Button from '../ui/Button';

const Staff = () => {
  const staff = [
    { id: 1, name: 'John Doe', role: 'Manager', status: 'Active', shift: 'Morning', phone: '+91 98765 43210' },
    { id: 2, name: 'Jane Smith', role: 'Waiter', status: 'Active', shift: 'Evening', phone: '+91 98765 43211' },
    { id: 3, name: 'Mike Johnson', role: 'Chef', status: 'On Leave', shift: 'Full Day', phone: '+91 98765 43212' }
  ];

  const attendance = [
    { date: 'Today', present: 8, absent: 2, late: 1 },
    { date: 'Yesterday', present: 9, absent: 1, late: 0 },
    { date: 'This Week', present: 45, absent: 5, late: 3 }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Staff Management</h2>
        <Button>Add Staff</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {attendance.map((data, index) => (
          <div key={index} className="bg-surface p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-text mb-4">{data.date}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-text-muted">Present:</span>
                <span className="text-green-500 font-semibold">{data.present}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Absent:</span>
                <span className="text-red-500 font-semibold">{data.absent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Late:</span>
                <span className="text-yellow-500 font-semibold">{data.late}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold text-text mb-4">Staff List</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-text-muted py-3">Name</th>
                <th className="text-left text-text-muted py-3">Role</th>
                <th className="text-left text-text-muted py-3">Shift</th>
                <th className="text-left text-text-muted py-3">Phone</th>
                <th className="text-left text-text-muted py-3">Status</th>
                <th className="text-left text-text-muted py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map(member => (
                <tr key={member.id} className="border-b border-border">
                  <td className="py-3 text-text font-medium">{member.name}</td>
                  <td className="py-3 text-text">{member.role}</td>
                  <td className="py-3 text-text">{member.shift}</td>
                  <td className="py-3 text-text-muted">{member.phone}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      member.status === 'Active' 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <Button variant="secondary" className="text-xs px-3 py-1">Edit</Button>
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

export default Staff;