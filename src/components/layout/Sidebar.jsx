import { useState } from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'orders', label: 'Live Orders', icon: '🛒' },
    { id: 'billing', label: 'Billing', icon: '💳' },
    { id: 'coupons', label: 'Coupons', icon: '🎫' },
    { id: 'reports', label: 'GST Reports', icon: '📈' },
    { id: 'staff', label: 'Staff', icon: '👥' },
    { id: 'inventory', label: 'Inventory', icon: '📦' },
    { id: 'leads', label: 'Leads', icon: '🎯' },
    { id: 'menu', label: 'Digital Menu', icon: '📱' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' },
    { id: 'referrals', label: 'Referrals', icon: '🎁' }
  ];

  return (
    <div className="w-64 bg-surface border-r border-border h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">SHINE POS</h1>
        <p className="text-sm text-text-muted">Smart Billing. Faster Service.</p>
      </div>
      
      <nav className="mt-8">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-background transition-colors ${
              activeSection === item.id ? 'bg-background border-r-2 border-primary text-primary' : 'text-text'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;