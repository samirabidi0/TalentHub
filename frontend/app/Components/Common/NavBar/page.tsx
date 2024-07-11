import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 bg-black shadow-md'>
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
            <Link href='/Components/Auth/SignUp'>Post A Job</Link>
          </li>
          <li className='cursor-pointer hover:text-green-500 font-semibold'>
            <Link href='/Components/Auth/SignUp'>Post A Talent</Link>
          </li>
          <li className='cursor-pointer hover:text-green-500 font-semibold'>
            <Link href='/'>Category</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button className='h-9 w-20 rounded-lg text-white bg-transparent border border-white hover:text-green-500 hover:border-green-500 font-semibold'>
          <Link href='/Auth/LoginForm'>Login</Link>
        </button>
        <button className='h-10 w-24 rounded-lg text-white bg-green-600 hover:bg-green-500 font-semibold'>
          <Link href='/Components/Auth/SignUp'>Sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
