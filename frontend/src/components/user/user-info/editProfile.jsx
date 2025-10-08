import React from 'react';

const EditProfile = () => {
  return (
    <div className="w-[700px] h-[500px] mx-auto bg-white rounded-xl p-6">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Edit Profile
      </h2>

      {/* Profile Picture + User Role + Points */}
      <div className="flex items-center mb-6 gap-6">
        {/* Profile picture */}
        <div className="relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700 transition">
            Edit
          </button>
        </div>

        {/* User Role Badge */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-gray-700">User Role</span>
          <span className="mt-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
            Free
          </span>
        </div>

        {/* Points */}
        <div className="ml-auto">
          <span className="text-sm text-yellow-700 bg-yellow-100 px-3 py-1 rounded-lg font-semibold">
            ⭐ 1280 Points
          </span>
        </div>
      </div>

      {/* Nickname + ID */}
      <div className="text-center mb-6">
        <p className="text-md font-semibold text-gray-800">@nickname</p>
        <p className="text-gray-500 text-xs">User ID: STU-2045</p>
      </div>

      {/* Form Fields in 2 columns x 3 rows */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Nickname</label>
          <input
            type="text"
            placeholder="Nickname"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Birthday</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Bio</label>
          <textarea
            placeholder="Bio"
            rows="3"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none resize-none"
          ></textarea>
        </div>

        {/* Save Button */}
        <div className="sm:col-span-2 text-center mt-4">
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
