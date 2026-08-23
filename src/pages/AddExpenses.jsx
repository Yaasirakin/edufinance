import React, { useState } from "react";

import illustration from "../assets/image/illustration.png";
import receipt from "../assets/image/receipt.png";
import dateicon from "../assets/image/dateicon.png";
import select from "../assets/image/select.png";
import closeicon from "../assets/image/closeicon.png";
import add from "../assets/image/add.png";

const AddExpenses = ({ onClose, onSave }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [showCategory, setShowCategory] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [newCategory, setNewCategory] = useState("");

  const [categories, setCategories] = useState([
    "Food",
    "Transport",
    "Drinks",
    "Shopping",
    "Rent",
    "Utility Bills",
    "Loan",
  ]);

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(value);
  };

  // ==============================
  // SAVE EXPENSE
  // ==============================
  const handleSave = (e) => {
    e.preventDefault();

    if (!category || !amount || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show success modal first.
    // Do NOT close the main modal yet.
    setShowSuccess(true);
  };

  // ==============================
  // ADD CATEGORY
  // ==============================
  const handleAddCategory = (e) => {
    e.preventDefault();

    if (!newCategory.trim()) {
      alert("Please enter a category name.");
      return;
    }

    const categoryName = newCategory.trim();

    setCategories((prev) => [...prev, categoryName]);
    setCategory(categoryName);
    setNewCategory("");
    setShowAddCategory(false);
  };

  // ==============================
  // DONE
  // ==============================
  const handleDone = () => {
    const expense = {
      category,
      amount,
      date,
    };

    // Send the new expense to Expenses.jsx
    if (onSave) {
      onSave(expense);
    }

    // Close success modal
    setShowSuccess(false);

    // Close AddExpenses modal
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* =========================================
          MAIN EDIT EXPENSE MODAL
      ========================================== */}
      {!showSuccess && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-6 py-8">

          <div
            className="
              relative
              w-full
              max-w-[640px]
              h-[700px]
              bg-white
              rounded-2xl
              px-10
              py-8
              shadow-2xl
              flex
              flex-col
            "
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                -translate-x-1/2
                bg-white
                rounded-full
                w-8
                h-8
                flex
                items-center
                justify-center
                shadow-sm
                z-10
                cursor-pointer
              "
            >
              <img
                src={closeicon}
                alt="Close"
                className="w-5 h-5 object-contain"
              />
            </button>


            {/* HEADER */}
            <div className="flex items-center justify-between mb-10">

              <div className="flex items-center gap-3">

                <img
                  src={receipt}
                  alt="Edit expense"
                  className="w-6 h-6 object-contain"
                />

                <h2 className="text-xl font-semibold text-gray-700">
                  Edit Expense
                </h2>

              </div>


              {/* ADD CATEGORY */}
              <button
                type="button"
                onClick={() => {
                  setShowCategory(false);
                  setShowAddCategory(true);
                }}
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-[#F3FBF8]
                  border
                  border-[#D5EFE7]
                  text-sm
                  text-gray-500
                  hover:bg-[#EAF8F3]
                  transition-colors
                  cursor-pointer
                "
              >
                Add Category

                <span className="text-lg leading-none">
                  +
                </span>
              </button>

            </div>


            {/* FORM */}
            <form
              onSubmit={handleSave}
              className="flex flex-col flex-1"
            >

              {/* CATEGORY */}
              <div className="mb-10">

                <label className="block text-sm text-gray-600 mb-4">
                  Category <span className="text-red-400">*</span>
                </label>

                <div className="relative">

                  <button
                    type="button"
                    onClick={() =>
                      setShowCategory(!showCategory)
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      border-b
                      border-gray-200
                      px-2
                      py-4
                      text-left
                      cursor-pointer
                    "
                  >

                    <span
                      className={
                        category
                          ? "text-gray-600"
                          : "text-gray-400"
                      }
                    >
                      {category || "Select"}
                    </span>

                    <img
                      src={select}
                      alt=""
                      className="w-4 h-4 object-contain"
                    />

                  </button>


                  {/* CATEGORY DROPDOWN */}
                  {showCategory && (
                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-full
                        mt-2
                        bg-white
                        border
                        border-gray-200
                        rounded-lg
                        shadow-xl
                        z-30
                        overflow-hidden
                      "
                    >

                      {categories.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setCategory(item);
                            setShowCategory(false);
                          }}
                          className="
                            block
                            w-full
                            text-left
                            px-5
                            py-3
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                            cursor-pointer
                          "
                        >
                          {item}
                        </button>
                      ))}

                    </div>
                  )}

                </div>

              </div>


              {/* AMOUNT + DATE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* AMOUNT */}
                <div>

                  <label className="block text-sm text-gray-600 mb-4">
                    Amount <span className="text-red-400">*</span>
                  </label>

                  <div className="flex items-center border-b border-gray-200">

                    <span className="text-gray-400 text-lg px-2">
                      €
                    </span>

                    <input
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="0.00"
                      className="
                        flex-1
                        bg-transparent
                        px-2
                        py-4
                        text-gray-600
                        outline-none
                      "
                    />

                  </div>

                </div>


                {/* DATE */}
                <div>

                  <label className="block text-sm text-gray-600 mb-4">
                    Date <span className="text-red-400">*</span>
                  </label>

                  <div className="relative border-b border-gray-200">

                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="
                        w-full
                        bg-transparent
                        px-2
                        py-4
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

              </div>


              {/* SAVE BUTTON */}
              <div className="mt-auto flex justify-end">

                <button
                  type="submit"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    bg-[#03C987]
                    hover:bg-[#02b57a]
                    text-white
                    font-medium
                    rounded-full
                    px-10
                    py-4
                    min-w-[170px]
                    transition-colors
                    cursor-pointer
                  "
                >
                  Save

                  <img
                    src={add}
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                </button>

              </div>

            </form>

          </div>
        </div>
      )}


      {/* =========================================
          ADD CATEGORY MODAL
      ========================================== */}
      {showAddCategory && !showSuccess && (
        <div
          className="
            fixed
            inset-0
            z-[70]
            bg-black/40
            flex
            items-center
            justify-center
            px-5
          "
        >

          <div
            className="
              relative
              w-full
              max-w-[360px]
              bg-white
              rounded-2xl
              px-6
              py-6
              shadow-2xl
            "
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setShowAddCategory(false)}
              className="
                absolute
                right-4
                top-4
                w-7
                h-7
                flex
                items-center
                justify-center
                cursor-pointer
              "
            >
              <img
                src={closeicon}
                alt="Close"
                className="w-5 h-5 object-contain"
              />
            </button>


            {/* TITLE */}
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              Add Category
            </h2>


            {/* FORM */}
            <form onSubmit={handleAddCategory}>

              <label className="block text-sm text-gray-600 mb-2">
                Title <span className="text-red-400">*</span>
              </label>

              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Add Category"
                autoFocus
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-lg
                  px-4
                  py-3
                  text-gray-600
                  outline-none
                  focus:border-[#03C987]
                "
              />


              {/* SAVE CATEGORY */}
              <button
                type="submit"
                className="
                  w-full
                  mt-6
                  bg-[#03C987]
                  hover:bg-[#02b57a]
                  text-white
                  font-medium
                  rounded-full
                  py-3
                  cursor-pointer
                  transition-colors
                "
              >
                Save Category
              </button>

            </form>

          </div>

        </div>
      )}


      {/* =========================================
          EXPENSE UPDATED MODAL
      ========================================== */}
      {showSuccess && (
        <div
          className="
            fixed
            inset-0
            z-[80]
            bg-black/50
            flex
            items-center
            justify-center
            px-5
          "
        >

          <div
            className="
              w-full
              max-w-[380px]
              bg-white
              rounded-2xl
              px-6
              py-7
              shadow-2xl
              text-center
              animate-[successModal_0.3s_ease-out]
            "
          >

            {/* IMAGE */}
            <div className="flex justify-center mb-5">

              <img
                src={illustration}
                alt="Expense updated"
                className="
                  w-full
                  h-28
                  object-contain
                  animate-[successPop_0.6s_ease-out]
                "
              />

            </div>


            {/* MESSAGE */}
            <h2 className="text-2xl font-semibold text-gray-700">
              Expense Updated
            </h2>


            {/* DONE */}
            <button
              type="button"
              onClick={handleDone}
              className="
                w-full
                mt-7
                bg-[#263847]
                hover:bg-[#1f303c]
                text-white
                font-medium
                rounded-full
                py-3.5
                cursor-pointer
                transition-colors
              "
            >
              Done
            </button>

          </div>

        </div>
      )}


      {/* =========================================
          ANIMATIONS
      ========================================== */}
      <style>
        {`
          @keyframes successModal {
            from {
              opacity: 0;
              transform: scale(0.92) translateY(12px);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes successPop {
            0% {
              opacity: 0;
              transform: scale(0.4);
            }

            70% {
              opacity: 1;
              transform: scale(1.08);
            }

            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default AddExpenses;