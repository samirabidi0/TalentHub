"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

interface AuthSelectionProps {
  role: string; // Define role prop here
}
const AuthSelection: React.FC<AuthSelectionProps> = ({ role })  => {
  const router = useRouter();

  const handleRoleSelection = (role: string) => {
    if (role === 'freelancer') {
      router.push('/SignUpAsFreelancer');
    } else if (role === 'client') {
      router.push('/SignUpAsClient');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side - Sign Up as Client */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full animate-fadeInLeft">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg animate-bounceIn">
              Hire the Best Talent
            </h2>
            <p className="text-xl text-gray-300 mb-6 drop-shadow-lg">
              Join us and find the perfect professionals for your projects.
            </p>
            <button
              onClick={() => handleRoleSelection('client')}
              className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-110 animate-pulse text-xl"
            >
              Join as a Client
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up as Freelancer */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full animate-fadeInRight">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg animate-bounceIn">
              Showcase Your Skills
            </h2>
            <p className="text-xl text-gray-300 mb-6 drop-shadow-lg">
              Join our community of freelancers and find exciting projects to work on.
            </p>
            <button
              onClick={() => handleRoleSelection('freelancer')}
              className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-110 animate-pulse text-xl"
            >
              Join as a Freelancer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSelection;
