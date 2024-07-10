'use client';

const talents = [
  { id: 1, name: 'Web Development', description: 'Experienced in building web applications using React, Next.js, and Tailwind CSS.' },
  { id: 2, name: 'Graphic Design', description: 'Skilled in creating visual content using Adobe Photoshop and Illustrator.' },
];

const Talents = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Talents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {talents.map(talent => (
          <div key={talent.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{talent.name}</h3>
            <p>{talent.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talents;
