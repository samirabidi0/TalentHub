import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/5977265/5977265-sd_640_360_25fps.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-start justify-center w-full h-full bg-black bg-opacity-50 text-white p-10">
        <div className="flex justify-between items-center w-full mb-6">
          <h1 className="text-6xl font-extrabold mb-4 text-shadow-lg animate-fadeInUp">Find & Hire Freelancers</h1>
          <div className="absolute right-10 top-20">
            <button className="px-12 py-6 text-xl font-semibold text-white bg-green-600 hover:bg-green-500 focus:outline-none rounded-full mt-80">
              Post a Job (For Free)
            </button>
          </div>
        </div>
        <h2 className='text-4xl font-semibold mb-4 text-shadow-md animate-fadeInUp animation-delay-200'>Browse 3 Million+ Experts Free</h2>
        <p className="text-xl mb-6 text-shadow-sm animate-fadeInUp animation-delay-400">
          SkillMatcher makes it easy for quality employers and freelancers to connect,
          <br /> collaborate, and get work done flexibly and securely.
        </p>
        <div className="w-full md:w-1/3 my-10 border-t border-gray-300 animate-fadeInUp animation-delay-500"></div>
        <div className="flex items-center w-full md:w-2/5 h-16 bg-white rounded-full overflow-hidden animate-fadeInUp animation-delay-600">
          <input
            type="text"
            className="w-full h-full py-3 px-6 text-gray-700 focus:outline-none"
            placeholder="Search for freelancers..."
          />
          <button className="flex items-center justify-center h-full px-5 text-white bg-green-600 hover:bg-green-500 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
