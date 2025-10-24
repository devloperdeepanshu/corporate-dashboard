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
  LineChart,
  Line,
} from "recharts";
import { marketingData } from "../data/dummyData.js";

function ContentMarketingDashboard() {
  const kpiAnimations = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  const chartAnimations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  // Filter KPIs relevant to Content Marketing
  const contentKpis = marketingData.kpis.filter((kpi) =>
    ["Website Visitors", "Leads Generated"].includes(kpi.title)
  );

  return (
    <div className="space-y-8 p-4 md:p-8 bg-gray-50 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900"
      >
        Content Marketing Dashboard
      </motion.h1>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contentKpis.map((kpi, i) => {
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
        {/* Content Reach (Traffic Trend) */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Content Reach (Monthly Visits)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketingData.trafficTrend}>
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
              <Line
                type="monotone"
                dataKey="visits"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Performing Channels */}
        <motion.div
          initial={chartAnimations.initial}
          animate={chartAnimations.animate}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Channels
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={marketingData.channelPerformance}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="channel" type="category" stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  borderColor: "#e5e7eb",
                }}
              />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default ContentMarketingDashboard;

