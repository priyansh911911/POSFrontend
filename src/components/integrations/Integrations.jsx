import Button from '../ui/Button';

const Integrations = () => {
  const integrations = [
    { name: 'Swiggy', status: 'Connected', icon: '🍔', orders: 45 },
    { name: 'Zomato', status: 'Connected', icon: '🍕', orders: 32 },
    { name: 'Dunzo', status: 'Disconnected', icon: '🛵', orders: 0 },
    { name: 'WhatsApp Business', status: 'Connected', icon: '💬', orders: 12 }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-text mb-6">Third-Party Integrations</h2>
      
      <div className="bg-surface p-6 rounded-lg border border-border mb-6">
        <h3 className="text-lg font-semibold text-text mb-4">DYNO API Integration</h3>
        <p className="text-text-muted mb-4">Seamlessly connect with delivery platforms and manage all orders from one dashboard.</p>
        <Button>Configure API Settings</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="bg-surface p-6 rounded-lg border border-border">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{integration.icon}</div>
              <h3 className="text-lg font-semibold text-text">{integration.name}</h3>
            </div>

            <div className="text-center mb-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                integration.status === 'Connected' 
                  ? 'bg-green-500/20 text-green-500' 
                  : 'bg-red-500/20 text-red-500'
              }`}>
                {integration.status}
              </span>
            </div>

            <div className="text-center mb-4">
              <p className="text-text-muted text-sm">Today's Orders</p>
              <p className="text-2xl font-bold text-text">{integration.orders}</p>
            </div>

            <Button 
              variant={integration.status === 'Connected' ? 'secondary' : 'primary'}
              className="w-full"
            >
              {integration.status === 'Connected' ? 'Manage' : 'Connect'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;