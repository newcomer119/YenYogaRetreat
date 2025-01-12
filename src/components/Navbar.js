import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <Link to="/" className="text-gray-800 text-lg font-semibold">Home</Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Link to="/courses" className="text-gray-800 text-lg font-semibold">Courses</Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Link to="/About" className="text-gray-800 text-lg font-semibold">About</Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Link to="/contact" className="text-gray-800 text-lg font-semibold">Contact</Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Link to="/blog" className="text-gray-800 text-lg font-semibold">Blog</Link>
        </div>  
      </div>
    </nav>
  );
};

export default Navbar;