import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AdminRouter = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AdminRouter;