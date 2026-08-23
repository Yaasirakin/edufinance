import React, { useState } from "react";

import user from "../assets/image/user.png";
import fileicon from "../assets/image/fileicon.png";
import load from "../assets/image/load.png";
import robot from "../assets/image/robot.png";
import sendicon from "../assets/image/sendicon.png";
import front from "../assets/image/front.png";
import like from "../assets/image/like.png";
import dislike from "../assets/image/dislike.png";
import edit from "../assets/image/edit.png";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Message:", message);
    setMessage("");
  };

  /* ==================================================
     FULL CHAT PAGE
  ================================================== */
  if (showChat) {
    return (
      <div className="min-h-screen bg-white px-8 py-7">

        {/* TOP HEADER */}
        <div className="mb-7 flex items-start justify-between">

          <div>
            <h1 className="text-2xl font-semibold text-gray-700">
              Hello, Linda
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Keep track of your financial plan
            </p>
          </div>

          <div className="flex items-center gap-6">

            <button
              type="button"
              className="flex items-center gap-1 text-gray-500"
            >
              <span className="text-sm font-medium">€</span>
              <span className="text-xs">⌄</span>
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03C987]/10"
            >
              <img
                src={user}
                alt="Profile"
                className="h-7 w-7 object-contain"
              />
            </button>

          </div>

        </div>


        {/* AI CHAT CARD */}
        <div className="w-full overflow-hidden rounded-xl border border-[#03C987] bg-white">

          {/* GREEN HEADER */}
          <div className="flex h-[58px] items-center justify-between bg-[#03C987] px-5">

            <div className="flex items-center gap-2">

              <img
                src={robot}
                alt="AI Assistant"
                className="h-5 w-5 object-contain"
              />

              <h2 className="text-sm font-medium text-white">
                AI Assistant
              </h2>

            </div>


            {/* BACK / FRONT ICON */}
            <button
              type="button"
              onClick={() => setShowChat(false)}
              className="flex h-7 w-7 items-center justify-center rounded-md bg-white/80 transition hover:bg-white"
            >
              <img
                src={front}
                alt="Back"
                className="h-4 w-4 object-contain"
              />
            </button>

          </div>


          {/* CHAT BODY */}
          <div className="min-h-[650px] flex flex-col bg-white">

            {/* FIRST MESSAGE */}
            <div className="px-10 pt-10">

              <div className="mx-auto w-full max-w-3xl">

                <p className="text-sm leading-6 text-gray-600 md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Sapien integer libero
                  non enim eleifend egestas urna. Lacus cras faucibus porttitor
                  condimentum fermentum quis tristique id. Quisque amet ornare
                  aliquam ut pellentesque risus tortor ullamcorper. Nulla
                  elementum turpis egestas lectus felis nec ultrices. Pretium
                  natoque condimentum ipsum sed egestas et mattis tellus egestas.
                </p>


                {/* EDIT */}
                <div className="mt-8 flex justify-end">

                  <button type="button">
                    <img
                      src={edit}
                      alt="Edit"
                      className="h-5 w-5 object-contain opacity-70"
                    />
                  </button>

                </div>

              </div>

            </div>


            {/* DOTS */}
            <div className="px-10 py-8 text-xl text-gray-400">
              • •
            </div>


            {/* SECOND MESSAGE */}
            <div className="px-10">

              <div className="mx-auto w-full max-w-3xl">

                <p className="text-sm leading-6 text-gray-600 md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Sapien integer libero
                  non enim eleifend egestas urna. Lacus cras faucibus porttitor
                  condimentum fermentum quis tristique id. Quisque amet ornare
                  aliquam ut pellentesque risus tortor ullamcorper. Nulla
                  elementum turpis egestas lectus felis nec ultrices. Pretium
                  natoque condimentum ipsum sed egestas et mattis tellus egestas.
                </p>


                {/* ACTIONS */}
                <div className="mt-8 flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <button type="button">
                      <img
                        src={like}
                        alt="Like"
                        className="h-5 w-5 object-contain"
                      />
                    </button>

                    <button type="button">
                      <img
                        src={dislike}
                        alt="Dislike"
                        className="h-5 w-5 object-contain"
                      />
                    </button>

                    <button type="button">
                      <img
                        src={edit}
                        alt="Edit"
                        className="h-5 w-5 object-contain"
                      />
                    </button>

                  </div>


                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <span className="text-base">
                      ⟳
                    </span>

                    Regenerate
                  </button>

                </div>

              </div>

            </div>


            {/* MESSAGE INPUT */}
            <div className="mt-auto px-10 py-6">

              <div className="mx-auto flex w-full max-w-3xl items-center rounded-xl border border-gray-200 bg-white px-4 py-2">

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Send your message..."
                  className="
                    flex-1
                    bg-transparent
                    px-2
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    placeholder:text-gray-300
                  "
                />


                <button
                  type="button"
                  onClick={handleSend}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-md
                    bg-[#03C987]
                    transition
                    hover:bg-[#02b57a]
                  "
                >
                  <img
                    src={sendicon}
                    alt="Send"
                    className="h-5 w-5 object-contain"
                  />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }


  /* ==================================================
     ORIGINAL AI ASSISTANT PAGE
  ================================================== */

  return (
    <div className="min-h-screen bg-white px-8 py-7">

      {/* TOP HEADER */}
      <div className="mb-7 flex items-start justify-between">

        {/* GREETING */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">
            Hello, Linda
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Keep track of your financial plan
          </p>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* CURRENCY */}
          <button
            type="button"
            className="flex items-center gap-1 text-gray-500"
          >
            <span className="text-sm font-medium">
              €
            </span>

            <span className="text-xs">
              ⌄
            </span>
          </button>


          {/* PROFILE */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03C987]/10"
          >
            <img
              src={user}
              alt="Profile"
              className="h-7 w-7 object-contain"
            />
          </button>

        </div>

      </div>


      {/* AI ASSISTANT CARD */}
      <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white">

        {/* GREEN HEADER */}
        <div className="flex h-[72px] items-center justify-between bg-[#03C987] px-6">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">

              <img
                src={robot}
                alt="AI Assistant"
                className="h-5 w-5 object-contain"
              />

            </div>

            <h2 className="text-lg font-medium text-white">
              AI Assistant
            </h2>

          </div>


          {/* FRONT BUTTON */}
          <button
            type="button"
            onClick={() => setShowChat(true)}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              bg-white/80
              transition
              hover:bg-white
            "
          >
            <img
              src={front}
              alt="Open AI Assistant"
              className="h-4 w-4 object-contain"
            />
          </button>

        </div>


        {/* CHAT AREA */}
        <div className="relative min-h-[470px] px-10 py-9">

          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center">

            <h3 className="text-[24px] font-semibold text-gray-700">
              Initiate a New Chat
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Unlock AI's Potential for Smarter Financial Management
            </p>


            {/* SUGGESTIONS */}
            <div className="mt-14 grid w-full max-w-[900px] grid-cols-3 gap-12">

              {/* OPTION 1 */}
              <button
                type="button"
                className="group flex items-start gap-4 text-left"
                onClick={() =>
                  setMessage(
                    "Optimize your spending with personalized insights"
                  )
                }
              >

                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center">

                  <img
                    src={load}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />

                </div>

                <p className="text-sm font-medium leading-5 text-gray-500 transition group-hover:text-[#03C987]">
                  Optimize your spending with
                  <br />
                  personalized insights
                </p>

              </button>


              {/* OPTION 2 */}
              <button
                type="button"
                className="group flex items-start gap-4 text-left"
                onClick={() =>
                  setMessage("Create a customized budget today!")
                }
              >

                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center">

                  <img
                    src={fileicon}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />

                </div>

                <p className="text-sm font-medium leading-5 text-gray-500 transition group-hover:text-[#03C987]">
                  Create a customized budget today!
                </p>

              </button>


              {/* OPTION 3 */}
              <button
                type="button"
                className="group flex items-start gap-4 text-left"
                onClick={() =>
                  setMessage(
                    "Get personalized financial insights and recommendations"
                  )
                }
              >

                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center">

                  <img
                    src={user}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />

                </div>

                <p className="text-sm font-medium leading-5 text-gray-500 transition group-hover:text-[#03C987]">
                  Get personalized financial insights
                  <br />
                  and recommendations.
                </p>

              </button>

            </div>

          </div>


          {/* MESSAGE INPUT */}
          <div className="absolute bottom-7 left-10 right-10">

            <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Send your message..."
                className="
                  flex-1
                  bg-transparent
                  px-2
                  py-3
                  text-sm
                  text-gray-700
                  outline-none
                  placeholder:text-gray-300
                "
              />

              <button
                type="button"
                onClick={handleSend}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-md
                  bg-[#03C987]
                  transition
                  hover:bg-[#02b57a]
                "
              >

                <img
                  src={sendicon}
                  alt="Send"
                  className="h-5 w-5 object-contain"
                />

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AIAssistant;