import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import dateicon from "../assets/image/dateicon.png";
import select from "../assets/image/select.png";

const CompleteProfile1 = () => {
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dateInputRef = useRef(null);

  // Country codes
  const countryCodes = [
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+234", country: "Nigeria", flag: "🇳🇬" },
    { code: "+1", country: "USA", flag: "🇺🇸" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+39", country: "Italy", flag: "🇮🇹" },
    { code: "+55", country: "Brazil", flag: "🇧🇷" },
    { code: "+7", country: "Russia", flag: "🇷🇺" },
    { code: "+82", country: "South Korea", flag: "🇰🇷" },
    { code: "+31", country: "Netherlands", flag: "🇳🇱" },
    { code: "+34", country: "Spain", flag: "🇪🇸" },
    { code: "+41", country: "Switzerland", flag: "🇨🇭" },
    { code: "+46", country: "Sweden", flag: "🇸🇪" },
    { code: "+47", country: "Norway", flag: "🇳🇴" },
    { code: "+45", country: "Denmark", flag: "🇩🇰" },
    { code: "+358", country: "Finland", flag: "🇫🇮" },
    { code: "+60", country: "Malaysia", flag: "🇲🇾" },
    { code: "+63", country: "Philippines", flag: "🇵🇭" },
    { code: "+64", country: "New Zealand", flag: "🇳🇿" },
    { code: "+27", country: "South Africa", flag: "🇿🇦" },
    { code: "+20", country: "Egypt", flag: "🇪🇬" },
    { code: "+254", country: "Kenya", flag: "🇰🇪" },
    { code: "+256", country: "Uganda", flag: "🇺🇬" },
    { code: "+233", country: "Ghana", flag: "🇬🇭" },
  ];

  const selectedCountry = countryCodes.find(
    (country) => country.code === countryCode
  );

  const openCalendar = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const formatDate = (date) => {
    if (!date) return "";

    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8 py-10 md:px-16 lg:px-20">
      <div className="w-full max-w-4xl">

        {/* TOP */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Complete Profile
          </h1>

          <span className="text-2xl md:text-3xl font-medium text-gray-700">
            1/3
          </span>
        </div>

        {/* PERSONAL INFORMATION */}
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-8">
            Personal Information
          </h2>

          {/* FIRST NAME */}
          <div className="mb-8">
            <label className="block text-lg text-gray-500 mb-3">
              First Name <span className="text-red-400">*</span>
            </label>

            <input
              type="text"
              defaultValue="linda"
              className="w-full border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none focus:border-[#03C987]"
            />
          </div>

          {/* LAST NAME */}
          <div className="mb-8">
            <label className="block text-lg text-gray-500 mb-3">
              Last Name <span className="text-red-400">*</span>
            </label>

            <input
              type="text"
              defaultValue="Rose"
              className="w-full border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-600 outline-none focus:border-[#03C987]"
            />
          </div>

          {/* PHONE NUMBER WITH COUNTRY SELECT */}
          <div className="mb-10">
            <label className="block text-lg text-gray-500 mb-3">
              Phone Number <span className="text-red-400">*</span>
            </label>

            <div className="flex items-center border-b border-gray-200 pb-3">

              {/* COUNTRY SELECT */}
              <div className="relative flex items-center mr-5">

                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="appearance-none bg-transparent text-base text-gray-600 outline-none cursor-pointer pl-8 pr-8 py-2"
                >
                  {countryCodes.map((country) => (
                    <option
                      key={country.code}
                      value={country.code}
                    >
                      {country.flag} {country.country} {country.code}
                    </option>
                  ))}
                </select>

                {/* SELECTED FLAG */}
                <span className="absolute left-1 top-1/2 -translate-y-1/2 text-lg pointer-events-none">
                  {selectedCountry?.flag}
                </span>

                {/* YOUR SELECT ICON */}
                <img
                  src={select}
                  alt=""
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 object-contain pointer-events-none"
                />

              </div>

              {/* PHONE NUMBER */}
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                className="flex-1 bg-transparent outline-none text-base text-gray-600"
              />

            </div>
          </div>

          {/* GENDER + DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* GENDER */}
            <div>
              <label className="block text-lg text-gray-500 mb-3">
                Gender
              </label>

              <div className="relative">

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full appearance-none border-0 border-b border-gray-200 bg-transparent px-3 py-3 text-lg text-gray-400 outline-none focus:border-[#03C987] cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {/* YOUR SELECT ICON */}
                <img
                  src={select}
                  alt=""
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 object-contain pointer-events-none"
                />

              </div>
            </div>

            {/* DATE OF BIRTH */}
            <div>
              <label className="block text-lg text-gray-500 mb-3">
                DOB (Date of Birth)
              </label>

              <div
                onClick={openCalendar}
                className="relative border-b border-gray-200 cursor-pointer"
              >

                <div className="px-3 py-3 text-lg text-gray-400">
                  {dateOfBirth
                    ? formatDate(dateOfBirth)
                    : "dd/mm/yyyy"}
                </div>

                {/* CALENDAR ICON */}
                <img
                  src={dateicon}
                  alt="Calendar"
                  onClick={openCalendar}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 object-contain cursor-pointer"
                />

                {/* REAL DATE INPUT */}
                <input
                  ref={dateInputRef}
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

              </div>
            </div>

          </div>
        </div>

        {/* PROCEED BUTTON */}
        <div className="flex justify-end mt-20">
          <Link
            to="/CompleteProfile2"
            className="flex items-center justify-center gap-4 bg-[#03C987] hover:bg-[#02b57a] text-white text-lg font-medium rounded-full px-14 py-5 min-w-[300px] transition-colors"
          >
            Proceed

            <span className="text-2xl">
              →
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompleteProfile1;