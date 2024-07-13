"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className='flex items-center justify-between p-4 bg-black shadow-md relative z-10'>
      <Link href='/'>
        <div className="logo cursor-pointer">
          <img src="https://www.talentlinkr.fr/wp-content/uploads/2016/04/talentlinkr-logo-white.png" className='w-40 ml-4' alt="Logo" />
        </div>
      </Link>

      <div className="nav-menu flex gap-8">
        <ul className='flex items-center gap-8 text-gray-300'>
          <li className='cursor-pointer hover:text-green-500 font-semibold'>
            <Link href='/'>Home</Link>
          </li>
          <li className='cursor-pointer hover:text-green-500 font-semibold'>
            <Link href='/PostTalent'>Post A Talent</Link>
          </li>
          <li className='relative cursor-pointer group'>
            <span className='hover:text-green-500 font-semibold'>Category</span>
            <ul className='absolute hidden bg-black text-gray-300 group-hover:block z-20'>
              <li>
                <Link href='/category/programming'>Programming</Link>
              </li>
              <li>
                <Link href='/category/art-design'>Art & Design</Link>
              </li>
              <li>
                <Link href='/category/marketing'>Marketing</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <button onClick={handleLogout} className='h-9 w-20 rounded-lg text-white bg-transparent border border-white hover:text-green-500 hover:border-green-500 font-semibold'>
            Logout
          </button>
        ) : (
          <>
            <button className='h-9 w-20 rounded-lg text-white bg-transparent border border-white hover:text-green-500 hover:border-green-500 font-semibold'>
              <Link href='/LoginForm'>Login</Link>
            </button>
            <button className='h-10 w-24 rounded-lg text-white bg-green-600 hover:bg-green-500 font-semibold'>
              <Link href='/AuthSelection'>Sign Up</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
