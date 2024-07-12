"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Set the endpoint based on userType
      const endpoint = userType === "freelancer" 
        ? "http://127.0.0.1:5000/api/freelance/login" 
        : "http://127.0.0.1:5000/api/client/signIn";

      const response = await axios.post(endpoint, {
        email,
        password,
      });

      // Returns a token upon successful login
      const { token, role } = response.data;
      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Redirect based on user type
      if (role === "freelancer") {
        router.push("/Dashboard");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4132310/pexels-photo-4132310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="bg-black shadow-lg rounded-lg max-w-md w-full px-8 py-8 space-y-6 transform transition-transform duration-500 ease-in-out hover:scale-105">
        <div className="text-center">
          <img
            className="mx-auto h-24 w-auto"
            src="https://www.talentlinkr.fr/wp-content/uploads/2016/04/talentlinkr-logo-white.png"
            alt="Logo"
          />
          <h2 className="mt-6 text-4xl font-bold text-white">Sign in to your account</h2>
        </div>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex justify-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="freelancer"
                checked={userType === "freelancer"}
                onChange={() => setUserType("freelancer")}
                className="form-radio"
              />
              <span className="ml-2 text-white">Freelancer</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="client"
                checked={userType === "client"}
                onChange={() => setUserType("client")}
                className="form-radio"
              />
              <span className="ml-2 text-white">Client</span>
            </label>
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
          <button className="text-green-600 hover:text-green-700 font-medium ml-2" onClick={() => {}}>
            Register
          </button>
        </div>

        {error && <p className="text-red-500 text-xs italic text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
