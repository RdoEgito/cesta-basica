import React from 'react';
import DonationComponent from './pages/DonationComponent'
import DonatedList from './pages/DonatedList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<DonationComponent />} />
      <Route path="/lista" element={<DonatedList />} />
    </Routes>
  </Router>
);

export default App;
