import React from 'react';

const SearchBar = ({ searchValueFun, selectedValueFun }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl p-4 mt-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">NeuroLingua’s Courses</h2>
        <p className="text-gray-600 text-sm mt-1 max-w-xl mx-auto">
          Join the wave of learners unlocking global communication with{' '}
          <span className="font-semibold text-blue-600">NeuroLingua</span>. Start learning smarter today!
        </p>
      </div>

      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search courses..."
          onChange={(e) => searchValueFun(e.target.value)}
          className="flex-1 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <select
          onChange={(e) => selectedValueFun(e.target.value)}
          className="border-l border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option value="All">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Free">Free</option>
          <option value="Premium">Premium</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
