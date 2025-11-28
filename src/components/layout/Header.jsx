const Header = ({ onMenuToggle, sidebarOpen }) => {
  return (
    <header className="bg-surface border-b border-border px-3 sm:px-4 lg:px-6 py-3 lg:py-4 sticky top-0 z-30">
      <div className="flex justify-between items-center">
        <div className="flex items-center min-w-0 flex-1">
          <button
            onClick={onMenuToggle}
            className="mr-2 sm:mr-4 p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-lg sm:text-xl font-bold flex-shrink-0"
          >
            ≡
          </button>
          <div className="min-w-0">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-text truncate">Welcome to SHINE POS</h2>
            <p className="text-text-muted text-xs sm:text-sm lg:text-base hidden sm:block">Manage your restaurant efficiently</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 flex-shrink-0">
          <div className="bg-primary/10 text-primary px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm whitespace-nowrap">
            <span className="hidden sm:inline">7 Day </span>Trial
          </div>
          <div className="text-text-muted text-xs lg:text-sm hidden lg:block">
            Subscription: ₹1499 + GST/month
          </div>
          <button className="bg-primary hover:bg-hover text-white px-2 sm:px-3 lg:px-4 py-1 lg:py-2 rounded text-xs sm:text-sm lg:text-base">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;