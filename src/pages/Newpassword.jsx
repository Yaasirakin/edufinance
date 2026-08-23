import React, { useState } from "react";
import image2 from "../assets/image/image2.png";
import edulogo1 from "../assets/image/edulogo1.png";
import Vector from "../assets/image/Vector.png";
import { Link } from "react-router-dom";
const Newpassword = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

      {/* RIGHT SIDE - New Password Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            New password
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Please create a new password that you don't use on any other site.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* New Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full h-12 border border-gray-300 rounded-lg px-4 pr-12 focus:outline-none focus:border-[#03C987]"
                />
                <img
                  src={Vector}
                  alt="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 cursor-pointer opacity-60 hover:opacity-100"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                • minimum 8 characters
              </p>
            </div>

            {/* Confirm Password Field */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  className="w-full h-12 border border-gray-300 rounded-lg px-4 pr-12 focus:outline-none focus:border-[#03C987]"
                />
                <img
                  src={Vector}
                  alt="Toggle confirm password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 cursor-pointer opacity-60 hover:opacity-100"
                />
              </div>
            </div>

            {/* Submit Button */}
          <Link to="/Modal">
           <button
              type="submit"
              className="w-full bg-[#03C987] text-white h-12 rounded-lg mt-6 hover:bg-[#02b57a] transition-colors duration-300"
            >
              Set Password
            </button>
          </Link>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}
export default Newpassword