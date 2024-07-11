'use client';

import { useState } from 'react';

const initialTalents = [
  { id: 1, name: 'Web Development', description: 'Experienced in building web applications using React, Next.js, and Tailwind CSS.' },
  { id: 2, name: 'Graphic Design', description: 'Skilled in creating visual content using Adobe Photoshop and Illustrator.' },
];

const Talents = () => {
  const [talents, setTalents] = useState(initialTalents);

  const handleUpdate = (id: number) => {
    // Logic for updating the talent
    console.log(`Update talent with id ${id}`);
  };

  const handleDelete = (id: number) => {
    // Logic for deleting the talent
    setTalents(talents.filter(talent => talent.id !== id));
  };

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
          {talents.map(talent => (
            <div key={talent.id} className="bg-white p-4 rounded shadow flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">{talent.name}</h3>
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
