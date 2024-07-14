'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCategory } from '../../app/CategorieContext/CategoryContext';

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

const Page: React.FC = () => {
  const { selectedCategory } = useCategory();
  const [talents, setTalents] = useState<Talent[]>([]);
  const [filteredTalents, setFilteredTalents] = useState<Talent[]>([]);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const response = await axios.get<Talent[]>('http://127.0.0.1:5000/api/talents/getAll');
        setTalents(response.data);
      } catch (error) {
        console.error('Error fetching talents:', error);
      }
    };

    fetchTalents();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredTalents(talents.filter(talent => talent.category === selectedCategory));
    } else {
      setFilteredTalents(talents);
    }
  }, [selectedCategory, talents]);

  return (
    <div id="talents-section" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {filteredTalents.map((element) => (
        <div key={element.id} className="max-w-sm bg-white border rounded shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105">
          <div className="relative">
            <img src={element.imageUrl} alt={element.title} className="w-full h-64 object-cover transition transform hover:scale-105"/>
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
            <img src={element.imageUrl} alt={element.title} className="w-10 h-10 rounded-full"/>
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
          <Link href={`/Talent/TalentDetail?id=${element.id}&title=${element.title}&description=${element.description}&imageUrl=${element.imageUrl}&price=${element.price}&category=${element.category}&rating=${element.rating}&delivery=${element.delivery}`}>
            <button className="w-full bg-blue-600 text-white py-2 rounded-b hover:bg-blue-700 transition duration-300">
              See More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
