import React from 'react';
import Sidebar from '../../../components/layout/Sidebar';
import Header from '../../../components/layout/Header';
import VerificationRequests from './VerificationRequests';
import SupportActivity from './SupportActivity';
import './SupportDashboard.css';

const SupportDashboard = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '✅', label: 'Verification' },
    { icon: '🎫', label: 'Tickets' },
    { icon: '📞', label: 'Support Calls' },
    { icon: '📋', label: 'Activity' }
  ];

  return (
    <div className="dashboard">
      <Sidebar menuItems={menuItems} />
      <div className="main-content">
        <Header title="Support Panel" subtitle="Document verification and customer support" />
        <div className="dashboard-body">
          <div className="support-grid">
            <VerificationRequests />
            <SupportActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;