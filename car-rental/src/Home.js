import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  return (
    <div>

    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Car Rental Service</h1>
        <p className="text-xl mb-6">Rent a car with ease at affordable prices</p>
        <Link to="/cars" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
          View Car Listings
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;
