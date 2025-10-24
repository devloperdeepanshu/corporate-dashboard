import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { marketingData } from "../data/dummyData.js";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

function PpcDashboard() {
  const kpiAnimations = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  const chartAnimations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  // Filter KPIs relevant to PPC
  const ppcKpis = marketingData.kpis.filter((kpi) =>
    ["Leads Generated", "CTR", "Conversion Rate"].includes(kpi.title)
  );

  // Filter Channel data for "Ads"
  const adsData = marketingData.channelPerformance.filter(
    (c) => c.channel === "Ads"
  );

  return (
    <div className="space-y-8 p-4 md:p-8 bg-gray-50 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900"
      >
        PPC Dashboard
      </motion.h1>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ppcKpis.map((kpi, i) => {
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
                {kpi.change}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion by Ad Source */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Conversion by Ad Source
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={marketingData.conversionBySource}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                nameKey="source"
               label={(props) => {
  const percent = Math.round(props.percent * 100);
  return percent === 0 ? "<1%" : `${percent}%`;
}}
              >
                {marketingData.conversionBySource.map((entry, index) => (
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

        {/* Ad Performance */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Ad Channel Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={adsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="channel" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  borderColor: "#e5e7eb",
                }}
              />
              <Bar dataKey="value" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default PpcDashboard;

