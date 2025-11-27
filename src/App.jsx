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
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;