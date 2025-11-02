import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/admin/dashboard/SideBar";
import Navbar from "../components/admin/dashboard/Nav";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
