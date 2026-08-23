import React from "react";
import image2 from "../assets/image/image2.png";
import edulogo1 from "../assets/image/edulogo1.png";
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  return (
    <>
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

      {/* RIGHT SIDE - Forgot Password Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Forgot password?
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            No worries! Just enter your email and we'll send you a reset password link.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="lindarose@gmail.com"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-[#03C987]"
              />
            </div>

            {/* Submit Button */}
          <Link to="/Newpassword">
            <button
              type="submit"
              className="w-full bg-[#03C987] text-white h-12 rounded-lg mt-6 hover:bg-[#02b57a] transition-colors duration-300"
            >
              Send Reset Link
            </button>
          </Link>
          </form>

          {/* Footer Navigation Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="ml-2 font-semibold text-black cursor-pointer hover:underline">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Forgetpassword;