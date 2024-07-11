"use client"
import React from 'react';


const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white">
          <h2 className="text-lg font-bold mb-2">About MyApp</h2>
          <p className="text-sm">
            MyApp is a platform connecting freelancers and clients worldwide,
            facilitating seamless collaboration.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <button
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300 cursor-pointer rounded-md bg-gray-700 hover:bg-gray-600"
              >
                Scroll to Top
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  document.getElementById('about-section')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="text-gray-300 hover:text-white px-4 py-2 transition-colors duration-300 cursor-pointer rounded-md bg-gray-700 hover:bg-gray-600"
              >
                About Us
              </button>
            </li>
            {/* Add more buttons for other sections as needed */}
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

