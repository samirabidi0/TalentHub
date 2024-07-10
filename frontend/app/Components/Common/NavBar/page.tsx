import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <div>
          <Link href="/client" className="text-white px-4">
            Client
          </Link>
          <Link href="/freelancer" className="text-white px-4">
            Freelancer
          </Link>
          <Link href="/auth/login" className="text-white px-4">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
