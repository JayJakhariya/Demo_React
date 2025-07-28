import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Customer from '../customer/Customer';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* <Routes>
        <Route path="customers/*" element={<Customer />} />
        <Route path="*" element={<Navigate to="customers" />} />
      </Routes> */}
    </div>
  );
}

export default Dashboard;
