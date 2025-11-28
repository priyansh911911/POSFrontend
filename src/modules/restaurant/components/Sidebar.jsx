import React from 'react';

const Sidebar = () => {
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
    <div className="sidebar">
      <div className="logo">
        <h2>SHINE POS</h2>
        <p>Smart Billing. Faster Service.</p>
      </div>
      
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;