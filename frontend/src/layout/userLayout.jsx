import React from 'react';
import Navigation from '../components/user/main/Navigation';
import { Outlet } from 'react-router';

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
        <Navigation />
      </header>

      <main className="flex-1 w-full   ">
        <div className="max-w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default UserLayout;
