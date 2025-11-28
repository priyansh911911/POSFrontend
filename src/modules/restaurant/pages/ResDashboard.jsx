import React from 'react';
import Sidebar from '../../../components/layout/Sidebar';
import Header from '../../../components/layout/Header';
import StatsCards from '../components/StatsCards';
import RecentOrders from '../components/RecentOrders';
import QuickActions from '../components/QuickActions';
import '../components/Dashboard.css';

const ResDashboard = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📋', label: 'Live Orders' },
    { icon: '💳', label: 'Billing' },
    { icon: '🎫', label: 'Coupons' },
    { icon: '📄', label: 'GST Reports' },
    { icon: '👥', label: 'Staff' },
    { icon: '📦', label: 'Inventory' },
    { icon: '🎯', label: 'Leads' },
    { icon: '📱', label: 'Digital Menu' },
    { icon: '🔗', label: 'Integrations' },
    { icon: '🎁', label: 'Referrals' }
  ];

  return (
    <div className="dashboard">
      <Sidebar menuItems={menuItems} />
      <div className="main-content">
        <Header />
        <div className="dashboard-body">
          <StatsCards />
          <div className="dashboard-grid">
            <RecentOrders />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResDashboard;