import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SellerWebsite from './SellerPortal';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SellerWebsite />} />
      </Routes>
    </Router>
  );
};

export default App;