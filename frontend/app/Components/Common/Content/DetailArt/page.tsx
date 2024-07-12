import Link from 'next/link';
import React from 'react';

const page: React.FC = () => {
  return (
  
    <div className="max-w-sm mx-auto bg-white border rounded shadow-sm mt-5">
    <div className="relative">
      <img src="https://www.unite.ai/wp-content/uploads/2023/05/AI-Graphic-design-tools.png" alt="Webflow website design advertisement with a woman's picture on the right" className="w-full rounded-t"/>
      <div className="absolute top-4 left-4 text-white">
        <h2 className="text-xl font-bold">DESIGN</h2>
        <h2 className="text-xl font-bold">WEBFLOW</h2>
        <h2 className="text-xl font-bold">WEBSITE</h2>
        
      </div>
      <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
        <span className="block w-3 h-3 bg-white rounded-full"></span>
        <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
        <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
      </div>
    </div>
    <div className="flex items-center p-4">
      <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="Tech Wise logo" className="w-10 h-10 rounded-full"/>
      <div className="ml-3">
        <p className="text-sm font-semibold">Tech Wise</p>
        <p className="text-sm text-gray-600">Je vais concevoir, repenser, mettre à jour ou réparer le site Web Webflow, convertir...</p>
      </div>
    </div>
    <div className="flex items-center justify-between px-4 pb-4">
      <p className="flex items-center text-yellow-500">
        <i className="fas fa-star"></i>
        <span className="ml-1 text-black font-bold">⭐4.9</span>
        
      </p>
      <div className="flex items-center">
        <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs font-bold mr-2">TalentLinkr</span>
      </div>
      
      <span className="text-sm font-bold">À partir de 120 $US</span>
    </div>
    <Link  href='/Components/Common/Content/DetailArt/Talent'>
    <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full text-white flex justify-center items-center">More Detail</button>
    </Link>
  </div>


  );
};
export default page
