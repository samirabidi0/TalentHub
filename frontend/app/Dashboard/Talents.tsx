'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Talent {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  rating: string;
  delivery: string;
}

const Talents = () => {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [profileImage, setProfileImage] = useState<string>('https://via.placeholder.com/150');
  const [refetch, setRefetch] = useState<boolean>(false);

  const handleAllTalent = () => {
    axios.get<Talent[]>('http://127.0.0.1:5000/api/talents/getAll')
      .then((response) => {
        setTalents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://127.0.0.1:5000/api/talents/${id}`)
      .then((response) => {
        console.log('Talent deleted successfully', response.data);
        setRefetch(!refetch);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);

      try {
        const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setProfileImage(response.data.imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  useEffect(() => {
    handleAllTalent();
  }, [refetch]);

  return (
    <div className="flex flex-col items-center min-h-screen justify-between py-10 ml-10 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="flex flex-col items-center mb-8">
        <input
          type="file"
          id="profileImageInput"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4 transition-transform duration-500 hover:scale-110 hover:rotate-12 cursor-pointer"
          onClick={() => document.getElementById('profileImageInput')?.click()}
        />
        <p className="text-center max-w-md text-gray-200 text-lg">
          Hello, I am a highly skilled freelancer with a passion for web development and graphic design. I love creating beautiful and functional web applications and stunning visual content.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-6 animate-pulse">
          Your Talents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talents.map((talent) => (
            <div 
              key={talent.id} 
              className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl"
            >
              <img 
                src={talent.imageUrl} 
                alt={talent.title} 
                className="rounded-lg w-full mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{talent.title}</h3>
              <p className="text-gray-100 mb-4">{talent.description}</p>
              <div className="flex space-x-2">
                <Link href={`/Dashboard/${talent.id}/UpdateTalent`}>
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-110 hover:bg-indigo-600 hover:shadow-lg"
                  >
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(talent.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-110 hover:bg-red-600 hover:shadow-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talents;
