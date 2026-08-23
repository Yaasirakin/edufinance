import React from "react";
import image2 from "../assets/image/image2.png";
import edulogo1 from "../assets/image/edulogo1.png";
import Vector from "../assets/image/Vector.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:block w-1/2 relative">

        <img
          src={image2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative h-full flex flex-col justify-between p-10">

          {/* Logo */}
          <img
            src={edulogo1}
            alt=""
            className="w-40"
          />

          {/* Bottom Text */}
          <div className="pb-10">
            <h1 className="text-white text-5xl font-bold leading-tight max-w-md">
              Empowering Students with Smart Financial Management Solutions
            </h1>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-12">

        <div className="w-full max-w-xl">

          <h1 className="text-4xl font-bold text-gray-900 mb-10">
            Sign up
          </h1>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                First Name
              </label>

              <input
                type="text"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-[#03C987]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Last Name
              </label>

              <input
                type="text"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-[#03C987]"
              />
            </div>

          </div>

          {/* Email */}
          <div className="mt-6">

            <label className="block text-sm text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-[#03C987]"
            />

          </div>

          {/* Password */}
          <div className="mt-6">

            <label className="block text-sm text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type="password"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 pr-12 focus:outline-none focus:border-[#03C987]"
              />

              {/* Eye Icon */}
              <img
                src={Vector}
                alt=""
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 cursor-pointer"
              />

            </div>

          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 mt-8">

            <input
              type="checkbox"
              className="mt-1"
            />

            <p className="text-sm text-gray-500 leading-6">
              By clicking Create account, I agree that I have read and accepted
              the Terms of Use and Privacy Policy.
            </p>

          </div>

          {/* Button */}
          <Link
            to="/frame1"
            className="flex items-center justify-center w-full h-14 rounded-full bg-[#03C987] text-white font-semibold mt-8 hover:bg-[#02b57a] duration-300"
          >
            Create Account
          </Link>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            I have an account?{" "}
            <Link
              to="/signin"
              className="ml-2 font-semibold text-black hover:underline cursor-pointer"
            >
              Sign in
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;