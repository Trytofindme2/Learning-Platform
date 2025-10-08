import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { userAPI } from '../../../api/API'
import { useNavigate } from "react-router";


const Form = ({ closeFun }) => {

  const navigation = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { data } = await userAPI.post("google", {
        token: credentialResponse.credential,
      });
      localStorage.setItem("token", data.token);
      navigation('/NeuroLingua/updateInfo/editProfile')
      closeFun(true)
    } catch (err) {
      console.error("Google login failed", err);
    }
  };

  const handleGoogleError = () => {
    console.error("Google login failed");
  };

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-lg bg-white p-6 shadow-lg">
      <button
        onClick={closeFun}
        type="button"
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
      >
        ✕
      </button>

      <h2 className="text-center text-2xl font-bold text-gray-800">
        Welcome Back
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Please sign in to continue
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        {/* Forgot password */}
        <div className="text-right text-sm">
          <a href="#" className="text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Sign In button */}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition"
        >
          Sign In
        </button>
      </form>

      {/* OR Divider */}
      <div className="my-6 flex items-center">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-3 text-sm text-gray-500">New to NeuroLingua?</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Google Sign-In */}
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        width="100%"
        useOneTap
      />
    </div>
  );
};

export default Form;
