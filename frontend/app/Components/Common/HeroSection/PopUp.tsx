"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  onClose: () => void;
}

const LoginPopup: React.FC<Props> = ({ onClose }) => {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push('/LoginForm');
    onClose(); // Close the popup after redirecting
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75"></div>

      {/* Popup content */}
      <div className="relative max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md flex items-start">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 text-xl hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Animated GIF (Replace with your GIF) */}
        <div className="w-2/3">
          <img
            src="https://cdnl.iconscout.com/lottie/premium/thumb/businessman-working-5570841-4652123.gif"
            alt="Animated background"
            className="w-full h-auto"
          />
        </div>

        {/* Text content and buttons */}
        <div className="w-5/1 pl-2 pr-1">
          {/* Custom text for login popup */}
          <p className="text-3xl font-semibold text-green-600 mb-5">You need to log in first!</p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Please log in to post a talent for free.
          </p>

          {/* Login and Cancel buttons */}
          <div className="flex space-x-4">
            <button
              onClick={redirectToLogin}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg focus:outline-none transform transition-transform hover:scale-105"
            >
              Log In
            </button>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
