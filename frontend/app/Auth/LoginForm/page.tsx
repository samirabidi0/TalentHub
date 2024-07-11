"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const Login = () => {

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4132310/pexels-photo-4132310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="bg-gray-300 shadow-md rounded-lg max-w-md w-full px-6 py-8 space-y-6">
        <div className="text-center">
          <img className="mx-auto h-12 w-auto" src="https://www.talentlinkr.fr/wp-content/uploads/2016/04/talentlinkr-logo-white.png" alt="Logo" />
          <h2 className="mt-6 text-3xl font-extrabold text-black">Sign in to your account</h2>
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>

        </form>

        <div className="text-center text-sm">
          <span className="bg-gray-200 px-2">Or continue with</span>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="w-full bg-white border border-gray-300 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-50">
              Google
            </button>
            <button className="w-full bg-white border border-gray-300 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-50">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
