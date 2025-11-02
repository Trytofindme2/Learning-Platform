import React, { useContext } from 'react';
import { userAPI } from '../../../api/API';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi'; // Feather icons

const Dropdown = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleOnClicked = async () => {
    try {
      const response = await userAPI.post('log-out');
      if (response.status === 200) {
        dispatch({ type: 'user-log-out' });
        console.log(response.data);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <ul className="py-2 text-gray-700">
        <li>
          <Link
            to={`profile/${user.id}`}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            <FiUser className="text-gray-500 text-lg" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to={'updateInfo/editprofile'}
            href="#settings"
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            <FiSettings className="text-gray-500 text-lg" />
            <span>Settings</span>
          </Link>
        </li>

        <hr className="my-1" />

        <li>
          <button
            onClick={handleOnClicked}
            className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
          >
            <FiLogOut className="text-red-600 text-lg" />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
