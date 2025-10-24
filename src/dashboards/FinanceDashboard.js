// src/dashboards/FinanceDashboard.js

import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";
// 💡 FIX 1: Correctly import the main financialData object
import { financialData } from "../data/dummyData";

function FinanceDashboard() {
  return (
    <div className="space-y-8">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-gray-800">
        Finance Dashboard
      </motion.h1>

      {/* This part is fine, but you could also populate it from financialData.kpis */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Total Revenue", value: "$4.6M", change: "+7%" },
          { title: "Total Expenses", value: "$2.1M", change: "-3%" },
          { title: "Profit Margin", value: "54%", change: "+2%" },
        ].map((card, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="text-gray-500 text-sm">{card.title}</h3>
            <p className="text-2xl font-semibold text-gray-800 mt-2">{card.value}</p>
            <span className="text-green-600 text-sm">{card.change}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Revenue Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            {/* 💡 FIX 2: Use the nested monthlyRevenue array */}
            <LineChart data={financialData.monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            {/* 💡 FIX 3: Use the nested expenseBreakdown array */}
            <AreaChart data={financialData.expenseBreakdown}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              {/* 💡 FIX 4: Change dataKey to "value" to match the data */}
              <Area type="monotone" dataKey="value" stroke="#f59e0b" fill="#fde68a" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default FinanceDashboard;