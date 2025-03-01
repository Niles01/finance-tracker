import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Income", value: 50000 },
  { name: "Expense", value: 20000 },
  { name: "Savings", value: 30000 },
];

const COLORS = ["#00C49F", "#FF4444", "#0088FE"]; // Green, Red, Blue

const FinancePieChart = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default FinancePieChart;
