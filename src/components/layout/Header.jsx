const Header = () => {
  return (
    <header className="bg-surface border-b border-border px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-text">Welcome to SHINE POS</h2>
          <p className="text-text-muted">Manage your restaurant efficiently</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
            7 Day Free Trial
          </div>
          <div className="text-text-muted">
            Subscription: ₹1499 + GST/month
          </div>
          <button className="bg-primary hover:bg-hover text-white px-4 py-2 rounded">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;