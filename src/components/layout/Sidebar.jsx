import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = ({ menuItems }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>SHINE POS</h2>
        <p>Smart Billing. Faster Service.</p>
      </div>
      
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item ${item.active ? 'active' : ''}`}
            onClick={() => {
              console.log('Clicked:', item.label);
              if (item.onClick) {
                item.onClick();
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
        
        <div className="nav-item logout-item" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;