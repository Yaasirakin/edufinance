import React, { useState } from "react";

import illustration2 from "../assets/image/illustration2.png";
import records from "../assets/image/records.png";
import user from "../assets/image/user.png";
import settingicon from "../assets/image/settingicon.png";
import assignment from "../assets/image/assignment.png";
import receipt from "../assets/image/receipt.png";
import icons from "../assets/image/icons.png";
import icon1 from "../assets/image/icon1.png";
import chart from "../assets/image/chart.png";
import Icons from "../assets/image/Icons.png";
import { Link } from "react-router-dom";


// ==============================
// PERIOD DROPDOWN
// ==============================
const PeriodDropdown = ({ selectedPeriod, setSelectedPeriod }) => {
  const [isOpen, setIsOpen] = useState(false);

  const periods = [
    "This Week",
    "Last Week",
    "This Month",
    "Last Month",
    "Select Date",
  ];

  const handleSelect = (period) => {
    setSelectedPeriod(period);
    setIsOpen(false);
  };

  return (
    <div className="relative">

      {/* DROPDOWN BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        {selectedPeriod}

        <span
          className={`text-xs transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>


      {/* DROPDOWN MENU */}
      <div
        className={`
          absolute
          right-0
          top-full
          mt-2
          w-40
          bg-white
          rounded-lg
          shadow-lg
          border
          border-gray-100
          overflow-hidden
          z-50
          origin-top
          transition-all
          duration-300
          ${
            isOpen
              ? "opacity-100 scale-y-100 translate-y-0 max-h-96"
              : "opacity-0 scale-y-95 -translate-y-2 max-h-0 pointer-events-none"
          }
        `}
      >

        {periods.map((period) => (
          <button
            key={period}
            type="button"
            onClick={() => handleSelect(period)}
            className={`
              block
              w-full
              text-left
              px-4
              py-3
              text-sm
              transition-colors
              ${
                selectedPeriod === period
                  ? "bg-green-50 text-[#03C987]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }
            `}
          >
            {period}
          </button>
        ))}

      </div>
    </div>
  );
};


// ==============================
// DASHBOARD
// ==============================
const Dashboard = () => {

  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  return (
    <div className="min-h-screen bg-gray-200 px-6 py-6 md:px-10 lg:px-14 text-gray-700">


      {/* ================= HEADER ================= */}
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

          <button className="text-gray-600 text-sm flex items-center gap-1">
            €
            <span className="text-xs">⌄</span>
          </button>


          {/* USER IMAGE */}
          <img
            src={user}
            alt="User"
            className="w-10 h-10 object-contain"
          />

        </div>

      </div>



      {/* ================= COMPLETE PROFILE ================= */}
      <div className="w-full rounded-xl bg-gray-50 px-6 py-5 mb-10 flex items-center justify-between">

        <div className="flex items-center gap-4">

          {/* ASSIGNMENT IMAGE */}
          <img
            src={assignment}
            alt="Complete profile"
            className="w-10 h-10 object-contain"
          />


          <div>

            <h2 className="font-semibold text-gray-600 text-base">
              Complete Profile
            </h2>

            <p className="text-xs md:text-sm text-gray-400 mt-1">
              Fill in your personal, educational, and work information to
              complete your profile and get started
            </p>

          </div>

        </div>

        <Link to="/CompleteProfile1" className="md:block px-7 py-3 rounded-lg bg-white text-sm font-medium text-gray-500 shadow-sm">
          Get Started
        </Link>

      </div>



      {/* ================= DASHBOARD TITLE ================= */}
      <div className="flex items-center justify-between mb-5">

        <h2 className="text-lg font-semibold text-gray-600">
          Dashboard
        </h2>


        {/* THIS WEEK DROPDOWN */}
        <PeriodDropdown
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />

      </div>



      {/* ================= BALANCE / INCOME / EXPENSES ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">


        {/* ESTIMATED BALANCE */}
        <div className="rounded-xl bg-[#013222] text-white px-6 py-6 min-h-[135px]">

          <p className="text-xs font-medium tracking-wide text-gray-300">
            ESTIMATED BALANCE
          </p>

          <h3 className="text-2xl font-medium mt-3">
            € 0.00
          </h3>

          <div className="flex items-center gap-1 mt-4">

            <span className="w-5 h-5 rounded bg-green-500 inline-block"></span>

            <span className="text-xs text-gray-300">
              0%
            </span>

          </div>

        </div>



        {/* INCOME */}
        <div className="rounded-xl bg-[#E8F5E9] px-6 py-6 min-h-[135px]">

          <div className="flex items-center gap-2">

            <img
              src={Icons}
              alt="Income"
              className="w-4 h-4 object-contain"
            />

            <p className="text-xs font-medium text-gray-500">
              INCOME
            </p>

          </div>


          <h3 className="text-2xl font-medium text-gray-700 mt-2">
            € 0.00
          </h3>


          <div className="flex justify-end mt-4">

            <button className="px-8 py-2.5 rounded-full bg-green-400 text-white text-sm font-medium shadow-sm">
              Add Income
            </button>

          </div>

        </div>



        {/* EXPENSES */}
        <div className="rounded-xl bg-[#FDE8E8] px-6 py-6 min-h-[135px]">

          <div className="flex items-center gap-2">

            <img
              src={receipt}
              alt="Expenses"
              className="w-4 h-4 object-contain"
            />

            <p className="text-xs font-medium text-gray-500">
              EXPENSES
            </p>

          </div>


          <h3 className="text-2xl font-medium text-gray-700 mt-2">
            € 0.00
          </h3>


          <div className="flex justify-end mt-4">

            <button className="px-8 py-2.5 rounded-full bg-gray-500 text-white text-sm font-medium shadow-sm">
              Add Expenses
            </button>

          </div>

        </div>

      </div>



      {/* ================= BOTTOM SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


        {/* ================= TOP 3 EXPENSES ================= */}
        <div className="rounded-xl bg-gray-50 px-6 py-6">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-base font-semibold text-gray-600">
              Top 3 Expenses
            </h2>


            {/* THIS WEEK DROPDOWN */}
            <PeriodDropdown
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />

          </div>



          {/* ================= CHART ================= */}
          <div className="relative flex justify-center items-center h-[180px]">

            <img
              src={chart}
              alt="Expense chart"
              className="w-52 h-32 object-contain"
            />


            <div className="absolute text-xl text-gray-600">
              €0.00
            </div>

          </div>



          {/* ================= CATEGORIES ================= */}
          <div className="grid grid-cols-2 mt-8 text-xs text-gray-500">


            <div>

              <p className="mb-4">
                Category
              </p>


              <p className="mb-4 flex items-center gap-2">

                <span className="w-2 h-2 rounded-full bg-green-500"></span>

                Utility Bill

              </p>


              <p className="mb-4 flex items-center gap-2">

                <span className="w-2 h-2 rounded-full bg-green-300"></span>

                Food

              </p>


              <p className="flex items-center gap-2">

                <span className="w-2 h-2 rounded-full bg-gray-500"></span>

                Transport

              </p>

            </div>



            <div>

              <p className="mb-4">
                Percentage
              </p>

              <p className="mb-4">
                0%
              </p>

              <p className="mb-4">
                0%
              </p>

              <p>
                0%
              </p>

            </div>

          </div>

        </div>



        {/* ================= RECENT RECORDS ================= */}
        <div className="rounded-xl bg-gray-50 px-6 py-6">

          <h2 className="text-base font-semibold text-gray-600 mb-8">
            Recent Records
          </h2>


          <div className="h-[300px] flex flex-col items-center justify-center">

            {/* YOUR IMAGE */}
            <img
              src={illustration2}
              alt="No records"
              className="w-28 h-28 object-contain opacity-60"
            />


            <p className="text-sm text-gray-300 mt-5">
              No Records yet
            </p>

          </div>

        </div>

      </div>



      {/* ================= AI ASSISTANT ================= */}
      <div className="mt-8 rounded-xl overflow-hidden border border-[#03C987]">


        {/* AI HEADER */}
        <div className="h-14 bg-[#03C987] flex items-center justify-between px-5">

          <div className="flex items-center gap-2">

            <img
              src={settingicon}
              alt="AI Assistant"
              className="w-5 h-5 object-contain"
            />


            <h2 className="text-white font-medium text-sm">
              AI Assistant
            </h2>

          </div>


          <img
            src={icons}
            alt=""
            className="w-6 h-6 object-contain"
          />

        </div>



        {/* AI CONTENT */}
        <div className="h-[270px] flex flex-col items-center justify-center">


          <img
            src={records}
            alt="Complete Profile"
            className="w-32 h-32 object-contain opacity-70"
          />


          <p className="text-sm text-gray-400 mt-4">
            Complete Profile to
          </p>


          <p className="text-sm font-semibold text-gray-500">
            Get Started
          </p>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;