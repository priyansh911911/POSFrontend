import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: 'Total Orders', value: '156', icon: '📋' },
    { title: 'Revenue', value: '₹12,450', icon: '💰' },
    { title: 'Active Tables', value: '8', icon: '🪑' },
    { title: 'Pending Orders', value: '23', icon: '⏳' }
  ];

  return (
    <div className="min-h-screen bg-app-gradient">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} title="Dashboard" />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-surface border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-text">{stat.value}</p>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;