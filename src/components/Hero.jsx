import React from "react";
import edulogo from "../assets/image/edulogo.png";
import image1 from "../assets/image/image1.png";
import frame1 from "../assets/image/frame1.png";
import coins from "../assets/image/coins.png";
import Icon1 from "../assets/image/Icon1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-10 overflow-hidden">
      {/* Logo */}
      <img
        src={edulogo}
        alt="EduFinance Logo"
        className="w-36 md:w-40 mb-12"
      />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            AI-Powered Financial Management For Foreign Student.
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-8">
            EduFinance AI uses AI to provide students with personalized
            budgeting advice, real-time expense tracking, and financial tips.
            Take control of your finances and secure a prosperous future today.
          </p>

          <div className="flex justify-center lg:justify-start gap-5 mt-8">
            <Link to="/signup">
              <button className="bg-[#03C987] text-white px-8 py-3 rounded-full hover:bg-[#02b57a] transition-colors duration-300">
                Get Started
              </button>
            </Link>

          <Link to="/signin">
            <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100">
              Login
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center relative">
          {/* Green Background */}
          <div className="absolute top-4 right-0 w-[420px] h-[520px] bg-[] rounded-lg"></div>

          {/* Main Image */}
          <img
            src={image1}
            alt=""
            className="relative z-10 w-[420px] bg-[#39E29D] "
          />

          {/* Dashboard */}
          <img
            src={frame1}
            alt=""
            className="absolute bottom-10 left-0 w-60 z-20 shadow-lg"
          />

          {/* Coins */}
          <img
            src={coins}
            alt=""
            className="absolute top-1/2 -left-8 w-20 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;