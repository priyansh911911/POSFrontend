import React from 'react';
import Sidebar from '../../../components/layout/Sidebar';
import Header from '../../../components/layout/Header';
import RestaurantList from '../components/RestaurantList';
import CreateRestaurant from '../components/CreateRestaurant';
import './Dashboard.css';

const Dashboard = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '🏪', label: 'Restaurants' },
    { icon: '👥', label: 'Users' },
    { icon: '📈', label: 'Analytics' },
    { icon: '⚙️', label: 'Settings' }
  ];

  return (
    <div className="dashboard">
      <Sidebar menuItems={menuItems} />
      <div className="main-content">
        <Header title="Super Admin Panel" subtitle="Manage restaurants and users" />
        <div className="dashboard-body">
          <div className="admin-grid">
            <RestaurantList />
            <CreateRestaurant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;