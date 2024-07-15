"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import RegistrationSuccessPopup from "./PopUp"

interface User {
  name: string;
  email: string;
  password: string;
  adress: string;
  phoneNumber: string;
  imageUrl: string;
}

const SignUpAsClient: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !password || !adress || !phoneNumber) {
      setError('Please fill all the fields');
      return;
    }

    // Email validation
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Password validation
    const passwordPattern = /^[a-zA-Z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 8 characters long and include at least one number');
      return;
    }

    const newUser: User = {
      name,
      email,
      password,
      adress,
      phoneNumber,
      imageUrl
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/client/signup', newUser);
      console.log(response.data); 
      setShowSuccessPopup(true);
    } catch (error:any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5673503/pexels-photo-5673503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <form onSubmit={handleFormSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-1/2 transform transition-transform duration-500 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-600">Sign Up as a Client</h2>
        <p className="text-center text-gray-500 mb-6">Create your account and start hiring top talent</p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={adress}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="imageFile" className="block text-gray-700 text-sm font-bold mb-2">
            Profile Image
          </label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
        {error && <p className="text-red-500 text-xs italic text-center mt-4">{error}</p>}
      </form>
       {/* Conditional rendering of success popup */}
       {showSuccessPopup && <RegistrationSuccessPopup message="Congratulations!" />}
    </div>
  );
};

export default SignUpAsClient;
