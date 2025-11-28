import { useState } from 'react';
import {
  RiDashboardLine,
  RiShoppingBag3Line,
  RiSecurePaymentLine,
  RiCoupon3Line,
  RiBarChartBoxLine,
  RiTeamLine,
  RiArchiveLine,
  RiFlag2Line,
  RiSmartphoneLine,
  RiLinksLine,
  RiGiftLine
} from 'react-icons/ri';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: RiDashboardLine },
    { id: 'orders', label: 'Live Orders', icon: RiShoppingBag3Line },
    { id: 'billing', label: 'Billing', icon: RiSecurePaymentLine },
    { id: 'coupons', label: 'Coupons', icon: RiCoupon3Line },
    { id: 'reports', label: 'GST Reports', icon: RiBarChartBoxLine },
    { id: 'staff', label: 'Staff', icon: RiTeamLine },
    { id: 'inventory', label: 'Inventory', icon: RiArchiveLine },
    { id: 'leads', label: 'Leads', icon: RiFlag2Line },
    { id: 'menu', label: 'Digital Menu', icon: RiSmartphoneLine },
    { id: 'integrations', label: 'Integrations', icon: RiLinksLine },
    { id: 'referrals', label: 'Referrals', icon: RiGiftLine }
  ];

  return (
    <div className="w-64 bg-surface border-r border-border h-screen shadow-sm">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">SHINE POS</h1>
        <p className="text-sm text-text-muted mt-1">Smart Billing. Faster Service.</p>
      </div>
      
      <nav className="mt-4">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-background transition-all duration-200 rounded-r-xl mr-3 ${
              activeSection === item.id 
                ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-r-3 border-primary text-primary shadow-sm' 
                : 'text-text hover:text-text'
            }`}
          >
            <item.icon className={`mr-3 w-5 h-5 ${
              activeSection === item.id ? 'text-primary' : 'text-text-muted'
            }`} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;