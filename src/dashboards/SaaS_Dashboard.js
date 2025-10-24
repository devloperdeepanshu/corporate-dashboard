import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { saasData } from "../data/dummyData.js";

const COLORS = ["#3f51b5", "#10b981", "#f59e0b", "#ef4444"];

// Simple component for KPI cards
const KpiCard = ({ title, value, change, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: delay * 0.1 }}
    className="bg-white p-6 rounded-2xl shadow-md"
  >
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-3xl font-semibold text-gray-800 mt-2">{value}</p>
    <span
      className={`${
        change.startsWith("+") ? "text-green-600" : "text-red-600"
      } text-sm`}
    >
      {change}
    </span>
  </motion.div>
);

function SaaSDashboard() {
  const mrrData = saasData.mrrTrend;
  const churnData = saasData.churnBreakdown.map((item, index) => ({
    name: item.reason,
    value: item.value,
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800"
      >
        SaaS Dashboard
      </motion.h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {saasData.kpis.map((kpi, i) => (
          <KpiCard
            key={i}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            delay={i}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* MRR Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4">MRR Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={mrrData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="MRR"
                stroke="#3f51b5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Churn Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4">Churn Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={churnData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {churnData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default SaaSDashboard;

