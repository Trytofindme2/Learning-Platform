import React, { useState } from 'react'
import { Link } from 'react-router';
import Form from '../log-in/Form'

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const formOpen = () => setOpen(true);
  const clickOnClose = () => setOpen(false);

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
          <button
            onClick={formOpen}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Learn Now
          </button>
        </div>
      </header>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={clickOnClose} // Close when clicking background
        >
          {/* Overlay with blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          {/* Modal content */}
          <div
            className="relative z-10 w-full max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <Form closeFun={clickOnClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
