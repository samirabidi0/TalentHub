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

interface Client {
  id: number;
  name: string;
  email: string;
  address: string;
  imageUrl: string;
  phoneNumber: number;
}

interface ClientTalent {
  clientId: number;
  talentId: number;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  clients: Client;
  talents: Talent;
}

const MyOffer: React.FC = () => {
  const [clientTalents, setClientTalents] = useState<ClientTalent[]>([]);

  useEffect(() => {
    const fetchClientTalents = async () => {
      try {
        const response = await axios.get<ClientTalent[]>('http://127.0.0.1:5000/api/clienttalent/getAll');
        console.log('API Response:', response.data);
        setClientTalents(response.data);
      } catch (error) {
        console.error('Error fetching client talents:', error);
      }
    };

    fetchClientTalents();
  }, []);

  const handleAccept = async (id: number) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/clienttalent/${id}/updateStatus`, { status: 'accepted' });
      setClientTalents(clientTalents.map(clientTalent => 
        clientTalent.clientId === id ? { ...clientTalent, status: 'accepted' } : clientTalent
      ));
    } catch (error) {
      console.error('Error accepting talent:', error);
    }
  };

  const handleDeny = async (id: number) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/clienttalent/${id}/updateStatus`, { status: 'rejected' });
      setClientTalents(clientTalents.map(clientTalent => 
        clientTalent.clientId === id ? { ...clientTalent, status: 'rejected' } : clientTalent
      ));
    } catch (error) {
      console.error('Error denying talent:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Offers</h2>
        <div className="flex flex-wrap justify-center">
          {clientTalents.map((clientTalent) => (
            <div
              key={clientTalent.clientId}
              className="max-w-sm mx-4 bg-white border rounded shadow-sm mt-5 flex-shrink-0 transform transition duration-500 ease-in-out animate-scale-up hover:scale-105"
            >
              {clientTalent.talents && clientTalent.talents.imageUrl && (
                <div className="relative">
                  <img src={clientTalent.talents.imageUrl} alt={clientTalent.talents.title} className="w-full rounded-t" />
                  <div className="absolute top-4 left-4 text-white">
                    <h2 className="text-xl font-bold">{clientTalent.talents.category}</h2>
                  </div>
                </div>
              )}
              <div className="flex items-center p-4">
                {clientTalent.talents && (
                  <>
                    <img src={clientTalent.talents.imageUrl} alt={clientTalent.talents.title} className="w-10 h-10 rounded-full" />
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-semibold">{clientTalent.talents.title}</p>
                      <p className="text-sm text-gray-600 truncate">{clientTalent.talents.description}</p>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between px-4 pb-4">
                {clientTalent.talents && (
                  <>
                    <p className="flex items-center text-yellow-500">
                      <i className="fas fa-star"></i>
                      <span className="ml-1 text-black font-bold">⭐{clientTalent.talents.rating}</span>
                    </p>
                    <div className="flex items-center">
                      <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs font-bold mr-2">TalentLinkr</span>
                    </div>
                    <span className="text-sm font-bold">À partir {clientTalent.talents.price} $US</span>
                  </>
                )}
              </div>
              <div className="flex justify-between p-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleAccept(clientTalent.clientId)}
                  disabled={clientTalent.status === 'accepted' || clientTalent.status === 'rejected'}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeny(clientTalent.clientId)}
                  disabled={clientTalent.status === 'accepted' || clientTalent.status === 'rejected'}
                >
                  Deny
                </button>
              </div>
              <div className="p-4">
                {clientTalent.status === 'accepted' && <p className="text-green-500 font-bold">Accepted</p>}
                {clientTalent.status === 'rejected' && <p className="text-red-500 font-bold">Rejected</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOffer;
