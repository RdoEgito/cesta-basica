import React from 'react';
import DonationComponent from './DonationComponent'
import DonatedList from './DonatedList'
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
