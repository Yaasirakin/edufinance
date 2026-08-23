import React from "react";
import image2 from "../assets/image/image2.png";
import edulogo1 from "../assets/image/edulogo1.png";
import Vector from "../assets/image/Vector.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* LEFT SIDE - Hero Section */}
      <div className="hidden lg:block w-1/2 relative min-h-screen">
        <img
          src={image2}
          alt="Student"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative h-full flex flex-col justify-between p-12">
          {/* Logo */}
          <img
            src={edulogo1}
            alt="EduFinance Logo"
            className="w-40"
          />

          {/* Bottom Text */}
          <div className="pb-10">
            <h1 className="text-white text-5xl font-bold leading-tight max-w-lg">
              Empowering Students with Smart, Financial Management Solutions
            </h1>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Sign In Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Sign in
          </h1>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-[#03C987]"
              />
            </div>

            {/* Password */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-12 border border-gray-300 rounded-lg px-4 pr-12 focus:outline-none focus:border-[#03C987]"
                />

                {/* Toggle Eye Icon */}
                <img
                  src={Vector}
                  alt="Toggle password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 cursor-pointer"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mt-3">
              <Link
                to="/forgetpassword"
                className="text-sm font-medium text-[#03C987] hover:underline"
              > Forgot password?
              </Link>
            </div>

            {/* Button */}
            <Link to="/">
            <button
              type="submit"
              className="w-full h-12 rounded-full bg-[#03C987] text-white font-semibold mt-8 hover:bg-[#02b57a] transition-colors duration-300"
            >
              Sign in
            </button></Link>
          </form>

          {/* Footer Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="ml-2 font-semibold text-black cursor-pointer hover:underline"
            >
              Sign up
            </Link>
          </p>

          {/* reCAPTCHA Notice */}
          <p className="text-center text-xs text-gray-400 mt-8">
            Protected by reCAPTCHA and subject to the Privacy Policy and Terms
            of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;