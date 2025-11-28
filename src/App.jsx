import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import LiveOrders from './components/orders/LiveOrders';
import Billing from './components/billing/Billing';
import DigitalMenu from './components/menu/DigitalMenu';
import Integrations from './components/integrations/Integrations';
import Coupons from './components/coupons/Coupons';
import Reports from './components/reports/Reports';
import Staff from './components/staff/Staff';
import Inventory from './components/inventory/Inventory';
import Leads from './components/leads/Leads';
import Referrals from './components/referrals/Referrals';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'orders': return <LiveOrders />;
      case 'billing': return <Billing />;
      case 'menu': return <DigitalMenu />;
      case 'integrations': return <Integrations />;
      case 'coupons': return <Coupons />;
      case 'reports': return <Reports />;
      case 'staff': return <Staff />;
      case 'inventory': return <Inventory />;
      case 'leads': return <Leads />;
      case 'referrals': return <Referrals />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
        <Header 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)} 
          sidebarOpen={sidebarOpen}
        />
        <main className="bg-surface min-h-screen">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;