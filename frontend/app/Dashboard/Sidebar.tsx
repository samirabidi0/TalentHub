import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPlusSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-56 min-h-screen flex flex-col shadow-lg">
      <div className="p-6 bg-gray-800 animate-pulse">
        <h1 className="text-2xl font-bold tracking-wide">Freelancer Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-800 transition duration-300 ease-in-out transform hover:translate-x-1">
            <Link href="/Dashboard/EditProfile">
              <div className="flex items-center text-lg text-gray-200 hover:text-white group">
                <FontAwesomeIcon icon={faUserCircle} className="text-gray-400 mr-2 text-sm group-hover:animate-bounce h-8" />
                <span className="group-hover:underline">Edit Profile</span>
              </div>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-800 transition duration-300 ease-in-out transform hover:translate-x-1">
            <Link href="/Dashboard/AddTalent">
              <div className="flex items-center text-lg text-gray-200 hover:text-white group">
                <FontAwesomeIcon icon={faPlusSquare} className="text-gray-400 mr-2 text-sm group-hover:animate-bounce h-8" />
                <span className="group-hover:underline">Add Talent</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 mt-auto">
        <Link href="/">
          <div className="flex items-center bg-red-500 hover:bg-red-600 text-lg text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-sm animate-spin-slow h-10 mr 2" />
            <span>Log Out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
