// src/BloodDonationForm.js
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';


const BloodDonationForm = () => {
    // navegate
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name , setName]= useState('')
    const [blood , setBlood]= useState('')
    const [city , setCity] = useState('')
    const [age , setAge] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        let uid = localStorage.getItem('userUid')
        // submit data to the server
        // console.log('Form submitted:', { email, phone, name, blod, city, age });
        const docRef = await addDoc(collection(db, "doner"), {
            name : name,
            email: email,
            phone: phone,
            blood: blood,
            city: city,
            age: age,
            createdAt: new Date(),
            uid: uid,
          });
          alert('Thank you for your donation! We will contact you soon.');
          setName('')
          setPhone('')
          setCity('')
          setAge('')
          setBlood('')
          setEmail('')
          navigate('/request')
    }
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Blood Donation Form</h2>
       
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="bloodType">
              Blood Type
            </label>
            <select
              id="bloodType"
              name="bloodType"
              value={blood}
              onChange={e => {setBlood(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="" >Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={e => {setAge(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={e => {setCity(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
        

        

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Submit
          </button>
      
      </div>
    </div>
  );
};

export default BloodDonationForm;
