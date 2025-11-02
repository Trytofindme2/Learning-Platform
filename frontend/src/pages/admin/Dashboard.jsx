import React from 'react'

const Dashboard = () => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-3xl font-bold text-indigo-700 mt-2">1,245</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">Active Courses</p>
          <h2 className="text-3xl font-bold text-indigo-700 mt-2">52</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">Monthly Revenue</p>
          <h2 className="text-3xl font-bold text-indigo-700 mt-2">$4,860</h2>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold text-gray-700">Recent Users</h3>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-500">
            Add User
          </button>
        </div>
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-3 px-4">Emma Johnson</td>
              <td className="py-3 px-4">emma@neurolingua.ai</td>
              <td className="py-3 px-4">Student</td>
              <td className="py-3 px-4 text-green-600 font-medium">Active</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">David Smith</td>
              <td className="py-3 px-4">david@neurolingua.ai</td>
              <td className="py-3 px-4">Instructor</td>
              <td className="py-3 px-4 text-yellow-600 font-medium">Pending</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">Sophia Lee</td>
              <td className="py-3 px-4">sophia@neurolingua.ai</td>
              <td className="py-3 px-4">Admin</td>
              <td className="py-3 px-4 text-green-600 font-medium">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;
