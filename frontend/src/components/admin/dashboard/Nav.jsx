import React from 'react'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow">
      <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="Admin"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

