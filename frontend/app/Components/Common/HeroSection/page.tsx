"use client"
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import LoginPopup from './PopUp'; 

interface Talent {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  rating: number;
  delivery: string;
}

const HeroSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredTalents, setFilteredTalents] = useState<Talent[]>([]);  // this a state for filtred talent
  const talentsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [showLoginPopup, setShowLoginPopup] = useState(false); // this a State for showing the login popup

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const response = await axios.get<Talent[]>('http://127.0.0.1:5000/api/talents/getAll');
        setFilteredTalents(response.data);
      } catch (error) {
        console.error('Error fetching talents:', error);
      }
    };

    fetchTalents();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };


  //  helper function so when the use search for a talent the page will scroll down and show him the searched talent
  const scrollToTalents = () => {
    if (talentsRef.current) {
      talentsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase();
    if (searchTerm === '') {
      setFilteredTalents([]);
      return;
    }

    const filtered = filteredTalents.filter(
      talent =>
        talent.title.toLowerCase().includes(searchTerm) ||
        talent.description.toLowerCase().includes(searchTerm)
    );
    setFilteredTalents(filtered);

    scrollToTalents();
  };

  const navigateToTalentDetail = (id: number) => {
    router.push(`/Talent/TalentDetail?id=${id}`);
  };

  const handlePostTalentClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Show login popup if user is not logged in
      setShowLoginPopup(true);
    } else {
      // Navigate to post talent page if user is logged in
      router.push('/AuthSelection');
    }
  };

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
          <h1 className="text-6xl font-extrabold mb-4 text-shadow-lg animate-fadeInUp">
            Find & Hire Freelancers
          </h1>
          <div className="absolute right-10 top-20">
            <button
              onClick={handlePostTalentClick}
              className="px-12 py-6 text-xl font-semibold text-white bg-green-600 hover:bg-green-500 focus:outline-none rounded-full mt-80 animate-bounce"
            >
              Post a Talent (For Free)
            </button>
          </div>
        </div>
        <h2 className="text-4xl font-semibold mb-4 text-shadow-md animate-fadeInUp animation-delay-200">
          Browse 3 Million+ Experts Free
        </h2>
        <p className="text-xl mb-6 text-shadow-sm animate-fadeInUp animation-delay-400">
          TalentLinkr makes it easy for quality employers and freelancers to connect,
          <br /> collaborate, and get work done flexibly and securely.
        </p>
        <div className="w-full md:w-1/3 my-10 border-t border-gray-300 animate-fadeInUp animation-delay-500"></div>
        <div className="flex items-center w-full md:w-2/5 h-16 bg-white rounded-full overflow-hidden animate-fadeInUp animation-delay-600">
          <input
            type="text"
            className="w-full h-full py-3 px-6 text-gray-700 focus:outline-none"
            placeholder="Search for freelancers..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center h-full px-5 text-white bg-green-600 hover:bg-green-500 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      {/* Scroll down to show searched talents */}
      {filteredTalents.length > 0 && (
        <div ref={talentsRef} className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTalents.map(element => (
            <div key={element.id} className="max-w-sm bg-white border rounded shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105">
              <div className="relative">
                <img src={element.imageUrl} alt={element.title} className="w-full h-64 object-cover transition transform hover:scale-105" />
                <div className="absolute top-4 left-4 text-white">
                  <h2 className="text-xl font-bold">{element.category}</h2>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
                  <span className="block w-3 h-3 bg-white rounded-full"></span>
                  <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
                  <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
                </div>
              </div>
              <div className="flex items-center p-4">
                <img src={element.imageUrl} alt={element.title} className="w-10 h-10 rounded-full" />
                <div className="ml-3 flex-1">
                  <p className="text-sm font-semibold">{element.title}</p>
                  <p className="text-sm text-gray-600 truncate">{element.description.split(',')[0]}</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 pb-4">
                <p className="flex items-center text-yellow-500">
                  <i className="fas fa-star"></i>
                  <span className="ml-1 text-black font-bold">⭐{element.rating}</span>
                </p>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs font-bold mr-2">TalentLinkr</span>
                </div>
                <span className="text-sm font-bold">À partir {element.price} $US</span>
              </div>
              {/* Use a div with onClick to handle navigation */}
              <div
                onClick={() => navigateToTalentDetail(element.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-b hover:bg-blue-700 transition duration-300 cursor-pointer text-center"
              >
                See More
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Render login popup if showLoginPopup state is true */}
      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
    </div>
  );
};

export default HeroSection;
