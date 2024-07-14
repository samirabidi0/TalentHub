// RegistrationSuccessPopup.tsx

import React from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  message: string;
}

const RegistrationSuccessPopup: React.FC<Props> = ({ message }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/LoginForm'); // Redirect to LoginForm page
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-75 backdrop-filter backdrop-blur-sm">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform transition-transform duration-300 ease-in-out">
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/05/icegif-119.gif"
          alt="Success GIF"
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold text-green-600 mb-4">{message}</h2>
        <p className="text-gray-600 text-lg mb-6">You are now a member of our family!</p>
        <button
          onClick={handleRedirect}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        >
          Thank you, Let's Start Our Journey
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccessPopup;
