import React from 'react';
import HeroSection from './Components/Common/HeroSection/page';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <HeroSection />
      <div className="flex justify-center mt-8">
        <Link href="/Auth/SignUp">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Go to Auth Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
