"use client"
import { useState } from 'react';

// Define types for talent and state
type Talent = {
  id: number;
  name: string;
  description: string;
};

const talents: Talent[] = [
  { id: 1, name: 'Web Development', description: 'Experienced in building web applications using React, Next.js, and Tailwind CSS.' },
  { id: 2, name: 'Graphic Design', description: 'Skilled in creating visual content using Adobe Photoshop and Illustrator.' },
];

const Talents = () => {
  const [selectedTalent, setSelectedTalent] = useState<number | null>(null); // State for selected talent ID

  const handleUpdate = (id: number) => {
    setSelectedTalent(id); // Placeholder for your update logic
  };

  const handleDelete = (id: number) => {
    setSelectedTalent(id); // Placeholder for your delete logic
  };

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Your Talents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {talents.map((talent) => (
            <div key={talent.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">{talent.name}</h3>
              <p className="text-gray-300">{talent.description}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleUpdate(talent.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(talent.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
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
