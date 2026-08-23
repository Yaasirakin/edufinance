import React from "react";
import image3 from "../assets/image/image3.png";
import { Link } from "react-router-dom";

const Modal = ({ isOpen = true, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

        {/* MODAL CONTAINER */}
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">

          {/* ANIMATED ILLUSTRATION */}
          <div className="flex justify-center mb-6">

            <div className="w-36 animate-[shake_1.5s_ease-in-out_infinite]">

              <img
                src={image3}
                alt="Password Changed"
                className="w-full h-auto object-contain"
              />

            </div>

          </div>


          {/* TITLE */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Password Changed
          </h2>


          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500 leading-relaxed mb-8 px-4">
            Commodo gravida eget ultricies sed. Commodo, tellus duis eros
            pellentesque.
          </p>


          {/* BACK TO HOME */}
          <Link to="/" onClick={onClose}>

            <button
              type="button"
              className="
                w-full
                h-12
                rounded-full
                bg-[#03C987]
                text-white
                font-semibold
                hover:bg-[#02b57a]
                transition-colors
                duration-300
              "
            >
              Back to Home
            </button>

          </Link>

        </div>

      </div>


      {/* ANIMATION */}
      <style>
        {`
          @keyframes shake {
            0%, 100% {
              transform: rotate(0deg);
            }

            25% {
              transform: rotate(-5deg);
            }

            50% {
              transform: rotate(5deg);
            }

            75% {
              transform: rotate(-3deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default Modal;