import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {img } from '../../public/img/blood-donate'
import donate from '../../public/img/blood-donate.png'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-red-50">
      <main className="flex blood  flex-col items-end justify-center py-16">
        <div className='flex flex-col items-center h-[50vh] justify-center'>
        <h2 className="text-4xl font-semibold text-red-700 mb-4 ">Save Lives, Donate Blood</h2>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Blood donation is the most precious gift that one can give. It is the gift of life.
          Join us in saving lives by becoming a blood donor or requesting blood when needed.
        </p>
        <div className="mt-8">
          <Link to="/donate" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 mr-4">
            Donate Now
          </Link>
          <Link to="/request" className="px-6 py-3 bg-gray-200 text-red-600 font-semibold rounded-md hover:bg-gray-300">
            Request Blood
          </Link>
        </div>
        </div>
      </main>

      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl font-semibold text-center text-red-700 mb-8">How It Works</h3>
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="w-80 text-center p-6 border rounded-lg">
        <img src={donate} alt="" />
            <h4 className="text-xl font-semibold text-red-600 mb-2">1. Register</h4>
            <p className="text-gray-600">Sign up as a donor or request blood by registering on our platform.</p>
          </div>
          <div className="w-80 text-center p-6 border rounded-lg">
          <img src={donate} alt="" />

            <h4 className="text-xl font-semibold text-red-600 mb-2">2. Donate Blood</h4>
            <p className="text-gray-600">Find a blood donation camp near you or schedule an appointment.</p>
          </div>
          <div className="w-80 text-center p-6 border rounded-lg">
          <img src={donate} alt="" />

            <h4 className="text-xl font-semibold text-red-600 mb-2">3. Save Lives</h4>
            <p className="text-gray-600">Help save lives by providing blood to those in need.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-gray-700">&copy; 2024 Blood Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
