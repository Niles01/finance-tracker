import { useUser } from "@clerk/clerk-react";
import { Mail, User, Phone, IndianRupee } from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // Backend URL

const Section = () => {
  useEffect(() => {
    document.title = "FinanceTracker - UserDetails";
  }, []);

  const { user } = useUser();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("income");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amount <= 0 || isNaN(amount)) return;

    try {
      const response = await axios.post(`${backendUrl}/add_amount`, {
        amount: amount, // Send amount to backend
      });

      console.log(response.data); // Log backend response

      if (category === "income") {
        setIncome(income + Number(amount));
      } else if (category === "expense") {
        setExpense(expense + Number(amount));
      }

      setAmount(""); // Clear input field
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-5">
      <div className="container text-white flex md:flex-row flex-col gap-5 justify-center mx-auto md:pt-18 pt-8 px-3 md:px-0">
        <div className="bg-gray-800 p-3 rounded-lg shadow-xl w-full h-fit md:h-100">
          <img alt={user?.firstName} src={user?.imageUrl} className="rounded-full md:h-40 md:w-40 w-20 h-20" />
          <div className="flex flex-col md:gap-4 gap-3 pt-4">
            <div><User size={20} className="inline-flex" /> {user?.fullName}</div>
            <div><Mail size={20} className="inline-flex" /> {user?.primaryEmailAddress?.emailAddress}</div>
            <div><Phone size={20} className="inline-flex" /> {user?.primaryPhoneNumber?.phoneNumber || "No phone number added"}</div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full h-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-2xl mb-2">Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2 p-2 rounded-md border-2 border-gray-600 bg-gray-700 text-white"
                placeholder="Enter amount in ₹"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 p-2 rounded-md border-2 border-gray-600 bg-gray-700 text-white"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
            >
              Add Transaction
            </button>
          </form>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full h-fit md:h-100">
          <h1 className="text-2xl">Savings</h1>
          <div className="flex text-5xl text-green-500 justify-center items-center pt-8">
            <IndianRupee size={40} className="mt-1" /> {income - expense}
          </div>
          <div className="text-sm text-center text-gray-300 mt-2">
            Money present in your account
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-blue-600 w-fit mt-5 px-3 py-2 mx-auto">Add Your Finance</div>
    </div>
  );
};

export default Section;
