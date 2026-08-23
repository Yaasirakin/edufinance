import React, { useState } from "react";

import usericon from "../assets/image/usericon.png";
import helpicon from "../assets/image/helpicon.png";
import notification from "../assets/image/notification.png";
import select from "../assets/image/select.png";
import dateicon from "../assets/image/dateicon.png";
import searchicon from "../assets/image/searchicon.png";
import User from "../assets/image/User.png";
import receipt from "../assets/image/receipt.png";

const Settings = () => {
  const [activeMenu, setActiveMenu] = useState("Edit Profile");
  const [activeTab, setActiveTab] = useState("Personal Information");

  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  // ===============================
  // ACCOUNT SETTINGS STATES
  // ===============================
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [accountEmail, setAccountEmail] = useState("max@gmail.com");
  const [emailPassword, setEmailPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [language, setLanguage] = useState("English (US)");
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  // ===============================
  // SETTINGS SIDEBAR
  // ===============================
  const menuItems = [
    {
      label: "Edit Profile",
      icon: usericon,
    },
    {
      label: "Account Settings",
      icon: receipt,
    },
    {
      label: "Notifications",
      icon: notification,
    },
    {
      label: "Helpdesk",
      icon: helpicon,
    },
  ];

  // ===============================
  // PROFILE TABS
  // ===============================
  const tabs = [
    "Personal Information",
    "Educational Information",
    "Work Information",
  ];

  return (
    <div className="min-h-screen bg-[#F1F3F5] px-6 py-6 md:px-10 lg:px-14 text-gray-700">

      {/* ==================================================
          TOP HEADER
      ================================================== */}
      <div className="flex items-start justify-between mb-8">

        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Hello, Linda
          </h1>

          <p className="text-sm text-gray-400 mt-1">
            Keep track of your financial plan
          </p>
        </div>

        <div className="flex items-center gap-5">

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
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03C987]/10">

            <img
              src={User}
              alt="Profile"
              className="h-8 w-8 object-contain"
            />

          </div>

        </div>

      </div>


      {/* ==================================================
          SETTINGS WHITE CARD
      ================================================== */}
      <div className="bg-white rounded-xl p-6">

        {/* ==================================================
            SETTINGS CONTENT
        ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr] gap-8">


          {/* ==================================================
              INTERNAL SETTINGS SIDEBAR
          ================================================== */}
          <div className="border-r border-gray-100 pr-5">

            <div className="space-y-2">

              {menuItems.map((item) => {

                const isActive = activeMenu === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveMenu(item.label)}
                    className={`
                      w-full
                      flex
                      items-center
                      gap-3
                      px-3
                      py-3
                      rounded-lg
                      text-left
                      text-sm
                      transition-colors
                      ${
                        isActive
                          ? "bg-[#EAFBF5] text-gray-700"
                          : "text-gray-500 hover:bg-gray-50"
                      }
                    `}
                  >

                    <div className="w-5 h-5 flex items-center justify-center">

                      <img
                        src={item.icon}
                        alt=""
                        className="w-4 h-4 object-contain"
                      />

                    </div>

                    <span>
                      {item.label}
                    </span>

                  </button>
                );
              })}

            </div>

          </div>


          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}
          <div className="min-w-0">


            {/* ==================================================
                EDIT PROFILE
            ================================================== */}
            {activeMenu === "Edit Profile" && (
              <>

                {/* TABS */}
                <div className="flex items-center gap-8 border-b border-gray-100">

                  {tabs.map((tab) => {

                    const isActive = activeTab === tab;

                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`
                          pb-3
                          text-sm
                          whitespace-nowrap
                          transition-colors
                          ${
                            isActive
                              ? "text-gray-700 border-b-2 border-[#03C987]"
                              : "text-gray-400 hover:text-gray-600"
                          }
                        `}
                      >
                        {tab}
                      </button>
                    );

                  })}

                </div>


                {/* ==================================================
                    PERSONAL INFORMATION
                ================================================== */}
                {activeTab === "Personal Information" && (
                  <div className="pt-7">

                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_190px] gap-10">

                      {/* FORM */}
                      <div>

                        {/* FIRST NAME */}
                        <div className="mb-7">

                          <label className="block text-sm text-gray-500 mb-3">
                            First Name
                          </label>

                          <input
                            type="text"
                            defaultValue="Linda"
                            className="
                              w-full
                              border-0
                              border-b
                              border-gray-200
                              bg-transparent
                              px-2
                              py-3
                              text-gray-600
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        {/* LAST NAME */}
                        <div className="mb-7">

                          <label className="block text-sm text-gray-500 mb-3">
                            Last Name
                          </label>

                          <input
                            type="text"
                            defaultValue="Rose"
                            className="
                              w-full
                              border-0
                              border-b
                              border-gray-200
                              bg-transparent
                              px-2
                              py-3
                              text-gray-600
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        {/* EMAIL */}
                        <div className="mb-7">

                          <label className="block text-sm text-gray-500 mb-3">
                            Email
                          </label>

                          <input
                            type="email"
                            defaultValue="lindarose@gmail.com"
                            className="
                              w-full
                              border-0
                              border-b
                              border-gray-200
                              bg-transparent
                              px-2
                              py-3
                              text-gray-600
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        {/* PHONE */}
                        <div className="mb-7">

                          <label className="block text-sm text-gray-500 mb-3">
                            Phone Number
                          </label>

                          <div className="flex items-center border-b border-gray-200 pb-2">

                            <span className="text-lg mr-2">
                              🇬🇧
                            </span>

                            <span className="text-sm text-gray-500 mr-3">
                              +44
                            </span>

                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) =>
                                setPhoneNumber(e.target.value)
                              }
                              placeholder="7765277726"
                              className="
                                flex-1
                                bg-transparent
                                text-sm
                                text-gray-600
                                outline-none
                              "
                            />

                          </div>

                        </div>


                        {/* GENDER + DOB */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                          {/* GENDER */}
                          <div>

                            <label className="block text-sm text-gray-500 mb-3">
                              Gender
                            </label>

                            <div className="relative">

                              <select
                                value={gender}
                                onChange={(e) =>
                                  setGender(e.target.value)
                                }
                                className="
                                  w-full
                                  appearance-none
                                  border-b
                                  border-gray-200
                                  bg-transparent
                                  px-2
                                  py-3
                                  text-sm
                                  text-gray-400
                                  outline-none
                                  cursor-pointer
                                "
                              >

                                <option value="">
                                  Select
                                </option>

                                <option value="male">
                                  Male
                                </option>

                                <option value="female">
                                  Female
                                </option>

                                <option value="other">
                                  Other
                                </option>

                              </select>

                              <img
                                src={select}
                                alt=""
                                className="
                                  absolute
                                  right-2
                                  top-1/2
                                  -translate-y-1/2
                                  w-4
                                  h-4
                                  object-contain
                                  pointer-events-none
                                "
                              />

                            </div>

                          </div>


                          {/* DOB */}
                          <div>

                            <label className="block text-sm text-gray-500 mb-3">
                              DOB (Date of Birth)
                            </label>

                            <div className="relative border-b border-gray-200">

                              <input
                                type="date"
                                value={dateOfBirth}
                                onChange={(e) =>
                                  setDateOfBirth(e.target.value)
                                }
                                className="
                                  w-full
                                  bg-transparent
                                  px-2
                                  py-3
                                  text-sm
                                  text-gray-400
                                  outline-none
                                "
                              />

                              <img
                                src={dateicon}
                                alt="Date"
                                className="
                                  absolute
                                  right-2
                                  top-1/2
                                  -translate-y-1/2
                                  w-5
                                  h-5
                                  object-contain
                                  pointer-events-none
                                "
                              />

                            </div>

                          </div>

                        </div>


                        {/* SAVE */}
                        <div className="mt-8">

                          <button
                            type="button"
                            className="
                              bg-[#03C987]
                              hover:bg-[#02b57a]
                              text-white
                              text-sm
                              font-medium
                              px-8
                              py-3
                              rounded-full
                              transition-colors
                            "
                          >
                            Save Changes
                          </button>

                        </div>

                      </div>


                      {/* PROFILE PICTURE */}
                      <div className="flex flex-col items-center pt-2">

                        <div className="w-28 h-28 rounded-full bg-[#EAFBF5] flex items-center justify-center">

                          <img
                            src={User}
                            alt="Profile"
                            className="w-24 h-24 object-contain"
                          />

                        </div>

                        <button
                          type="button"
                          className="
                            mt-4
                            border
                            border-gray-300
                            px-5
                            py-2.5
                            text-sm
                            text-gray-600
                            rounded
                            hover:bg-gray-50
                          "
                        >
                          Upload new picture
                        </button>

                      </div>

                    </div>

                  </div>
                )}


                {/* ==================================================
                    EDUCATIONAL INFORMATION
                ================================================== */}
                {activeTab === "Educational Information" && (
                  <div className="pt-7">

                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_190px] gap-10">

                      <div>

                        {/* COUNTRY */}
                        <div className="mb-7">

                          <label className="block text-sm text-gray-500 mb-3">
                            Country{" "}
                            <span className="text-red-400">
                              *
                            </span>
                          </label>

                          <div className="relative border-b border-gray-200">

                            <input
                              type="text"
                              value={country}
                              onChange={(e) =>
                                setCountry(e.target.value)
                              }
                              placeholder="Select"
                              className="
                                w-full
                                bg-transparent
                                px-2
                                py-3
                                pr-10
                                text-sm
                                text-gray-600
                                outline-none
                              "
                            />

                            <img
                              src={searchicon}
                              alt="Search"
                              className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                object-contain
                                pointer-events-none
                              "
                            />

                          </div>

                        </div>


                        {/* INSTITUTION */}
                        <div className="mb-7">

                          <label className="block text-sm text-gray-500 mb-3">
                            Institution Name{" "}
                            <span className="text-red-400">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            placeholder="Enter institution name"
                            className="
                              w-full
                              border-b
                              border-gray-200
                              bg-transparent
                              px-2
                              py-3
                              text-sm
                              text-gray-600
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        {/* MAJOR */}
                        <div className="mb-7">

                          <label className="block text-sm text-gray-500 mb-3">
                            Major/Program{" "}
                            <span className="text-red-400">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            placeholder="Enter major/program"
                            className="
                              w-full
                              border-b
                              border-gray-200
                              bg-transparent
                              px-2
                              py-3
                              text-sm
                              text-gray-600
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        {/* SCHOOL FEE + DURATION */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                          {/* SCHOOL FEE */}
                          <div>

                            <label className="block text-sm text-gray-500 mb-3">
                              School Fee{" "}
                              <span className="text-red-400">
                                *
                              </span>
                            </label>

                            <div className="flex items-center border-b border-gray-200">

                              <span className="text-gray-400">
                                €
                              </span>

                              <input
                                type="text"
                                placeholder="0.00"
                                className="
                                  flex-1
                                  bg-transparent
                                  px-3
                                  py-3
                                  text-sm
                                  outline-none
                                "
                              />

                            </div>

                          </div>


                          {/* DURATION */}
                          <div>

                            <label className="block text-sm text-gray-500 mb-3">
                              Duration{" "}
                              <span className="text-red-400">
                                *
                              </span>
                            </label>

                            <div className="relative">

                              <select
                                className="
                                  w-full
                                  appearance-none
                                  border-b
                                  border-gray-200
                                  bg-transparent
                                  px-2
                                  py-3
                                  text-sm
                                  text-gray-500
                                  outline-none
                                  cursor-pointer
                                "
                              >

                                <option>
                                  Select
                                </option>

                                <option>
                                  1 year
                                </option>

                                <option>
                                  2 years
                                </option>

                                <option>
                                  3 years
                                </option>

                                <option>
                                  4 years
                                </option>

                              </select>

                              <img
                                src={select}
                                alt=""
                                className="
                                  absolute
                                  right-2
                                  top-1/2
                                  -translate-y-1/2
                                  w-4
                                  h-4
                                  object-contain
                                  pointer-events-none
                                "
                              />

                            </div>

                          </div>

                        </div>


                        {/* SAVE */}
                        <div className="mt-8">

                          <button
                            type="button"
                            className="
                              bg-[#03C987]
                              hover:bg-[#02b57a]
                              text-white
                              text-sm
                              font-medium
                              px-8
                              py-3
                              rounded-full
                              transition-colors
                            "
                          >
                            Save Changes
                          </button>

                        </div>

                      </div>


                      {/* PROFILE PICTURE */}
                      <div className="flex flex-col items-center pt-2">

                        <div className="w-28 h-28 rounded-full bg-[#EAFBF5] flex items-center justify-center">

                          <img
                            src={User}
                            alt="Profile"
                            className="w-24 h-24 object-contain"
                          />

                        </div>

                        <button
                          type="button"
                          className="
                            mt-4
                            border
                            border-gray-300
                            px-5
                            py-2.5
                            text-sm
                            text-gray-600
                            rounded
                            hover:bg-gray-50
                          "
                        >
                          Upload new picture
                        </button>

                      </div>

                    </div>

                  </div>
                )}


                {/* ==================================================
                    WORK INFORMATION
                ================================================== */}
                {activeTab === "Work Information" && (
                  <div className="pt-7">

                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_190px] gap-10">

                      <div>

                        <h3 className="text-xl font-medium text-gray-600 mb-7">
                          Work Information
                        </h3>


                        {/* EMPLOYER */}
                        <div className="mb-12">

                          <label className="block text-sm text-gray-500 mb-3">
                            Employer Name{" "}
                            <span className="text-red-400">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="
                              w-full
                              border-b
                              border-gray-200
                              bg-transparent
                              px-2
                              py-3
                              text-sm
                              text-gray-600
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        {/* JOB TITLE */}
                        <div className="mb-12">

                          <label className="block text-sm text-gray-500 mb-3">
                            Job Title/Position{" "}
                            <span className="text-red-400">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="
                              w-full
                              border-b
                              border-gray-200
                              bg-transparent
                              px-2
                              py-3
                              text-sm
                              text-gray-600
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        {/* PAY DATE + AMOUNT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                          {/* PAY DATE */}
                          <div>

                            <label className="block text-sm text-gray-500 mb-3">
                              Pay Date{" "}
                              <span className="text-red-400">
                                *
                              </span>
                            </label>

                            <div className="relative">

                              <input
                                type="date"
                                className="
                                  w-full
                                  appearance-none
                                  border-b
                                  border-gray-200
                                  bg-transparent
                                  px-2
                                  py-3
                                  pr-9
                                  text-sm
                                  text-gray-500
                                  outline-none
                                "
                              />

                              <img
                                src={dateicon}
                                alt="Date"
                                className="
                                  absolute
                                  right-2
                                  top-1/2
                                  -translate-y-1/2
                                  w-5
                                  h-5
                                  object-contain
                                  pointer-events-none
                                "
                              />

                            </div>

                          </div>


                          {/* AMOUNT */}
                          <div>

                            <label className="block text-sm text-gray-500 mb-3">
                              Amount{" "}
                              <span className="text-red-400">
                                *
                              </span>
                            </label>

                            <div className="flex items-center border-b border-gray-200">

                              <span className="text-gray-400">
                                €
                              </span>

                              <input
                                type="text"
                                placeholder="0.00"
                                className="
                                  flex-1
                                  bg-transparent
                                  px-3
                                  py-3
                                  text-sm
                                  outline-none
                                "
                              />

                            </div>

                          </div>

                        </div>


                        {/* SAVE */}
                        <div className="mt-8">

                          <button
                            type="button"
                            className="
                              bg-[#03C987]
                              hover:bg-[#02b57a]
                              text-white
                              text-sm
                              font-medium
                              px-8
                              py-3
                              rounded-full
                              transition-colors
                            "
                          >
                            Save Changes
                          </button>

                        </div>

                      </div>


                      {/* PROFILE PICTURE */}
                      <div className="flex flex-col items-center pt-2">

                        <div className="w-28 h-28 rounded-full bg-[#EAFBF5] flex items-center justify-center">

                          <img
                            src={User}
                            alt="Profile"
                            className="w-24 h-24 object-contain"
                          />

                        </div>

                        <button
                          type="button"
                          className="
                            mt-4
                            border
                            border-gray-300
                            px-5
                            py-2.5
                            text-sm
                            text-gray-600
                            rounded
                            hover:bg-gray-50
                          "
                        >
                          Upload new picture
                        </button>

                      </div>

                    </div>

                  </div>
                )}

              </>
            )}


            {/* ==================================================
                ACCOUNT SETTINGS
            ================================================== */}
            {activeMenu === "Account Settings" && (
              <div className="pt-1">

                <div className="border border-gray-100 rounded-sm">

                  {/* TITLE */}
                  <div className="px-6 py-5 border-b border-gray-100">

                    <h2 className="text-sm font-medium text-[#7183A3]">
                      Account Information
                    </h2>

                  </div>


                  {/* PASSWORD */}
                  <div className="border-b border-gray-100">

                    <div className="px-6 py-4 flex items-center justify-between">

                      <p className="text-sm font-medium text-gray-700">
                        Password
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="
                          px-3
                          py-1
                          rounded
                          bg-gray-100
                          text-xs
                          text-gray-600
                          hover:bg-gray-200
                        "
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>

                    </div>


                    {showPassword && (
                      <div className="px-6 pb-6">

                        <div className="mb-5">

                          <label className="block text-xs text-gray-500 mb-2">
                            Current Password
                          </label>

                          <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) =>
                              setCurrentPassword(e.target.value)
                            }
                            className="
                              w-full
                              border
                              border-gray-200
                              rounded-lg
                              px-4
                              py-3
                              text-sm
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        <div className="mb-5">

                          <label className="block text-xs text-gray-500 mb-2">
                            New Password
                          </label>

                          <input
                            type="password"
                            value={newPassword}
                            onChange={(e) =>
                              setNewPassword(e.target.value)
                            }
                            className="
                              w-full
                              border
                              border-gray-200
                              rounded-lg
                              px-4
                              py-3
                              text-sm
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                          <p className="text-[11px] text-gray-400 mt-2">
                            * minimum 8 characters
                          </p>

                        </div>


                        <div className="flex items-center gap-3 flex-wrap">

                          <button
                            type="button"
                            className="
                              bg-[#03C987]
                              hover:bg-[#02b57a]
                              text-white
                              text-xs
                              font-medium
                              rounded-full
                              px-6
                              py-2.5
                            "
                          >
                            Save Changes
                          </button>

                          <span className="text-xs text-gray-400">
                            Can't remember your current password?
                          </span>

                          <button
                            type="button"
                            className="text-xs text-gray-700 underline"
                          >
                            Reset password.
                          </button>

                        </div>

                      </div>
                    )}

                  </div>


                  {/* EMAIL ADDRESS */}
                  <div className="border-b border-gray-100">

                    <div className="px-6 py-4 flex items-start justify-between">

                      <div>

                        <p className="text-sm font-medium text-gray-700">
                          Email Address
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          Your email address is {accountEmail}
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setShowEmail(!showEmail)
                        }
                        className="
                          px-3
                          py-1
                          rounded
                          bg-gray-100
                          text-xs
                          text-gray-600
                          hover:bg-gray-200
                        "
                      >
                        {showEmail ? "Hide" : "Show"}
                      </button>

                    </div>


                    {showEmail && (
                      <div className="px-6 pb-6">

                        <div className="mb-5">

                          <label className="block text-xs text-gray-500 mb-2">
                            Current Password
                          </label>

                          <input
                            type="password"
                            value={emailPassword}
                            onChange={(e) =>
                              setEmailPassword(e.target.value)
                            }
                            className="
                              w-full
                              border
                              border-gray-200
                              rounded-lg
                              px-4
                              py-3
                              text-sm
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        <div className="mb-5">

                          <label className="block text-xs text-gray-500 mb-2">
                            New Email Address
                          </label>

                          <input
                            type="email"
                            value={newEmail}
                            onChange={(e) =>
                              setNewEmail(e.target.value)
                            }
                            className="
                              w-full
                              border
                              border-gray-200
                              rounded-lg
                              px-4
                              py-3
                              text-sm
                              outline-none
                              focus:border-[#03C987]
                            "
                          />

                        </div>


                        <button
                          type="button"
                          className="
                            bg-[#03C987]
                            hover:bg-[#02b57a]
                            text-white
                            text-xs
                            font-medium
                            rounded-full
                            px-6
                            py-2.5
                          "
                        >
                          Update Email
                        </button>

                      </div>
                    )}

                  </div>


                  {/* LANGUAGE */}
                  <div className="border-b border-gray-100">

                    <div className="px-6 py-4 flex items-start justify-between">

                      <div>

                        <p className="text-sm font-medium text-gray-700">
                          Language
                        </p>

                        <p className="text-xs text-gray-400 mt-1 max-w-[550px]">
                          Choose the language you'd like to use with
                          SubStance. Your language is currently set to:
                          English (US)
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setShowLanguage(!showLanguage)
                        }
                        className="
                          px-3
                          py-1
                          rounded
                          bg-gray-100
                          text-xs
                          text-gray-600
                          hover:bg-gray-200
                        "
                      >
                        {showLanguage ? "Hide" : "Show"}
                      </button>

                    </div>


                    {showLanguage && (
                      <div className="px-6 pb-6">

                        <div className="relative mb-4">

                          <select
                            value={language}
                            onChange={(e) =>
                              setLanguage(e.target.value)
                            }
                            className="
                              w-full
                              appearance-none
                              border
                              border-gray-200
                              rounded-lg
                              bg-white
                              px-4
                              py-3
                              text-sm
                              text-gray-600
                              outline-none
                              cursor-pointer
                            "
                          >

                            <option>
                              English (US)
                            </option>

                            <option>
                              English (UK)
                            </option>

                            <option>
                              French
                            </option>

                            <option>
                              German
                            </option>

                          </select>

                          <img
                            src={select}
                            alt=""
                            className="
                              absolute
                              right-4
                              top-1/2
                              -translate-y-1/2
                              w-4
                              h-4
                              object-contain
                              pointer-events-none
                            "
                          />

                        </div>


                        <button
                          type="button"
                          className="
                            bg-[#03C987]
                            hover:bg-[#02b57a]
                            text-white
                            text-xs
                            font-medium
                            rounded-full
                            px-6
                            py-2.5
                          "
                        >
                          Update Email
                        </button>

                      </div>
                    )}

                  </div>


                  {/* DELETE ACCOUNT */}
                  <div className="px-6 py-5">

                    <h3 className="text-sm font-medium text-gray-700">
                      Delete your account
                    </h3>

                    <p className="text-xs text-gray-400 mt-2 max-w-[650px] leading-5">
                      When you delete your account, you lose access to
                      account services, and we permanently delete your
                      personal data. You can cancel the deletion for 14 days.
                    </p>


                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5 gap-5">

                      <label className="flex items-center gap-2 text-xs text-gray-600">

                        <input
                          type="checkbox"
                          checked={deleteConfirmed}
                          onChange={(e) =>
                            setDeleteConfirmed(e.target.checked)
                          }
                          className="w-4 h-4 accent-[#03C987]"
                        />

                        <span>
                          Confirm that I want to delete my account.
                        </span>

                      </label>


                      <button
                        type="button"
                        disabled={!deleteConfirmed}
                        className={`
                          min-w-[160px]
                          text-white
                          text-xs
                          font-medium
                          rounded-full
                          py-3
                          px-6
                          transition-colors
                          ${
                            deleteConfirmed
                              ? "bg-[#C91418] hover:bg-[#B51014]"
                              : "bg-gray-300 cursor-not-allowed"
                          }
                        `}
                      >
                        Delete Account
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            )}


            {/* ==================================================
                NOTIFICATIONS
            ================================================== */}
            {activeMenu === "Notifications" && (
              <div className="pt-1">

                <div className="border border-gray-100 rounded-sm">

                  {/* TITLE */}
                  <div className="px-6 py-5 border-b border-gray-100">

                    <h2 className="text-sm font-medium text-[#7183A3]">
                      Notification
                    </h2>

                  </div>


                  {/* EMAIL NOTIFICATIONS */}
                  <div className="px-6 py-5 border-b border-gray-100">

                    <h3 className="text-sm font-medium text-gray-700">
                      Email Notifications
                    </h3>

                    <p className="text-xs text-gray-400 mt-1 max-w-[700px] leading-5">
                      Lorem ipsum dolor sit amet consectetur. Nec mus arcu
                      enim egestas vulputate lacinia elit dolor facilisi.
                      Purus viverra aliquet duis velit cursus et fermentum
                      vitae.
                    </p>


                    <div className="mt-5">

                      <p className="text-xs font-medium text-gray-600 mb-3">
                        Send me email notifications:
                      </p>

                      <label className="flex items-center gap-2 mb-3 cursor-pointer">

                        <input
                          type="radio"
                          name="emailNotifications"
                          defaultChecked
                          className="
                            w-4
                            h-4
                            accent-[#03C987]
                            cursor-pointer
                          "
                        />

                        <span className="text-xs text-gray-500">
                          Send me email notifications
                        </span>

                      </label>


                      <label className="flex items-center gap-2 cursor-pointer">

                        <input
                          type="radio"
                          name="emailNotifications"
                          className="
                            w-4
                            h-4
                            accent-[#03C987]
                            cursor-pointer
                          "
                        />

                        <span className="text-xs text-gray-500">
                          Never
                        </span>

                      </label>

                    </div>

                  </div>


                  {/* NEWS & UPDATES */}
                  <div className="px-6 py-5">

                    <h3 className="text-sm font-medium text-gray-700">
                      News & Updates
                    </h3>

                    <p className="text-xs text-gray-400 mt-1 max-w-[700px] leading-5">
                      Lorem ipsum dolor sit amet consectetur. Nec mus arcu
                      enim egestas vulputate lacinia elit dolor facilisi.
                      Purus viverra aliquet duis velit cursus et fermentum
                      vitae.
                    </p>


                    <label className="flex items-center gap-2 mt-5 mb-3 cursor-pointer">

                      <input
                        type="checkbox"
                        defaultChecked
                        className="
                          w-4
                          h-4
                          accent-[#03C987]
                          cursor-pointer
                        "
                      />

                      <span className="text-xs text-gray-500">
                        Offers and Promotions
                      </span>

                    </label>


                    <label className="flex items-center gap-2 mb-3 cursor-pointer">

                      <input
                        type="checkbox"
                        defaultChecked
                        className="
                          w-4
                          h-4
                          accent-[#03C987]
                          cursor-pointer
                        "
                      />

                      <span className="text-xs text-gray-500">
                        Tips and Tricks
                      </span>

                    </label>


                    <label className="flex items-center gap-2 cursor-pointer">

                      <input
                        type="checkbox"
                        className="
                          w-4
                          h-4
                          accent-[#03C987]
                          cursor-pointer
                        "
                      />

                      <span className="text-xs text-gray-500">
                        Newsletter
                      </span>

                    </label>

                  </div>

                </div>

              </div>
            )}


            {/* ==================================================
                HELPDESK
            ================================================== */}
            {activeMenu === "Helpdesk" && (
              <div className="pt-1">

                <div className="border border-gray-100 rounded-sm">

                  <div className="px-6 py-5 border-b border-gray-100">

                    <h2 className="text-sm font-medium text-[#7183A3]">
                      Helpdesk
                    </h2>

                  </div>


                  <div className="px-6 py-6">

                    <h3 className="text-lg font-semibold text-gray-700">
                      How can we help?
                    </h3>

                    <p className="text-sm text-gray-400 mt-2">
                      Find answers to common questions or contact support.
                    </p>


                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

                      <button
                        type="button"
                        className="
                          border
                          border-gray-200
                          rounded-xl
                          p-5
                          text-left
                          hover:bg-gray-50
                          transition
                        "
                      >

                        <h4 className="text-sm font-medium text-gray-700">
                          Frequently Asked Questions
                        </h4>

                        <p className="text-xs text-gray-400 mt-2">
                          Browse common questions and answers.
                        </p>

                      </button>


                      <button
                        type="button"
                        className="
                          border
                          border-gray-200
                          rounded-xl
                          p-5
                          text-left
                          hover:bg-gray-50
                          transition
                        "
                      >

                        <h4 className="text-sm font-medium text-gray-700">
                          Contact Support
                        </h4>

                        <p className="text-xs text-gray-400 mt-2">
                          Get help from the EduFinance support team.
                        </p>

                      </button>

                    </div>


                    <div className="mt-6">

                      <label className="block text-sm text-gray-500 mb-2">
                        Message
                      </label>

                      <textarea
                        rows="5"
                        placeholder="Describe your issue..."
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          text-gray-600
                          outline-none
                          resize-none
                          focus:border-[#03C987]
                        "
                      ></textarea>

                    </div>


                    <button
                      type="button"
                      className="
                        mt-5
                        bg-[#03C987]
                        hover:bg-[#02b57a]
                        text-white
                        text-sm
                        font-medium
                        px-8
                        py-3
                        rounded-full
                        transition-colors
                      "
                    >
                      Send Message
                    </button>

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Settings;