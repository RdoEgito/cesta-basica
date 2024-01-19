import React from 'react';
import DonationPage from '/pages/DonationPage'
import DonatedListPage from '/pages/DonatedListPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<DonationPage />} />
      <Route path="/lista" element={<DonatedListPage />} />
    </Routes>
  </Router>
);

export default App;
