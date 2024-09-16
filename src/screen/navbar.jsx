import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const Navbar = () => {
  // navigate
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // sign out
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    
      <header className="bg-red-600 text-white w-[100%] p-6 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Blood Bank</h1>
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <nav className="hidden md:flex space-x-6">
            <Link to="/home" className="hover:underline">Home</Link>
            <Link to="/donate" className="hover:underline">Donate Blood</Link>
            <Link to="/request" className="hover:underline">Request Blood</Link>
            <Link to="/doctor" className="hover:underline">Doctors</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
          </nav>
          <button onClick={handleLogOut} className='px-4 font-semibold  py-3 border hidden md:block rounded-full'>Log out</button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block px-4 py-2 bg-red-500 rounded-md hover:bg-red-700">Home</Link>
            <Link to="/donate" className="block px-4 py-2 bg-red-500 rounded-md hover:bg-red-700">Donate Blood</Link>
            <Link to="/request" className="block px-4 py-2 bg-red-500 rounded-md hover:bg-red-700">Request Blood</Link>
            <Link to="/doctor" className="block px-4 py-2 bg-red-500 rounded-md hover:bg-red-700">Doctors</Link>
            <Link to="/about" className="block px-4 py-2 bg-red-500 rounded-md hover:bg-red-700">About Us</Link>
            <button onClick={handleLogOut} className='px-4 font-semibold  py-3 border rounded-full'>Log out</button>

          </nav>
          
        )}
      </header>
  
  );
};

export default Navbar;
