import React from 'react';

const SupportActivity = () => {
  return (
    <div className="support-activity">
      <h3>Support Activity</h3>
      <div className="activity-stats">
        <div className="stat-item">
          <span>Tickets Resolved</span>
          <span>24</span>
        </div>
        <div className="stat-item">
          <span>Pending Verifications</span>
          <span>8</span>
        </div>
        <div className="stat-item">
          <span>Active Support Calls</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
};

export default SupportActivity;