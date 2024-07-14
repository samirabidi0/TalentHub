"use client"

import { useRouter } from 'next/navigation';

const Interested = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/AuthSelection');
  };

  return (
    <div className="font-Rubik">
      <div className="bg-blue-200 text-center py-20 px-12 rounded-lg mx-auto my-16 max-w-4xl transform transition-transform duration-500 ease-in-out hover:scale-105">
        <p className="text-2xl mb-8 animate-bounce">Start your free trial.</p>
        <h1 className="text-5xl font-bold mb-10 animate-fade-in">Sounds interesting? Let's get in touch!</h1>
        <button
          className="bg-blue-600 text-white py-4 px-8 rounded-lg text-xl transform transition-transform duration-300 hover:scale-110 hover:bg-blue-700"
          onClick={handleSignUpClick}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Interested;
