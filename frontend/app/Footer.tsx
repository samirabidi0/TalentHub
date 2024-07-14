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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-white">
          <h2 className="text-xl font-bold mb-4">About SkillMatcher</h2>
          <p className="text-sm">
            TalentLinkr is a platform connecting freelancers and clients worldwide,
            facilitating seamless collaboration. Our mission is to empower individuals
            to achieve their professional goals through meaningful connections.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <button
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
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
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                About Us
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-6">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.689v-3.622h3.131V8.414c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.503 0-1.793.715-1.793 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116c.729 0 1.322-.593 1.322-1.324V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.93 4.93 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.924 4.924 0 0016.675 3c-2.737 0-4.952 2.215-4.952 4.947 0 .388.044.765.128 1.124-4.113-.207-7.76-2.176-10.195-5.164-.427.734-.671 1.584-.671 2.488 0 1.717.874 3.233 2.201 4.124a4.93 4.93 0 01-2.244-.618v.062c0 2.401 1.707 4.401 3.97 4.854a4.9 4.9 0 01-2.238.085 4.926 4.926 0 004.601 3.417A9.868 9.868 0 010 21.54 13.905 13.905 0 007.548 24c9.057 0 14.007-7.51 14.007-14.007 0-.213-.005-.426-.014-.637A9.926 9.926 0 0024 4.557z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.225 0H1.771C.794 0 0 .793 0 1.77v20.453C0 23.207.794 24 1.771 24h20.453C23.207 24 24 23.207 24 22.223V1.77C24 .794 23.207 0 22.225 0zM7.086 20.452H3.547V8.897h3.539v11.555zM5.316 7.577c-1.141 0-2.067-.925-2.067-2.066s.926-2.066 2.067-2.066 2.066.925 2.066 2.066-.926 2.066-2.066 2.066zm15.136 12.875h-3.537v-5.605c0-1.336-.028-3.054-1.865-3.054-1.865 0-2.152 1.457-2.152 2.961v5.698h-3.536V8.897h3.395v1.575h.049c.472-.895 1.624-1.837 3.345-1.837 3.579 0 4.24 2.354 4.24 5.416v6.401z"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SkillMatcher. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
