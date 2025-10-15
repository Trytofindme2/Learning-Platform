import React, { useContext, useState } from 'react';
import { userAPI } from '../../../api/API';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router';

const Password = () => 
{


  const { user , dispatch } = useContext(AuthContext)

  const [password , setpassword] = useState('')
  const [repassword , setrepassword] = useState('')
  const navigation = useNavigate();

  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { password , "re-password" : repassword }
      const response = await userAPI.put(`update-password/${user.id}` , data)
      if(response.status === 200){
        dispatch({type : "user-update-info" , payload : response.data.user})
        navigation('/NeuroLingua/home')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[500px] h-[400px] mx-auto bg-white rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
        Change Password
      </h2>

      <form onSubmit={HandleOnSubmit} className="space-y-6">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            New Password
          </label>
          <input
            type="password"
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-1 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Re-enter Password
          </label>
          <input
            type="password"
            onChange={(e) => setrepassword(e.target.value)}
            placeholder="Re-enter new password"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-1 focus:ring-blue-400 outline-none"
          />
        </div>

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
