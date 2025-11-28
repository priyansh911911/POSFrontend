import React from 'react';

const Header = ({ title, subtitle, showTrial = true, showProfile = true }) => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>{title || "Welcome to SHINE POS"}</h1>
        <p>{subtitle || "Manage your restaurant efficiently"}</p>
      </div>
      
      {(showTrial || showProfile) && (
        <div className="header-right">
          {showTrial && (
            <div className="trial-info">
              <span className="trial-badge">7 Day Free Trial</span>
              <span className="subscription">Subscription: ₹1499 + GST/month</span>
            </div>
          )}
          {showProfile && (
            <button className="profile-btn">Profile</button>
          )}
        </div>
      )}
      
      <div className="exit-info">
        <span>To exit full screen, press and hold</span>
        <kbd>Esc</kbd>
      </div>
    </div>
  );
};

export default Header;