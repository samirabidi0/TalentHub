"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define type for talent object
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
  const [talents, setTalents] = useState<Talent[]>([]); // Initialize talents as an array of Talent
  const [refetch, setRefetch] = useState<boolean>(false); // Set refetch as boolean

  // Function to fetch all talents
  const handleAllTalent = () => {
    axios.get<Talent[]>('http://127.0.0.1:5000/api/talents/getAll')
      .then((response) => {
        setTalents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle talent update
  const handleUpdate = (id: number) => {
    console.log(`Update talent with id ${id}`);
  };

  // Function to handle talent deletion
  const handleDelete = (id: number) => {
    axios.delete(`http://127.0.0.1:5000/api/talents/${id}`)
      .then((response) => {
        console.log('Talent deleted successfully', response.data);
        setRefetch(!refetch); // Toggle refetch to trigger useEffect
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Effect hook to fetch talents initially and on refetch change
  useEffect(() => {
    handleAllTalent();
  }, [refetch]);

  return (
    <div className="flex flex-col items-center min-h-screen justify-between py-10 ml-10">
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4"
        />
        <p className="text-center max-w-md">
          Hello, I am a highly skilled freelancer with a passion for web development and graphic design. I love creating beautiful and functional web applications and stunning visual content.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Your Talents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {talents.map((talent) => (
            <div key={talent.id} className="bg-white p-4 rounded shadow flex flex-col items-center">
              <img src={talent.imageUrl} alt={talent.title} className="rounded-lg w-full mb-4" />
              <h3 className="text-xl font-bold mb-2">{talent.title}</h3>
              <p className="mb-4">{talent.description}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleUpdate(talent.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(talent.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
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
