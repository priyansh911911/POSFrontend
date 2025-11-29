import React, { useState } from 'react';
import Sidebar from '../../../components/layout/Sidebar';
import Header from '../../../components/layout/Header';
import StatsCards from '../components/StatsCards';
import RecentOrders from '../components/RecentOrders';
import QuickActions from '../components/QuickActions';
import LiveOrders from './LiveOrders';
import '../components/Dashboard.css';

const ResDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: activeView === 'dashboard', onClick: () => {
      console.log('Setting view to dashboard');
      setActiveView('dashboard');
    }},
    { icon: '📋', label: 'Live Orders', active: activeView === 'liveOrders', onClick: () => {
      console.log('Setting view to liveOrders');
      setActiveView('liveOrders');
    }},
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

  const renderContent = () => {
    switch (activeView) {
      case 'liveOrders':
        return <LiveOrders />;
      default:
        return (
          <>
            <Header />
            <div className="dashboard-body">
              <StatsCards />
              <div className="dashboard-grid">
                <RecentOrders />
                <QuickActions />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar menuItems={menuItems} />
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResDashboard;