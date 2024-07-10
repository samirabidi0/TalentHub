import React from 'react';
import HeroSection from './Components/Common/HeroSection/page';
import Navbar from './Components/Common/NavBar/page';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <HeroSection />
      <Navbar/>
    </div>
  );
};
export default HomePage;
