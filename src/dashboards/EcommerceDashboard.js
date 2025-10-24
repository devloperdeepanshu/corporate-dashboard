import React from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { ecommerceData } from "../data/dummyData";

// Colors for the Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function EcommerceDashboard() {
  const kpiAnimations = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  const chartAnimations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8 p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Dashboard Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900"
      >
        Ecommerce Dashboard
      </motion.h1>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {ecommerceData.kpis.map((kpi, i) => {
          // Determine color for the change (green for +, red for -)
          const changeColor = kpi.change.startsWith("+")
            ? "text-green-600"
            : "text-red-600";
            
          return (
            <motion.div
              key={i}
              initial={kpiAnimations.initial}
              animate={kpiAnimations.animate}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-lg p-6 rounded-2xl border border-gray-100"
            >
              <h3 className="text-gray-500 text-sm font-medium">
                {kpi.title}
              </h3>
              <p className="text-3xl font-semibold text-gray-900 mt-2">
                {kpi.value}
              </p>
              <span className={`text-sm font-medium ${changeColor} mt-1 block`}>
                {kpi.change} vs. last month
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid (2-column) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend (Area Chart) */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Sales Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={ecommerceData.salesTrend}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  borderColor: "#e5e7eb",
                }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Product Categories (Pie Chart) */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Product Categories
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ecommerceData.productCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                nameKey="category"
                label={(props) => `${props.category} (${props.percent.toFixed(0)}%)`}
              >
                {ecommerceData.productCategory.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  borderColor: "#e5e7eb",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Second Charts Grid (Example of more charts) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources (Bar Chart) */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Traffic Sources
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={ecommerceData.trafficSource}
              layout="vertical"
              margin={{ left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis
                dataKey="source"
                type="category"
                width={80}
                stroke="#6b7280"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  borderColor: "#e5e7eb",
                }}
              />
              <Bar dataKey="value" fill="#10b981" background={{ fill: "#f0f0f0" }} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Traffic Source Breakdown (List) */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Traffic Source Details
          </h3>
          <ul className="space-y-4 mt-6">
            {ecommerceData.trafficSource.map((src, i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{src.source}</span>
                <span className="font-semibold text-gray-800">{src.value}%</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default EcommerceDashboard;
