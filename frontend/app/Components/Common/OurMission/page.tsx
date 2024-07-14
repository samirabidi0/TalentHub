import React from 'react';

const OurMission: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-white">
      <div className="w-full md:w-1/2">
        <img 
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Our Mission"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 p-6 bg-white shadow-xl rounded-lg transform transition-transform duration-500 ease-in-out opacity-0 animate-slideIn">
        <h2 className="text-3xl font-bold mb-4">Your Vision, Our Mission</h2>
        <h3 className="text-xl font-semibold mb-4">Revolutionizing the Freelance Industry</h3>
        <p className="text-lg">
          At TalentLinkr, we’re committed to empowering freelancers and businesses to make meaningful connections.
          Our goal is to revolutionize the freelance industry, creating a platform that’s accessible, efficient, and transparent.
          We believe in the power of collaboration and strive to provide a space where creativity and innovation thrive.
          Join us as we transform the freelance landscape, one connection at a time.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
