  "use client";
import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';

interface Talent {
  title: string;
  description: string;
  price: string;
  category: string;
  rating: string;
  delivery: string;
  image: string;
}

const UpdateTalent: React.FC<{ params: { id: number } }> = ({ params }) => {
  const [talent, setTalent] = useState<Talent>({
    title: '',
    description: '',
    price: '',
    category: '',
    rating: '',
    delivery: '',
    image: ''
  });

  useEffect(() => {
    const fetchTalent = async () => {
      try {
        const response = await axios.get<Talent>(`http://127.0.0.1:5000/api/talents/getAll/${params.id}`);
        setTalent(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching talent:', error);
      }
    };

    fetchTalent();
  }, [params.id]);

  const handleUpdate = () => {
    axios.put(`http://127.0.0.1:5000/api/talents/${params.id}`, talent)
      .then(response => {
        console.log('Talent updated successfully', response.data);
      })
      .catch(error => {
        console.error('Error updating talent:', error);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name);
    
    setTalent({
      ...talent,
      [name]: value
    });
  };
 

  return (
    <div className=''>
      <div className='flex flex-col'>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg">
          <img src="https://t3.ftcdn.net/jpg/00/65/25/06/360_F_65250693_GYPSBTBF4Yh8mC6riC8wWoHCTzNR2ff9.jpg" alt="" className='w-72 h-28 -mt-8 ml-32' />
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-6">Upload Image:</label>
            <img src="" className='w-14' />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {/* <button className="ml-72 mt-2 bg-[#108a00] hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Upload!</button> */}
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
