// src/BloodDonateSignup.js
import React, { useState } from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

const BloodDonateSignup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name , setName]= useState('')
    // const [blod , setBlood]= useState('')
    // const [city , setCity] = useState('')
    
    const handleSubmit = (e) => {

  
    
createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed up 
    const user = userCredential.user;
    try {
        const docRef = await addDoc(collection(db, "users"), {
          name : name,
          email: user.email,
          uid: user.uid,
        });
        navigate('/home')
        localStorage.setItem('userUid', user.uid)

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
    }
    
  

  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Blood Donation Signup</h2>
       
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
           onChange={(e)=> {setName(e.target.value)}}
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
              onChange={(e)=> {setEmail(e.target.value)}}
              
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

         

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
              password
            </label>
            <input
            type='password'
              name="phone"
              onChange={(e)=> {setPassword(e.target.value)}}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
         


          <button
            type="submit"
            onClick={ handleSubmit}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Sign Up
          </button>
          <div className="flex mt-3 justify-end  items-center  text-sm text-center ">
     
         <Link to='/signin' ><h1 className=" font-semibold hover:underline text-lg p-2 text-red-600  rounded self-end">Sign In</h1></Link>
        </div>
       
      </div>
    </div>
  );
};

export default BloodDonateSignup;
