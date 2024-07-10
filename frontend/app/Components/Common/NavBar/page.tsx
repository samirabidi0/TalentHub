import React from 'react';
import Link from 'next/link';
import { FcAddDatabase } from "react-icons/fc";


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-2 bg-black shadow-md'>
      <Link href='/'>
      <div className="logo">
        <img src="https://www.talentlinkr.fr/wp-content/uploads/2016/04/talentlinkr-logo-white.png" className='w-40 ml-4' alt="Logo" />
      </div>
      </Link>

      <div className="nav-menu flex p-2 ml-48">
        <ul className='flex items-center justify-between gap-5 text-gray-700'>
          <li className='cursor-pointer hover:text-green-600 font-semibold'> <Link href='/'>Home </Link>
         </li>
          <li className='cursor-pointer hover:text-green-600 font-semibold'> <Link href='/Componets/Auth/SingUp'> add Talent </Link></li>
          <li className='cursor-pointer hover:text-green-600 font-semibold'> <Link href='/'>Category </Link></li>
        </ul>
      </div>
      <div className="login ml-28">
        <button className='btn h-9 w-16 rounded-xl text-white hover:text-green-600 font-semibold ml-72'><Link href='/Componets/Auth/LoginForm'>Login </Link></button>
      </div>
      <div className="sign-up">
        <button className='btn bg-green-600 text-white h-10 w-20 rounded-xl font-semibold'><Link href='/Componets/Auth/SingUp'>Sign Up </Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
