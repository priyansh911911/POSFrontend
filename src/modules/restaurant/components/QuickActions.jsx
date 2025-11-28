import React from 'react';

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        <button className="action-btn primary">
          <span className="action-icon">🛒</span>
          <span>New Order</span>
        </button>
        
        <button className="action-btn secondary">
          <span className="action-icon">📱</span>
          <span>QR Menu</span>
        </button>
        
        <button className="action-btn">
          <span className="action-icon">💳</span>
          <span>Billing</span>
        </button>
        
        <button className="action-btn">
          <span className="action-icon">📊</span>
          <span>Reports</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;