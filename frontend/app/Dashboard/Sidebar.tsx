import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faPlusCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-wide">Freelancer Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer transition duration-200">
            <Link href="/dashboard" className="flex items-center">
              <FontAwesomeIcon icon={faUserEdit} className="mr-3 text-sm" />
              <span className="text-lg">Edit Profile</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer transition duration-200">
            <Link href="/dashboard/freelancer" className="flex items-center">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-3 text-sm" />
              <span className="text-lg">Add Talent</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="bg-red-500 w-full py-2 rounded flex items-center justify-center hover:bg-red-600 transition duration-200">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 text-sm" />
          <span className="text-lg">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;