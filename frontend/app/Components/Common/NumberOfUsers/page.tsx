"use client"
import React, { useState, useEffect } from 'react';

const NumberOfUsers = () => {
  const [freelancers, setFreelancers] = useState<number>(0);
  const [employers, setEmployers] = useState<number>(0);
  const [innovations, setInnovations] = useState<number>(0);
  const [blogUpdates, setBlogUpdates] = useState<number>(0);

  useEffect(() => {
    const startCounting = (setState: React.Dispatch<React.SetStateAction<number>>, target: number) => {
      let current = 0;
      const increment = target / 150; 
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(interval);
          setState(target);
        } else {
          setState(Math.floor(current));
        }
      }, 20);
    };

    startCounting(setFreelancers, 1200000);
    startCounting(setEmployers, 98);
    startCounting(setInnovations, 1246);
    startCounting(setBlogUpdates, 980);

    // Clear intervals on component unmount
    return () => {
      clearInterval(freelancers);
      clearInterval(employers);
      clearInterval(innovations);
      clearInterval(blogUpdates);
    };
  }, []);

  return (
    <div className="flex items-center justify-center mt-4 mb-4 bg-gray-100">
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md border border-gray-300">
        <div className="grid grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h2 className="text-xl font-bold">Top-rated Freelancers</h2>
            <div className="text-4xl font-medium">{freelancers.toLocaleString()}</div>
            <div className="text-gray-600">Access to a global network of highly skilled freelancers.</div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Powerful Employers</h2>
            <div className="text-4xl font-medium">{employers.toLocaleString()}</div>
            <div className="text-gray-600">Connect with top businesses and corporations.</div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Innovative Approach</h2>
            <div className="text-4xl font-medium">{innovations.toLocaleString()}</div>
            <div className="text-gray-600">Our innovative algorithm ensures the perfect match for your project.</div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Blog updates</h2>
            <div className="text-4xl font-medium">{blogUpdates.toLocaleString()}</div>
            <div className="text-gray-600">Stay up-to-date with industry news and SkillMatcher updates.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOfUsers;
