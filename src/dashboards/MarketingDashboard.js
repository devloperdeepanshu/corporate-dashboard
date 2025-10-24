import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { marketingData } from "../data/dummyData";

const COLORS = ["#10B981", "#34D399", "#6EE7B7", "#A7F3D0"];

function MarketingDashboard() {
  return (
    <div className="p-6 space-y-6">
      <motion.h2
        className="text-3xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Marketing Dashboard
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {marketingData.kpis.map((kpi, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white rounded-2xl shadow-md border-l-4 border-green-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-gray-500 text-sm">{kpi.title}</p>
            <p className="text-xl font-semibold text-gray-800">{kpi.value}</p>
            <p
              className={`text-sm ${
                kpi.change.includes("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {kpi.change}
            </p>
          </motion.div>
        ))}
      </div>

      {/* TRAFFIC TREND */}
      <motion.div
        className="bg-white rounded-2xl shadow-md p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Website Traffic Trend
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={marketingData.trafficTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#10B981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* CHANNEL PERFORMANCE */}
      <motion.div
        className="bg-white rounded-2xl shadow-md p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Channel Performance
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={marketingData.channelPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* CONVERSION BY SOURCE */}
      <motion.div
        className="bg-white rounded-2xl shadow-md p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Conversion by Source
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={marketingData.conversionBySource}
              dataKey="value"
              nameKey="source"
              outerRadius={100}
              fill="#10B981"
              label
            >
              {marketingData.conversionBySource.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}

export default MarketingDashboard;
