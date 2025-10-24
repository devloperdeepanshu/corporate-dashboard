import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { hrData } from "../data/dummyData";

function HRDashboard() {
  const COLORS = ["#6366F1", "#10B981", "#F59E0B"];
  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800">HR Insights</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3">Employee Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={hrData.growth}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="employees" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3">Department Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={hrData.departments} dataKey="value" nameKey="name" outerRadius={120}>
                {hrData.departments.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
