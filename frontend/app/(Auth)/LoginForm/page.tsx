"use client"

import React from "react";

const Login = () => {

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4132310/pexels-photo-4132310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="bg-black shadow-lg rounded-lg max-w-md w-full px-8 py-8 space-y-6 transform transition-transform duration-500 ease-in-out hover:scale-105">
        <div className="text-center">
          <img className="mx-auto h-24 w-auto" src="https://www.talentlinkr.fr/wp-content/uploads/2016/04/talentlinkr-logo-white.png" alt="Logo" />
          <h2 className="mt-6 text-4xl font-bold text-white">Sign in to your account</h2>
        </div>
        <form className="space-y-4">
          <div className="rounded-md shadow-sm space-y-4"> 
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="bg-gray-200 px-2">Don't have an account?</span>
          <button 
            className="text-green-600 hover:text-green-700 font-medium ml-2"
            onClick={()=>{}}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
