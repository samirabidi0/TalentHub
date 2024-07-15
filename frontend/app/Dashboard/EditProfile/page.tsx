"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Freelancer {
  name: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  imageUrl: string;
}

const EditProfile: React.FC = () => {
  const [freelancer, setFreelancer] = useState<Freelancer>({
    name: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    imageUrl: ''
  });

  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
  useEffect(() => {
    const fetchFreelancer = async () => {
      try {
        const response = await axios.get<Freelancer>('http://127.0.0.1:5000/api/freelancers/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFreelancer(response.data);
      } catch (error) {
        console.error('Error fetching freelancer:', error);
      }
    };

    fetchFreelancer();
  }, [token]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return '';
    }

    const data = new FormData();
    data.append('file', file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/talents/upload", data);
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return '';
    }
  };

  const handleUpdate = async () => {
    let imageUrl = freelancer.imageUrl;

    if (file) {
      imageUrl = await handleImageUpload();
      if (!imageUrl) return; // Exit if image upload fails
    }

    try {
      await axios.put('http://127.0.0.1:5000/api/freelancers/profile', { ...freelancer, imageUrl }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Freelancer updated successfully');
      router.push('/dashboard')
    } catch (error) {
      console.error('Error updating freelancer:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFreelancer({
      ...freelancer,
      [name]: value
    });
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={freelancer.name}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#3d9731] focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={freelancer.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#3d9731] focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={freelancer.password}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#3d9731] focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Address:</label>
            <input
              type="text"
              name="address"
              value={freelancer.address}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#3d9731] focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={freelancer.phoneNumber}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#3d9731] focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Profile Image URL:</label>
            <input
              type="file"
              name="imageUrl"
              onChange={handleFileChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#3d9731] focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>
          <button
            className="w-full bg-[#3d9731] hover:bg-[#2e7a23] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            onClick={handleUpdate}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;




