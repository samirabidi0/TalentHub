'use client';
import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Talent {
  title: string;
  description: string;
  price: string;
  category: string;
  rating: string;
  delivery: string;
}

const UpdateTalent: React.FC<{ params: { id: number } }> = ({ params }) => {
  const [talent, setTalent] = useState<Talent>({
    title: '',
    description: '',
    price: '',
    category: '',
    rating: '',
    delivery: '',
  });

  const router = useRouter();

  useEffect(() => {
    const fetchTalent = async () => {
      try {
        const response = await axios.get<Talent>(`http://127.0.0.1:5000/api/talents/getAll/${params.id}`);
        setTalent(response.data);
      } catch (error) {
        console.error('Error fetching talent:', error);
      }
    };

    fetchTalent();
  }, [params.id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/talents/${params.id}`, talent);
      console.log('Talent updated successfully');
      router.push('/Dashboard'); // Redirect to Dashboard after successful update
    } catch (error) {
      console.error('Error updating talent:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTalent({
      ...talent,
      [name]: value
    });
  };

  return (
    <div className=''>
      <div className='flex flex-col'>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg">
          <div className="mb-4">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
              <input
                type="text"
                name="title"
                value={talent.title}
                onChange={handleChange}
                className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Title"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
              <textarea
                name="description"
                value={talent.description}
                onChange={handleChange}
                className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Description"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
              <input
                type="text"
                name="price"
                value={talent.price}
                onChange={handleChange}
                className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Price"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
              <input
                type="text"
                name="category"
                value={talent.category}
                onChange={handleChange}
                className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Category"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
              <input
                type="text"
                name="rating"
                value={talent.rating}
                onChange={handleChange}
                className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Rating"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">Delivery:</label>
              <input
                type="text"
                name="delivery"
                value={talent.delivery}
                onChange={handleChange}
                className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Delivery"
              />
            </div>
          </div>

          <button
            className="w-52 ml-28 mt-8 bg-black hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateTalent;
