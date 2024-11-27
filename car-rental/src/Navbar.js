import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';  // adjust the path as needed


function Navbar({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the parent component with the search query
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
        <img src={logo} alt="CarRental Logo" className="w-16 h-16" />

          <Link to="/" className="text-xl font-bold text-gray-800">
            CarRental
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center items-center">
          <input 
            type="text" 
            onChange={handleSearchChange}
            className="w-56 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Search for cars, locations, etc."
          />
        </div>

        {/* Navbar Icons */}
        <div className="flex space-x-4">
          <button className="bg-gray-200 p-2 rounded-full">
            <i className="fas fa-user"></i> {/* User Icon */}
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <i className="fas fa-heart"></i> {/* Favorite Icon */}
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
