import React from 'react';

const CommissionLog = () => {
  return (
    <div className="commission-log">
      <h3>Commission Log</h3>
      <p>Subscription Base Per Month Commission</p>
      <div className="commission-items">
        <div className="commission-item">
          <span>Restaurant A</span>
          <span>₹299</span>
        </div>
        <div className="commission-item">
          <span>Restaurant B</span>
          <span>₹299</span>
        </div>
      </div>
      <div className="forecast">
        <h4>Forecast Commission</h4>
        <p>Expected: ₹15,000 this month</p>
      </div>
    </div>
  );
};

export default CommissionLog;