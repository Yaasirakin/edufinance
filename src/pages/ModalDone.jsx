import React from "react";
import { useNavigate } from "react-router-dom";
import Illustration from "../assets/image/Illustration.png";

const ModalDone = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#242424] flex items-center justify-center px-5 py-6">

      {/* MODAL */}
      <div
        className="
          w-full
          max-w-[620px]
          bg-white
          rounded-[24px]
          px-6
          py-8
          md:px-10
          md:py-10
          flex
          flex-col
          animate-[modalIn_0.6s_ease-out]
        "
      >

        {/* SUCCESS IMAGE */}
        <div className="flex justify-center items-center mb-6">

          <img
            src={Illustration}
            alt="Profile updated"
            className="
              w-[180px]
              h-[180px]
              md:w-[210px]
              md:h-[210px]
              object-contain
              animate-[successPop_0.8s_ease-out]
            "
          />

        </div>


        {/* MESSAGE */}
        <div
          className="
            text-center
            mb-8
            opacity-0
            animate-[fadeUp_0.6s_ease-out_0.4s_forwards]
          "
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Profile Updated
          </h1>
        </div>


        {/* DONE BUTTON */}
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="
            w-full
            bg-[#263847]
            hover:bg-[#1f303c]
            text-white
            text-base
            md:text-lg
            font-semibold
            rounded-full
            py-4
            transition-all
            duration-300
            hover:scale-[1.01]
            opacity-0
            animate-[fadeUp_0.6s_ease-out_0.7s_forwards]
          "
        >
          Done
        </button>

      </div>


      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes modalIn {
            0% {
              opacity: 0;
              transform: scale(0.92) translateY(20px);
            }

            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes successPop {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }

            70% {
              opacity: 1;
              transform: scale(1.08);
            }

            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(15px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
};

export default ModalDone;