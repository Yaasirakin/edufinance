import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import searchicon from "../assets/image/searchicon.png";
import select from "../assets/image/select.png";

const CompleteProfile2 = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [country, setCountry] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [major, setMajor] = useState("");
  const [schoolFee, setSchoolFee] = useState("");
  const [duration, setDuration] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Australia",
    "Austria",
    "Belgium",
    "Brazil",
    "Canada",
    "China",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Germany",
    "Ghana",
    "India",
    "Italy",
    "Japan",
    "Kenya",
    "Mexico",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Portugal",
    "Russia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Uganda",
    "United Kingdom",
    "United States",
  ];

  const durations = [
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "More than 6 years",
  ];

  // Close country dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFeeChange = (e) => {
    const cleanValue = e.target.value.replace(/[^0-9.]/g, "");
    setSchoolFee(cleanValue);
  };

  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProceed = (e) => {
    e.preventDefault();

    if (
      !country ||
      !institutionName ||
      !major ||
      !schoolFee ||
      !duration
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    navigate("/complete-profile-3");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8 md:px-10 lg:px-14">

      {/* CENTER EVERYTHING */}
      <div className="w-full max-w-4xl mx-auto">

        {/* TOP */}
        <div className="flex items-center justify-between mb-12">

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Complete Profile
          </h1>

          <span className="text-2xl md:text-3xl font-medium text-gray-700">
            2/3
          </span>

        </div>


        {/* EDUCATIONAL INFORMATION */}
        <form onSubmit={handleProceed}>

          <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-8">
            Educational Information
          </h2>


          {/* COUNTRY */}
          <div className="mb-8" ref={dropdownRef}>

            <label className="block text-lg text-gray-500 mb-3">
              Country <span className="text-red-400">*</span>
            </label>

            <div className="relative">

              <div
                className="flex items-center border-b border-gray-200 pb-3 cursor-pointer"
                onClick={() =>
                  setShowCountryDropdown(!showCountryDropdown)
                }
              >

                <img
                  src={searchicon}
                  alt=""
                  className="w-5 h-5 mr-3 opacity-60"
                />

                <span
                  className={`flex-1 text-lg ${
                    country
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {country || "Select"}
                </span>

                <img
                  src={select}
                  alt=""
                  className="w-4 h-4"
                />

              </div>


              {/* COUNTRY DROPDOWN */}
              {showCountryDropdown && (
                <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">

                  {/* SEARCH */}
                  <div className="p-3 border-b border-gray-200">

                    <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2">

                      <img
                        src={searchicon}
                        alt=""
                        className="w-5 h-5 mr-2 opacity-50"
                      />

                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchTerm}
                        onChange={(e) =>
                          setSearchTerm(e.target.value)
                        }
                        className="flex-1 outline-none text-gray-600"
                        autoFocus
                      />

                    </div>

                  </div>


                  {/* COUNTRIES */}
                  <div className="max-h-52 overflow-y-auto">

                    {filteredCountries.length > 0 ? (

                      filteredCountries.map((c) => (
                        <button
                          type="button"
                          key={c}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700"
                          onClick={() => {
                            setCountry(c);
                            setShowCountryDropdown(false);
                            setSearchTerm("");
                          }}
                        >
                          {c}
                        </button>
                      ))

                    ) : (

                      <div className="px-4 py-3 text-gray-400">
                        No countries found
                      </div>

                    )}

                  </div>

                </div>
              )}

            </div>
          </div>


          {/* INSTITUTION NAME */}
          <div className="mb-8">

            <label className="block text-lg text-gray-500 mb-3">
              Institution Name <span className="text-red-400">*</span>
            </label>

            <input
              type="text"
              value={institutionName}
              onChange={(e) =>
                setInstitutionName(e.target.value)
              }
              className="w-full border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none focus:border-[#03C987]"
            />

          </div>


          {/* MAJOR / PROGRAM */}
          <div className="mb-8">

            <label className="block text-lg text-gray-500 mb-3">
              Major/Program <span className="text-red-400">*</span>
            </label>

            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none focus:border-[#03C987]"
            />

          </div>


          {/* SCHOOL FEE + DURATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* SCHOOL FEE */}
            <div>

              <label className="block text-lg text-gray-500 mb-3">
                School Fee <span className="text-red-400">*</span>
              </label>

              <div className="border-b border-gray-200 pb-1 flex items-center">

                <span className="text-lg text-gray-400 mr-2">
                  €
                </span>

                <input
                  type="text"
                  value={schoolFee}
                  onChange={handleFeeChange}
                  placeholder="0.00"
                  className="flex-1 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none"
                />

              </div>

            </div>


            {/* DURATION */}
            <div>

              <label className="block text-lg text-gray-500 mb-3">
                Duration <span className="text-red-400">*</span>
              </label>

              <div className="relative">

                <select
                  value={duration}
                  onChange={(e) =>
                    setDuration(e.target.value)
                  }
                  className="w-full appearance-none border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none focus:border-[#03C987] cursor-pointer"
                >
                  <option value="">
                    Select
                  </option>

                  {durations.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>

                <img
                  src={select}
                  alt=""
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                />

              </div>

            </div>

          </div>


          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between items-center mt-20">

            {/* BACK */}
            <Link
              to="/completeprofile1"
              className="flex items-center justify-center bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-600 text-lg font-medium rounded-full px-10 py-4 min-w-[150px] transition-colors"
            >
              ← Back
            </Link>


            {/* PROCEED */}
          <Link
            to="/CompleteProfile3"
            className="flex items-center justify-center gap-4 bg-[#03C987] hover:bg-[#02b57a] text-white text-lg font-medium rounded-full px-12 py-4 min-w-[280px] transition-colors"
          >
            Proceed

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

export default CompleteProfile2;