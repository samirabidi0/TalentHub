"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    setIsLoggedIn(!!token);
    setRole(userRole || ''); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    setRole('');
    router.push('/');
  };

  const handleDashboardClick = () => {
    router.push('/Dashboard');
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
            <Link href='/category/programming'>Programming</Link>
          </li>
          <li className='cursor-pointer hover:text-green-500 font-semibold'>
            <Link href='/category/art-design'>Art & Design</Link>
          </li>
          <li className='cursor-pointer hover:text-green-500 font-semibold'>
            <Link href='/category/marketing'>Marketing</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            {role === 'freelancer' && (
              <button
                onClick={handleDashboardClick}
                className='h-10 w-24 rounded-lg text-white bg-blue-600 hover:bg-blue-500 font-semibold'
              >
                Dashboard
              </button>
            )}
            <button
              onClick={handleLogout}
              className='h-10 w-24 rounded-lg text-white bg-red-600 hover:bg-red-500 font-semibold'
            >
              Logout
            </button>
          </>
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
