import React from 'react';
import DonationPage from './components/DonationPage';
import DonatedListPage from './components/DonatedListPage';
import ManagementPage from './components/ManagementPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<DonationPage />} />
      <Route path="/lista" element={<DonatedListPage />} />
      <Route path="/gerenciamento" element={<ManagementPage />} />
    </Routes>
  </Router>
);

export default App;
