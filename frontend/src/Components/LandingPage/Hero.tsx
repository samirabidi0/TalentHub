import React from 'react';

const Hero = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/smiling-man-surfing-net-laptop-while-drinking-coffee-bar_637285-2056.jpg)' }} // Placeholder URL for testing
    >
      <h1 className="text-white text-4xl">Test Background Image</h1>
    </div>
  );
}

export default Hero;
