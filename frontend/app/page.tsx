
import React from 'react';
import HeroSection from './Components/Common/HeroSection/page';
import OurMission from './Components/Common/OurMission/page';
import Talent from './Talent/page';
import OurServices from './Components/Common/OurServices/Page';
import Intersted from './Components/Common/Intersted/page';
import NumberOfUsers from './Components/Common/NumberOfUsers/page';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <OurMission />
      <NumberOfUsers/>
      <OurServices/>
      <Talent/>
      <Intersted/>
    </div>
  );
};

export default HomePage;
