const Header = ({ onMenuToggle, sidebarOpen }) => {
  return (
    <header className="bg-surface border-b border-border px-4 lg:px-6 py-3 lg:py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={onMenuToggle}
            className="mr-4 p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-xl font-bold"
          >
            ≡
          </button>
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-text">Welcome to SHINE POS</h2>
            <p className="text-text-muted text-sm lg:text-base hidden sm:block">Manage your restaurant efficiently</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="bg-primary/10 text-primary px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm">
            7 Day Free Trial
          </div>
          <div className="text-text-muted text-xs lg:text-sm hidden md:block">
            Subscription: ₹1499 + GST/month
          </div>
          <button className="bg-primary hover:bg-hover text-white px-3 lg:px-4 py-1 lg:py-2 rounded text-sm lg:text-base">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;