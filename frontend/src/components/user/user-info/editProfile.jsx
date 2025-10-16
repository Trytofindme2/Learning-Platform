import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { userAPI } from '../../../api/API';
import { useNavigate } from 'react-router';

const EditProfile = () => {
  const { user, dispatch } = useContext(AuthContext);

  const [fullname, setFullname] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [file,setfile] = useState(null);
  const [preview,setpreview] = useState(null)


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
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('nickname', nickname);
      formData.append('birthday', birthday ? new Date(birthday).toISOString() : '');
      if (file) formData.set('photo', file); 

      const response = await userAPI.patch(`addUserInfo/${user.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.status === 200) {
        dispatch({ type: 'user-update-info', payload: response.data.user });
        navigation('/NeuroLingua/updateInfo/editPassword');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) return <p>Loading or not logged in ...</p>;

  const upload = (e) => {
    let file = e.target.files[0]
    setfile(file)

    let fileReader = new FileReader;
    fileReader.onload = (e) => {
      setpreview(e.target.result);
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className="max-w-[700px] mx-auto bg-gradient-to-br from-white to-blue-50  rounded-2xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Edit Profile
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-8 gap-6">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <img
              src={
                preview ||
                (user?.avatar
                  ? `${import.meta.env.VITE_USER_IMAGE_URL}profile/${user.avatar}`
                  : 'https://cdn-icons-png.flaticon.com/512/149/149071.png')
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <label
              htmlFor="photo"
              className="absolute bottom-1 right-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] px-2 py-1 rounded-full cursor-pointer shadow-sm"
            >
              Edit
            </label>
            <input onChange={upload} id="photo" type="file" accept="image/*" className="hidden" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">{user.email}</p>
            <p className="text-xs text-gray-500 mt-1">Member since 2023</p>
          </div>
        </div>

        <div className="flex flex-col sm:items-end gap-2">
          <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
            {user.premium}
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold shadow-sm">
            ⭐ {user.points || 0} Points
          </span>
        </div>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-lg p-3 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1">Nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Nickname"
            className="w-full border border-gray-200 rounded-lg p-3 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1">Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            placeholder="Email"
            className="w-full border border-gray-100 rounded-lg p-3 text-sm bg-gray-50 cursor-not-allowed text-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1">Birthday</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="sm:col-span-2 text-center mt-6">
          <button
            type="button"
            onClick={handleOnSave}
            className="bg-blue-600 text-white text-sm px-6 py-2.5 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
          >
             Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
