'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

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

const MyOffer: React.FC = () => {
  const [appliedTalents, setAppliedTalents] = useState<Talent[]>([]);

  useEffect(() => {
    const fetchAppliedTalents = async () => {
      try {
        const response = await axios.get<Talent[]>('http://127.0.0.1:5000/api/instructors/applied');
        setAppliedTalents(response.data);
      } catch (error) {
        console.error('Error fetching applied talents:', error);
      }
    };

    fetchAppliedTalents();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Offers</h2>
        <div className="flex flex-wrap justify-center">
          {appliedTalents.map((talent) => (
            <div key={talent.id} className="max-w-sm mx-4 bg-white border rounded shadow-sm mt-5 flex-shrink-0">
              <div className="relative">
                <img src={talent.imageUrl} alt={talent.title} className="w-full rounded-t" />
                <div className="absolute top-4 left-4 text-white">
                  <h2 className="text-xl font-bold">{talent.category}</h2>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
                  <span className="block w-3 h-3 bg-white rounded-full"></span>
                  <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
                  <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
                </div>
              </div>
              <div className="flex items-center p-4">
                <img src={talent.imageUrl} alt={talent.title} className="w-10 h-10 rounded-full" />
                <div className="ml-3 flex-1">
                  <p className="text-sm font-semibold">{talent.title}</p>
                  <p className="text-sm text-gray-600 truncate">{talent.description.split(',')[0]}</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 pb-4">
                <p className="flex items-center text-yellow-500">
                  <i className="fas fa-star"></i>
                  <span className="ml-1 text-black font-bold">⭐{talent.rating}</span>
                </p>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs font-bold mr-2">TalentLinkr</span>
                </div>
                <span className="text-sm font-bold">À partir {talent.price} $US</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOffer;
