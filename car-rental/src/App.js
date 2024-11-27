import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CarListings from './CarListings';
import RentalDetails from './RentalDetails';
import Navbar from './Navbar';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} /> {/* Pass the search handler to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarListings searchQuery={searchQuery} />} /> {/* Pass search query to CarListings */}
        <Route path="/rental/:id" element={<RentalDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
