import React from 'react';
import Sidebar from '../components/user/user-info/sidebar';
import { Outlet } from 'react-router'; 

const ProfileLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-10 pb-10">
      {/* Main box container */}
      <div className="flex bg-white rounded-xl border overflow-hidden w-full max-w-5xl">
        {/* Sidebar */}
        <div className="w-64 bg-white text-white border-r border-gray-200">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
