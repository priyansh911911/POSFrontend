import React from 'react';

const ActivityLog = () => {
  return (
    <div className="activity-log">
      <h3>Activity Log</h3>
      <p>Every 5 Min Take Listing of Sales Person and Store in Activity Table</p>
      <div className="log-entries">
        <div className="log-item">Sales Person Activity - 2 min ago</div>
        <div className="log-item">Restaurant Registration - 5 min ago</div>
        <div className="log-item">Commission Update - 8 min ago</div>
      </div>
    </div>
  );
};

export default ActivityLog;