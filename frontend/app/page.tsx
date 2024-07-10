import React from 'react';
import HeroSection from './Components/Common/HeroSection/page';
import Content from './Components/Common/Content/page';
import Navbar from './Components/Common/NavBar/page';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <HeroSection />
      <Content/>
      
    </div>
  );
};
export default HomePage;
