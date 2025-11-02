import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {

    const { user } = useContext(AuthContext)

    if(!user){
        return <div>loading & please sign in again</div>
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-1 container mx-auto px-4 py-10">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl border border-gray-200 p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-8">
                    <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="User Avatar"
                    className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover mb-4 sm:mb-0"
                    />

                    <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-semibold text-gray-800">{user.fullname}</h2>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                    <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-6">
                        <div>
                        <p className="text-sm text-gray-600">Total Points</p>
                        <p className="text-2xl font-bold text-indigo-600">4,520</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-600">Rank in Spanish</p>
                        <p className="text-2xl font-bold text-indigo-600">#7</p>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center sm:justify-start gap-2">
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                        Gold Tier
                        </span>
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {user.premium}
                        </span>
                    </div>
                    </div>
                </div>
                </div>

                <section className="max-w-4xl mx-auto mt-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Language Progress</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Spanish</h4>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-indigo-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500">80% completed</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">French</h4>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500">45% completed</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Japanese</h4>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-pink-500 h-3 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500">25% completed</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">German</h4>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500">60% completed</p>
                    </div>
                </div>
                </section>
            </main>
        </div>
  );
};

export default Profile;
