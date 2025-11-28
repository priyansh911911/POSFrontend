import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResDashboard from '../modules/restaurant/pages/ResDashboard';
import Login from '../pages/Login';

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ResDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/restaurant" element={<ResDashboard />} />
    </Routes>
  );
};

export default ProjectRoutes;