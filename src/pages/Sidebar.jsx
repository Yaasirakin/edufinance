import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import edulogo from "../assets/image/edulogo.png";
import menu from "../assets/image/menu.png";
import commerce from "../assets/image/commerce.png";
import moneybag from "../assets/image/moneybag.png";
import settingicon from "../assets/image/Settingicon.png";
import usericon from "../assets/image/usericon.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: menu,
      path: "/dashboard",
    },
    {
      id: "expenses",
      label: "Expenses",
      icon: commerce,
      path: "/expenses",
    },
    {
      id: "income",
      label: "Income",
      icon: moneybag,
      path: "/income",
    },
    {
      id: "aiassistant",
      label: "AI Assistant",
      icon: usericon,
      path: "/aiassistant",
    },
    {
      id: "settings",
      label: "Settings",
      icon: settingicon,
      path: "/settings",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside
      className={`
        relative
        flex
        flex-col
        min-h-screen
        bg-[#001911]
        transition-all
        duration-300
        flex-shrink-0
        ${isCollapsed ? "w-20" : "w-64"}
      `}
    >
      {/* ================= LOGO ================= */}
      <div
        className={`
          h-28
          flex
          items-center
          border-b
          border-white/10
          ${isCollapsed ? "justify-center px-2" : "px-7"}
        `}
      >
        <img
          src={edulogo}
          alt="EduFinance"
          className={`
            object-contain
            transition-all
            duration-300
            ${isCollapsed ? "w-10" : "w-44"}
          `}
        />
      </div>

      {/* ================= COLLAPSE BUTTON ================= */}
      <button
        type="button"
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="
          absolute
          -right-3
          top-24
          z-20
          w-6
          h-6
          rounded-full
          bg-[#03C987]
          text-white
          flex
          items-center
          justify-center
          text-xs
          shadow-lg
          hover:bg-[#02b57a]
          transition
        "
      >
        {isCollapsed ? "→" : "←"}
      </button>

      {/* ================= NAVIGATION ================= */}
      <nav className="flex-1 px-4 py-8">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    group
                    w-full
                    flex
                    items-center
                    gap-4
                    min-h-[48px]
                    px-4
                    rounded-lg
                    transition-all
                    duration-200
                    text-left
                    cursor-pointer
                    ${
                      isActive
                        ? "bg-[#03C987] text-white shadow-md"
                        : "text-white/80 hover:bg-[#063326] hover:text-white"
                    }
                    ${isCollapsed ? "justify-center px-0" : ""}
                  `}
                >
                  {/* ICON */}
                  <img
                    src={item.icon}
                    alt=""
                    className={`
                      w-5
                      h-5
                      object-contain
                      flex-shrink-0
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "brightness-0 invert"
                          : ""
                      }
                    `}
                  />

                  {/* LABEL */}
                  {!isCollapsed && (
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;