'use client';

import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Freelancer Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <Link href="/dashboard">Edit Profile</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <Link href="/dashboard/freelancer">Add Talent</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="bg-red-500 w-full py-2 rounded">Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
