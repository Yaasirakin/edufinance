import React, { useState } from "react";

import user from "../assets/image/user.png";
import Deleteicon from "../assets/image/Deleteicon.png";
import Editicon from "../assets/image/Editicon.png";
import select from "../assets/image/select.png";
import { Link } from "react-router-dom";
import AddIncome from "./AddIncome";


const Income = () => {
  // ===============================
  // PERIOD DROPDOWNS
  // ===============================
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

  const [selectedTopPeriod, setSelectedTopPeriod] = useState("This Week");
  const [showTopPeriodDropdown, setShowTopPeriodDropdown] = useState(false);

  const periods = [
    "This Week",
    "Last Week",
    "This Month",
    "Last Month",
    "Select Date",
  ];

  // ===============================
  // INCOME DATA
  // ===============================
  const incomes = [
    {
      name: "Salary",
      date: "14 Jul 2024",
      amount: "€ 600.00",
    },
    {
      name: "Freelance",
      date: "14 Jul 2024",
      amount: "€ 600.00",
    },
    {
      name: "Salary",
      date: "14 Jul 2024",
      amount: "€ 600.00",
    },
    {
      name: "Business",
      date: "14 Jul 2024",
      amount: "€ 600.00",
    },
    {
      name: "Salary",
      date: "14 Jul 2024",
      amount: "€ 600.00",
    },
    {
      name: "Freelance",
      date: "14 Jul 2024",
      amount: "€ 600.00",
    },
  ];

  // ===============================
  // INCOME CATEGORIES
  // ===============================
  const categories = [
    { name: "Salary", amount: "08" },
    { name: "Freelance", amount: "08" },
    { name: "Business", amount: "0" },
    { name: "Scholarship", amount: "0" },
    { name: "Investment", amount: "0" },
    { name: "Other", amount: "0" },
  ];

  // ===============================
  // CHART DATA
  // ===============================
  const chartData = [
    { today: 28, yesterday: 23 },
    { today: 55, yesterday: 49 },
    { today: 37, yesterday: 30 },
    { today: 51, yesterday: 44 },
    { today: 44, yesterday: 38 },
    { today: 65, yesterday: 43 },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-6 md:px-10 lg:px-14 text-gray-700">

      {/* ===============================
          HEADER
      =============================== */}
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

          <button
            type="button"
            className="text-gray-600 text-sm flex items-center gap-1"
          >
            €

            <span className="text-xs">
              ⌄
            </span>
          </button>

          <img
            src={user}
            alt="User"
            className="w-10 h-10 object-contain"
          />

        </div>

      </div>


      {/* ===============================
          INCOME SUMMARY
      =============================== */}
      <div className="rounded-xl bg-[#E8F5E9] px-7 py-7 mb-6">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              ▣ &nbsp; TOTAL INCOME
            </p>

            <h2 className="text-3xl font-medium text-gray-700 mt-2">
              € 3,600.00
            </h2>

          </div>


          {/* PERIOD DROPDOWN */}
          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setShowPeriodDropdown(!showPeriodDropdown)
              }
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              {selectedPeriod}

              <img
                src={select}
                alt=""
                className="w-3 h-3 object-contain"
              />
            </button>


            {showPeriodDropdown && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg z-30 overflow-hidden">

                {periods.map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => {
                      setSelectedPeriod(period);
                      setShowPeriodDropdown(false);
                    }}
                    className="
                      w-full
                      text-left
                      px-4
                      py-3
                      text-sm
                      text-gray-500
                      hover:bg-gray-50
                    "
                  >
                    {period}
                  </button>
                ))}

              </div>
            )}

          </div>

        </div>


        {/* ADD INCOME */}
        <div className="flex justify-end mt-7">

         <Link to="/AddIncome" className="px-8 py-2.5 bg-[#03C987] hover:bg-[#02b57a] text-white text-sm rounded-full shadow-sm transition">
            Add Income
          </Link>

        </div>

      </div>


      {/* ===============================
          RECENT INCOME + CATEGORIES
      =============================== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">

        {/* RECENT INCOME */}
        <div className="rounded-xl bg-gray-50 px-6 py-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-base font-semibold text-gray-600">
              Recent Income
            </h2>

            <button
              type="button"
              className="text-sm text-gray-500"
            >
              See All
            </button>

          </div>


          {/* INCOME LIST */}
          <div className="space-y-5">

            {incomes.map((income, index) => (
              <div
                key={`${income.name}-${index}`}
                className="flex items-center justify-between"
              >

                {/* LEFT */}
                <div className="flex items-center gap-3 min-w-0">

                  <div className="w-7 h-7 rounded bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 bg-green-400 rounded-sm"></span>
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm text-gray-600 font-medium">
                      {income.name}
                    </p>

                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Income • {income.date}
                    </p>

                  </div>

                </div>


                {/* RIGHT */}
                <div className="flex items-center gap-4 ml-4">

                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {income.amount}
                  </span>

                  <img
                    src={Deleteicon}
                    alt="Delete"
                    className="w-4 h-4 object-contain cursor-pointer"
                  />

                  <img
                    src={Editicon}
                    alt="Edit"
                    className="w-4 h-4 object-contain cursor-pointer"
                  />

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* CATEGORIES */}
        <div className="rounded-xl bg-gray-50 px-6 py-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-base font-semibold text-gray-600">
              Categories
            </h2>

            <button
              type="button"
              className="
                px-5
                py-2.5
                rounded-lg
                bg-green-50
                border
                border-green-100
                text-sm
                text-gray-600
                flex
                items-center
                gap-2
              "
            >
              Add Category

              <span className="text-xl leading-none">
                +
              </span>
            </button>

          </div>


          <div className="space-y-6">

            {categories.map((category, index) => (
              <div
                key={`${category.name}-${index}`}
                className="flex items-center justify-between text-sm"
              >

                <span className="text-gray-600">
                  {category.name}
                </span>

                <span className="text-gray-500">
                  {category.amount}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>


      {/* ===============================
          REAL-TIME SALE + TOP 3 INCOME
      =============================== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* REAL-TIME SALE */}
        <div className="rounded-xl bg-gray-50 px-6 py-6">

          <h2 className="text-base font-semibold text-gray-600 mb-5">
            Real-Time Income
          </h2>


          {/* LEGEND */}
          <div className="flex items-center gap-5 text-xs text-gray-400 mb-5">

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Today
            </span>

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-200"></span>
              Yesterday
            </span>

          </div>


          {/* CHART */}
          <div className="flex gap-3">

            {/* Y AXIS */}
            <div className="h-64 flex flex-col justify-between text-[10px] text-gray-400 pb-1">

              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>

            </div>


            {/* GRAPH */}
            <div className="flex-1">

              <div className="relative h-64 border-b border-gray-200">

                {/* GRID LINES */}
                <div className="absolute inset-0 flex flex-col justify-between">

                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>

                </div>


                {/* BARS */}
                <div className="relative h-full flex items-end justify-around px-4">

                  {chartData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-end gap-1 h-full"
                    >

                      {/* TODAY */}
                      <div
                        className="w-3 bg-green-500 rounded-t-sm"
                        style={{
                          height: `${item.today * 2.4}px`,
                        }}
                      ></div>


                      {/* YESTERDAY */}
                      <div
                        className="w-3 bg-green-200 rounded-t-sm"
                        style={{
                          height: `${item.yesterday * 2.4}px`,
                        }}
                      ></div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ===============================
            TOP 3 INCOME
        =============================== */}
        <div className="rounded-xl bg-gray-50 px-6 py-6">

          <div className="flex items-center justify-between">

            <h2 className="text-base font-semibold text-gray-600">
              Top 3 Income
            </h2>


            {/* DROPDOWN */}
            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setShowTopPeriodDropdown(
                    !showTopPeriodDropdown
                  )
                }
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                {selectedTopPeriod}

                <img
                  src={select}
                  alt=""
                  className="w-3 h-3 object-contain"
                />
              </button>


              {showTopPeriodDropdown && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg z-30 overflow-hidden">

                  {periods.map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => {
                        setSelectedTopPeriod(period);
                        setShowTopPeriodDropdown(false);
                      }}
                      className="
                        w-full
                        text-left
                        px-4
                        py-3
                        text-sm
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      {period}
                    </button>
                  ))}

                </div>
              )}

            </div>

          </div>


          {/* TOP 3 GAUGE */}
          <div className="flex justify-center mt-8">

            <div className="relative w-52 h-28 overflow-hidden">

              <div className="absolute left-0 top-0 w-52 h-52 rounded-full border-[14px] border-green-300"></div>

              <div className="absolute left-0 top-0 w-52 h-52 rounded-full border-[14px] border-transparent border-t-green-500 border-l-green-500 rotate-[35deg]"></div>

              <div className="absolute left-0 top-0 w-52 h-52 rounded-full border-[14px] border-transparent border-r-gray-500 rotate-[-15deg]"></div>


              <div className="absolute inset-0 flex items-end justify-center pb-3">

                <span className="text-2xl text-gray-600">
                  €0.00
                </span>

              </div>

            </div>

          </div>


          {/* CATEGORY + PERCENTAGE */}
          <div className="grid grid-cols-2 mt-7 text-xs text-gray-500">

            <div>

              <p className="mb-4">
                Category
              </p>

              <p className="flex items-center gap-2 mb-4">

                <span className="w-2 h-2 rounded-full bg-green-500"></span>

                Salary

              </p>

              <p className="flex items-center gap-2 mb-4">

                <span className="w-2 h-2 rounded-full bg-green-300"></span>

                Freelance

              </p>

              <p className="flex items-center gap-2">

                <span className="w-2 h-2 rounded-full bg-gray-500"></span>

                Business

              </p>

            </div>


            <div className="text-right">

              <p className="mb-4">
                Percentage
              </p>

              <p className="mb-4">
                40%
              </p>

              <p className="mb-4">
                30%
              </p>

              <p>
                20%
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Income;