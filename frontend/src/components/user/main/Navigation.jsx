import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import Form from '../log-in/Form';
import { AuthContext } from '../../../context/AuthContext';
import Dropdown from '../profile/dropdown';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const formOpen = () => setOpen(true);
  const clickOnClose = () => setOpen(false);

  const { user } = useContext(AuthContext);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">NeuroLingua</h1>

          <nav className="hidden md:flex space-x-6">
            <Link to={'home'} className="hover:text-indigo-600">Home</Link>
            <Link to={'courses'} className="hover:text-indigo-600">Courses</Link>
            <Link to={'practice'} className="hover:text-indigo-600">Practice</Link>
            <Link to={'community'} className="hover:text-indigo-600">Community</Link>
            <Link to={'contact'} className="hover:text-indigo-600">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <button
                onClick={formOpen}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Learn Now
              </button>
            ) : (
              <div className="relative flex items-center gap-4">
                <button className="relative p-2 hover:bg-gray-200 rounded-full transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a1 1 0 10-2 0v.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    3
                  </span>
                </button>


                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2  text-white rounded-full "
                  >
                    <img
                      src={
                        user?.avatar
                          ? `${import.meta.env.VITE_USER_IMAGE_URL}profile/${user.avatar}`
                          : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                      }
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>

                  {isDropdownOpen && <Dropdown/>}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={clickOnClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div
            className="relative z-10 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Form closeFun={clickOnClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
