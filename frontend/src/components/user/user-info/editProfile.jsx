import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { userAPI } from '../../../api/API';
import { useNavigate } from 'react-router';

const EditProfile = () => {
  const { user, dispatch } = useContext(AuthContext);

  const [fullname, setFullname] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthday, setBirthday] = useState('');

  const navigation = useNavigate();

  useEffect(() => {
    if (user) {
      setFullname(user.fullname || '');
      setNickname(user.nickname || '');
      setBirthday(user.birthday ? user.birthday.slice(0, 10) : '');
    }
  }, [user]);

  const handleOnSave = async (e) => {
    e.preventDefault();
    try {
      const data = {
        fullname,
        nickname,
        birthday: birthday ? new Date(birthday).toISOString() : null,
      };

      const response = await userAPI.patch(`addUserInfo/${user.id}`, data);

      if (response.status === 200) {
        dispatch({ type: 'user-update-info', payload: response.data.user });
        navigation('/NeuroLingua/updateInfo/editPassword')
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) return <p>Loading or not logged in ...</p>;

  return (
    <div className="w-[700px] h-auto mx-auto bg-white rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Edit Profile</h2>

      <div className="flex items-center mb-6 gap-6">
        <div className="relative">
          <img
            src={user.avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
          />
        </div>

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-gray-700">User Type</span>
          <span className="mt-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
            {user.premium}
          </span>
        </div>

        <div className="ml-auto">
          <span className="text-sm text-yellow-700 bg-yellow-100 px-3 py-1 rounded-lg font-semibold">
            ⭐ {user.points || 0} Points
          </span>
        </div>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Nickname"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Birthday</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-xs focus:border-blue-500 outline-none"
          />
        </div>

        <div className="sm:col-span-2 text-center mt-4">
          <button
            type="button"
            onClick={handleOnSave}
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
