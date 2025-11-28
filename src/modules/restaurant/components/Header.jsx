import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Welcome to SHINE POS</h1>
        <p>Manage your restaurant efficiently</p>
      </div>
      
      <div className="header-right">
        <div className="trial-info">
          <span className="trial-badge">7 Day Free Trial</span>
          <span className="subscription">Subscription: ₹1499 + GST/month</span>
        </div>
        <button className="profile-btn">Profile</button>
      </div>
      
      <div className="exit-info">
        <span>To exit full screen, press and hold</span>
        <kbd>Esc</kbd>
      </div>
    </div>
  );
};

export default Header;