
import React from 'react';
import HeroSection from './Components/Common/HeroSection/page';
import OurMission from './Components/Common/OurMission/page';
import Content from './Components/Common/Content/page';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <OurMission />
      <Content/>
    </div>
  );
};

export default HomePage;
