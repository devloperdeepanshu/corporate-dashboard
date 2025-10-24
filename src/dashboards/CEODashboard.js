// src/dashboards/CEODashboard.js
import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend,
} from "recharts";
import { financialData } from "../data/dummyData";

function CEODashboard() {
  const COLORS = ["#2563EB", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800"
      >
        CEO Overview
      </motion.h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {financialData.kpis.map((kpi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-blue-500"
          >
            <p className="text-sm text-gray-500">{kpi.title}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-2">{kpi.value}</p>
            <p className={`text-sm mt-1 ${kpi.change && kpi.change.includes("+") ? "text-green-600" : "text-red-600"}`}>
              {kpi.change}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Revenue vs Expenses (Line Chart) */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={financialData.monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={3} />
              <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Expense Breakdown (Pie) */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={financialData.expenseBreakdown}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {financialData.expenseBreakdown.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default CEODashboard;
