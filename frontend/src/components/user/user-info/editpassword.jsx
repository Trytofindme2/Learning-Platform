import React from 'react';

const Password = () => {
  return (
    <div className="w-[500px] h-[400px] mx-auto bg-white rounded-xl p-6">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
        Change Password
      </h2>

      {/* Form */}
      <form className="space-y-6">
        {/* New Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-1 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Re-enter Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Re-enter Password
          </label>
          <input
            type="password"
            placeholder="Re-enter new password"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-1 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 text-sm rounded-md hover:bg-blue-700 transition"
          >
            Save Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
