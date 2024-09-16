// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-red-600">About Our Blood Bank</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide life-saving blood to patients in need, ensuring the availability of safe and reliable blood supplies. We are dedicated to serving the community with compassion and care, saving lives through the power of donation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">Compassion: We believe in giving back to the community through blood donation and caring for those in need.</li>
            <li className="mb-2">Safety: We adhere to the highest standards of blood safety and ensure every donation is properly screened.</li>
            <li className="mb-2">Integrity: We operate transparently, ensuring the trust of our donors and recipients.</li>
            <li>Community: We strive to build strong connections with local communities to raise awareness and encourage regular donations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Services We Provide</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">Blood Collection: We organize regular blood donation drives and maintain blood donation centers to ensure a steady supply of blood.</li>
            <li className="mb-2">Blood Distribution: Our blood bank delivers safe and tested blood to hospitals and clinics across the country.</li>
            <li className="mb-2">Awareness Campaigns: We work tirelessly to educate the public on the importance of blood donation and how it saves lives.</li>
            <li>Emergency Blood Requests: We provide emergency blood transfusion services for critical cases where blood is urgently needed.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">For more information about our services or to book an appointment for blood donation, please contact us:</p>
          <ul className="text-gray-700">
            <li><strong>Email:</strong> support@bloodbank.org</li>
            <li><strong>Phone:</strong> +92 300 1234567</li>
            <li><strong>Address:</strong> Blood Bank Center, Main Street, Karachi, Pakistan</li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
            Become a Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
