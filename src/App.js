import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DonationComponent from './DonationComponent'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={DonationComponent}></Route>
    </div>
  </Router>
);

export default App;
