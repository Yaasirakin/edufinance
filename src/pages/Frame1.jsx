import React from "react";
import illustration from "../assets/image/illustration.png";
import { Link } from "react-router-dom";

const Frame1 = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-6">

      {/* Illustration */}
      <div className="animate-success">
        <img
          src={illustration}
          alt="Account Created"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Success Text */}
      <div className="text-center mt-8 animate-text">
        <h1 className="text-4xl font-bold text-gray-900">
          Yeah..! Account Created
        </h1>

        <p className="text-gray-500 text-base mt-3 max-w-md">
          Your account has been created successfully.
          You can now start managing your finances with EduFinance.
        </p>
      </div>

      {/* Dashboard Button */}
      <Link
        to="/Dashboard"
        className="flex items-center justify-center w-full max-w-md h-14 rounded-full bg-[#03C987] text-white font-semibold mt-8 hover:bg-[#02b57a] transition-all duration-300 animate-button"
      >
        Go to Dashboard
      </Link>

      <style>{`
        @keyframes successAnimation {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-8deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.08) rotate(3deg);
          }

          70% {
            transform: scale(0.96) rotate(-1deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes successFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-success {
          animation:
            successAnimation 0.8s ease-out forwards,
            successFloat 3s ease-in-out 0.8s infinite;
        }

        .animate-text {
          opacity: 0;
          animation: fadeUp 0.7s ease-out 0.6s forwards;
        }

        .animate-button {
          opacity: 0;
          animation: fadeUp 0.7s ease-out 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default Frame1;