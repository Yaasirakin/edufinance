import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import select from "../assets/image/select.png";

const CompleteProfile3 = () => {
  const navigate = useNavigate();

  const [employed, setEmployed] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [payDate, setPayDate] = useState("");
  const [amount, setAmount] = useState("");
  const [payFrequency, setPayFrequency] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employed) {
      alert("Please select Yes or No.");
      return;
    }

    if (employed === "yes") {
      if (
        !employerName ||
        !jobTitle ||
        !payDate ||
        !amount ||
        !payFrequency
      ) {
        alert("Please fill in all required fields.");
        return;
      }
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex justify-center px-6 py-8 md:px-10 lg:px-14">

      <div className="w-full max-w-4xl">

        {/* TOP */}
        <div className="flex items-center justify-between mb-12">

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Complete Profile
          </h1>

          <span className="text-2xl md:text-3xl font-medium text-gray-700">
            2/3
          </span>

        </div>


        <form onSubmit={handleSubmit}>

          {/* EMPLOYMENT QUESTION */}
          <div className="mb-10">

            <label className="block text-lg text-gray-600 mb-5">
              Are you currently employed?
              <span className="text-red-400 ml-1">*</span>
            </label>


            {/* YES */}
            <div
              onClick={() => setEmployed("yes")}
              className={`
                flex items-center justify-between
                w-full
                px-7
                py-5
                rounded-xl
                cursor-pointer
                transition-all
                ${
                  employed === "yes"
                    ? "border-2 border-[#03C987] bg-[#F8FFFC]"
                    : "border border-transparent"
                }
              `}
            >

              <span className="text-lg text-gray-700">
                Yes
              </span>


              <span
                className={`
                  w-7 h-7
                  rounded-full
                  border-2
                  flex items-center justify-center
                  ${
                    employed === "yes"
                      ? "border-[#03C987]"
                      : "border-gray-300"
                  }
                `}
              >
                {employed === "yes" && (
                  <span className="w-3.5 h-3.5 rounded-full bg-[#03C987]" />
                )}
              </span>

            </div>


            {/* NO */}
            <div
              onClick={() => setEmployed("no")}
              className={`
                flex items-center justify-between
                w-full
                px-7
                py-5
                rounded-xl
                cursor-pointer
                transition-all
                ${
                  employed === "no"
                    ? "border-2 border-[#03C987] bg-[#F8FFFC]"
                    : "border border-transparent"
                }
              `}
            >

              <span className="text-lg text-gray-700">
                No
              </span>


              <span
                className={`
                  w-7 h-7
                  rounded-full
                  border-2
                  flex items-center justify-center
                  ${
                    employed === "no"
                      ? "border-[#03C987]"
                      : "border-gray-300"
                  }
                `}
              >
                {employed === "no" && (
                  <span className="w-3.5 h-3.5 rounded-full bg-[#03C987]" />
                )}
              </span>

            </div>

          </div>


          {/* WORK INFORMATION */}
          {employed === "yes" && (
            <div className="mt-10">

              <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-8">
                Work Information
              </h2>


              {/* EMPLOYER NAME */}
              <div className="mb-8">

                <label className="block text-lg text-gray-500 mb-3">
                  Employer Name
                  <span className="text-red-400 ml-1">*</span>
                </label>

                <input
                  type="text"
                  value={employerName}
                  onChange={(e) => setEmployerName(e.target.value)}
                  className="w-full border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none focus:border-[#03C987]"
                />

              </div>


              {/* JOB TITLE */}
              <div className="mb-8">

                <label className="block text-lg text-gray-500 mb-3">
                  Job Title/Position
                  <span className="text-red-400 ml-1">*</span>
                </label>

                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none focus:border-[#03C987]"
                />

              </div>


              {/* PAY DATE + AMOUNT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* PAY DATE */}
                <div>

                  <label className="block text-lg text-gray-500 mb-3">
                    Pay Date
                    <span className="text-red-400 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <input
                      type="date"
                      value={payDate}
                      onChange={(e) => setPayDate(e.target.value)}
                      className="w-full appearance-none border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-500 outline-none focus:border-[#03C987]"
                    />

                  </div>

                </div>


                {/* AMOUNT */}
                <div>

                  <label className="block text-lg text-gray-500 mb-3">
                    Amount
                    <span className="text-red-400 ml-1">*</span>
                  </label>

                  <div className="flex items-center border-b border-gray-200">

                    <span className="text-lg text-gray-400 px-3">
                      €
                    </span>

                    <input
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="0.00"
                      className="flex-1 bg-transparent px-2 py-3 text-lg text-gray-600 outline-none"
                    />

                  </div>

                </div>

              </div>


              {/* PAY FREQUENCY */}
              <div className="mt-8">

                <label className="block text-lg text-gray-500 mb-3">
                  Pay Frequency
                  <span className="text-red-400 ml-1">*</span>
                </label>

                <div className="relative">

                  <select
                    value={payFrequency}
                    onChange={(e) => setPayFrequency(e.target.value)}
                    className="w-full appearance-none border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-500 outline-none focus:border-[#03C987] cursor-pointer"
                  >

                    <option value="">
                      Select
                    </option>

                    <option value="weekly">
                      Weekly
                    </option>

                    <option value="bi-weekly">
                      Bi-weekly
                    </option>

                    <option value="monthly">
                      Monthly
                    </option>

                  </select>


                  <img
                    src={select}
                    alt=""
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 object-contain pointer-events-none"
                  />

                </div>

              </div>

            </div>
          )}


          {/* BUTTONS */}
          <div className="flex justify-end items-center gap-6 mt-20">

            {/* BACK */}
            <Link
              to="/completeprofile2"
              className="flex items-center justify-center border-2 border-gray-300 hover:border-gray-400 text-gray-600 text-lg font-medium rounded-full px-12 py-4 min-w-[150px] transition-colors"
            >
              Back
            </Link>


            {/* SUBMIT */}
      <Link
              to="/ModalDone"
              className="flex items-center justify-center gap-4 bg-[#03C987] hover:bg-[#02b57a] text-white text-lg font-medium rounded-full px-12 py-4 min-w-[280px] transition-colors"
            >
              Submit

              <span className="text-2xl">
                →
              </span>

            </Link>
          </div>

        </form>

      </div>

    </div>
  );
};

export default CompleteProfile3;