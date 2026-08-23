import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Forgetpassword from "./pages/Forgetpassword";
import NewPassword from "./pages/NewPassword";
import Modal from "./pages/Modal";
import Frame1 from "./pages/Frame1";

import Sidebar from "./pages/sidebar";
import Dashboard from "./pages/Dashboard";

import CompleteProfile1 from "./pages/CompleteProfile1";
import CompleteProfile2 from "./pages/CompleteProfile2";
import CompleteProfile3 from "./pages/CompleteProfile3";
import ModalDone from "./pages/ModalDone";

import Expenses from "./pages/Expenses";
import AddExpenses from "./pages/AddExpenses";
import Income from "./pages/Income";
import AddIncome from "./pages/AddIncome";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";


// ===============================
// DASHBOARD LAYOUT
// ===============================

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* PAGE CONTENT */}
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>

    </div>
  );
};


// ===============================
// SETTINGS
// ===============================




// ===============================
// APP
// ===============================

function App() {
  return (
    <Router>

      <Routes>

        {/* =================================
            NORMAL PAGES
            NO SIDEBAR
        ================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/signin"
          element={<Signin />}
        />

        <Route
          path="/signup"
          element={<SignUp />}
        />

        <Route
          path="/forgetpassword"
          element={<Forgetpassword />}
        />

        <Route
          path="/newpassword"
          element={<NewPassword />}
        />

        <Route
          path="/modal"
          element={<Modal />}
        />

        <Route
          path="/frame1"
          element={<Frame1 />}
        />


        {/* =================================
            COMPLETE PROFILE
        ================================= */}

        <Route
          path="/completeprofile1"
          element={<CompleteProfile1 />}
        />

        <Route
          path="/completeprofile2"
          element={<CompleteProfile2 />}
        />

        <Route
          path="/completeprofile3"
          element={<CompleteProfile3 />}
        />

        <Route
          path="/modaldone"
          element={<ModalDone />}
        />


        {/* =================================
            DASHBOARD + SIDEBAR
        ================================= */}

        <Route element={<DashboardLayout />}>

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* EXPENSES */}
          <Route
            path="/expenses"
            element={<Expenses />}
          />

          {/* ADD EXPENSES */}
          <Route
            path="/addexpenses"
            element={<AddExpenses />}
          />

          {/* INCOME */}
          <Route
            path="/income"
            element={<Income />}
          />

          {/* ADD INCOME */}
          <Route
            path="/addincome"
            element={<AddIncome />}
          />

          {/* AI ASSISTANT */}
          <Route
            path="/aiassistant"
            element={<AIAssistant />}
          />

          {/* SETTINGS */}
          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </Router>
  );
}

export default App;