
import React from 'react';
import HeroSection from './Components/Common/HeroSection/page';
import OurMission from './Components/Common/OurMission/page';
import Talent from './Talent/page';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <OurMission />
      <Talent/>
    </div>
  );
};

export default HomePage;
