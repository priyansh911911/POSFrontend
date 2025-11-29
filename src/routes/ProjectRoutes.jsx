import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute';
import Login from '../pages/Login';
import ResDashboard from '../modules/restaurant/pages/ResDashboard';
import SuperAdminDashboard from '../modules/superAdmin/pages/Dashboard';
import SalesDashboard from '../modules/sales/pages/SalesDashboard';
import SupportDashboard from '../modules/support/pages/SupportDashboard';

const Unauthorized = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-text mb-4">Unauthorized Access</h1>
      <p className="text-text-muted">You don't have permission to access this page.</p>
    </div>
  </div>
);

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      <Route path="/super-admin" element={
        <ProtectedRoute allowedRoles={['superAdmin']}>
          <SuperAdminDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/restaurant" element={
        <ProtectedRoute allowedRoles={['restaurant']}>
          <ResDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/sales" element={
        <ProtectedRoute allowedRoles={['sales']}>
          <SalesDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/support" element={
        <ProtectedRoute allowedRoles={['support']}>
          <SupportDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default ProjectRoutes;