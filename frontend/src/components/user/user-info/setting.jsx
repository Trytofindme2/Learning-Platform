import React, { useState, useEffect } from 'react';

const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply or remove dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="w-[400px] mx-auto p-6 rounded-lg">
      <h2 className="text-xl font-bold text-black mb-10 text-center">
        Settings
      </h2>

      {/* Dark mode toggle */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm font-mediumt text-black">
          Dark Mode
        </span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-7 flex items-center rounded-full border ${
            darkMode
              ? 'bg-blue-600 border-blue-600 justify-end'
              : 'bg-gray-300 border-gray-300 justify-start'
          }`}
        >
          <span className="w-5 h-5 bg-white rounded-full m-1"></span>
        </button>
      </div>

      {/* Logout button */}
      <div className="text-center">
        <button className="bg-red-600 text-white text-sm px-5 py-2 rounded-md hover:bg-red-700 transition-all">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Setting;
