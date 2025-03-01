import React, { useEffect } from "react";
import FinancePieChart from "./Piechart";
import { Link } from "react-router-dom";

const FinanceCard = ({ title, amount, type }) => {
    
    const colors = {
        income: "text-green-500",
        expense: "text-red-500",
        savings: "text-blue-500",
    };

    return (
        <div className={`rounded-xl shadow-lg p-6 bg-gray-800 ${colors[type]}`}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-3xl font-bold mt-2">₹{amount}</p>
        </div>
    );
};

const Dashboard = () => {

    useEffect(() => {
      document.title = "FinanceTracker - DashBoard"
    }, [])
    
    
    return (
        <div className="bg-gray-900 min-h-screen pt-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
                <FinanceCard title="Income" amount="50,000" type="income" />
                <FinanceCard title="Expense" amount="20,000" type="expense" />
                <FinanceCard title="Savings" amount="30,000" type="savings" />
            </div>
            <Link to={'/finance'} className="rounded bg-blue-600 mx-6 px-3 py-2 text-center md:w-fit">Add Finance To Account</Link>
            <div className="mt-6 bg-gray-800">
                <h1 className="text-3xl text-white text-center font-medium pt-4"><span className='text-blue-500'>Pie</span><span className="text-red-500">Ch</span><span className="text-green-500">art</span></h1>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <FinancePieChart />
                    <div className="text-white text-center md:text-left mt-6 md:w-10/12 p-3">
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ad dignissimos officiis fugiat velit provident.</p><br />
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, voluptates inventore et, quo quos mollitia recusandae maiores culpa quia earum itaque dolor quas aspernatur ex ipsa cum debitis ullam aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi inventore labore non mollitia rem illum qui laboriosam obcaecati quis, pariatur rerum delectus natus nulla nesciunt provident reiciendis dicta explicabo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
