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

const Sidebar = ({ activeSection, setActiveSection, isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div className="w-64 bg-surface border-r border-border h-screen shadow-lg flex-shrink-0">
        <div className="p-4 lg:p-6 border-b border-border">
          <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">SHINE POS</h1>
          <p className="text-xs lg:text-sm text-text-muted mt-1">Smart Billing. Faster Service.</p>
        </div>
      
        <nav className="mt-2 lg:mt-4 px-2 lg:px-0">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              // Close sidebar on mobile after selection
              if (window.innerWidth < 1024) {
                onClose();
              }
            }}
            className={`w-full flex items-center px-4 lg:px-6 py-2 lg:py-3 text-left hover:bg-background transition-all duration-200 rounded-r-xl mr-2 lg:mr-3 text-sm lg:text-base ${
              activeSection === item.id 
                ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-r-3 border-primary text-primary shadow-sm' 
                : 'text-text hover:text-text'
            }`}
          >
            <item.icon className={`mr-2 lg:mr-3 w-4 lg:w-5 h-4 lg:h-5 ${
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