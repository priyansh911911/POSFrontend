import React from 'react';
import Sidebar from '../../../components/layout/Sidebar';
import Header from '../../../components/layout/Header';
import SalesInfoForm from '../components/SalesInfoForm';
import ActivityLog from './ActivityLog';
import CommissionLog from './CommissionLog';
import './SalesDashboard.css';

const SalesDashboard = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '🏪', label: 'Register Restaurant' },
    { icon: '📋', label: 'Activity Log' },
    { icon: '💰', label: 'Commission' },
    { icon: '📈', label: 'Forecast' }
  ];

  return (
    <div className="dashboard">
      <Sidebar menuItems={menuItems} />
      <div className="main-content">
        <Header title="Sales Panel" subtitle="Manage restaurant registrations and commissions" />
        <div className="dashboard-body">
          <div className="sales-grid">
            <SalesInfoForm />
            <ActivityLog />
            <CommissionLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;