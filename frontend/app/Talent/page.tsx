'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [talents, setTalents] = useState<Talent[]>([]);

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

  const handleApply = async (talent: Talent) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/clienttalent/add', { talent });
      alert('Application sent successfully!');
    } catch (error) {
      console.error('Error applying for talent:', error);
      alert('Failed to send application.');
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {talents.map((element) => (
        <div key={element.id} className="max-w-sm mx-4 bg-white border rounded shadow-sm mt-5 flex-shrink-0">
          <div className="relative">
            <img src={element.imageUrl} alt={element.title} className="w-full rounded-t" />
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
          <Link href={`/Talent/TalentDetail?id=${element.id}&title=${element.title}&description=${element.description}&imageUrl=${element.imageUrl}&price=${element.price}&category=${element.category}&rating=${element.rating}&delivery=${element.delivery}`}>
            <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full text-white flex justify-center items-center">More Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
