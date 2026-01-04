import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  CartesianGrid,
} from "recharts";

const UserDashboard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://tradeflow-sarver.vercel.app/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  // Charts-er jonno modern mock data (Apnar card count use kore)
  const chartData = [
    { name: "Week 1", usage: 400, limit: 1000 },
    { name: "Week 2", usage: 700, limit: 1000 },
    { name: "Week 3", usage: cards.length * 20 || 500, limit: 1000 },
    { name: "Week 4", usage: 600, limit: 1000 },
  ];

  // Circular Chart-er jonno data
  const radialData = [
    { name: "Storage", value: 70, fill: "#3b82f6" },
    { name: "CPU", value: 45, fill: "#10b981" },
    { name: "Memory", value: cards.length > 5 ? 85 : 30, fill: "#6366f1" },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white p-6 md:p-12 font-sans">
      {/* Header Section */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            User Insights
          </h2>
          <p className="text-slate-400 mt-2 font-medium italic">
            Analyzing {cards.length} active assets in your workspace.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <span className="text-xs text-slate-500 block">Total Items</span>
            <span className="text-xl font-bold">{cards.length}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Large Main Chart (Area Chart) */}
        <div className="lg:col-span-2 bg-[#0f172a]/50 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold tracking-tight uppercase text-slate-300">
              Resource Usage Trend
            </h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="w-3 h-3 rounded-full bg-indigo-500/30"></span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#ffffff05"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  dy={15}
                />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="usage"
                  stroke="#3b82f6"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorUsage)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Unique Circular Chart (Radial Bar Chart) */}
        <div className="bg-[#0f172a]/50 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-8 text-center text-slate-300">
            System Performance
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="30%"
                outerRadius="100%"
                barSize={15}
                data={radialData}
              >
                <RadialBar
                  minAngle={15}
                  label={{
                    position: "insideStart",
                    fill: "#fff",
                    fontSize: 10,
                  }}
                  background
                  clockWise
                  dataKey="value"
                  radius={[10, 10, 10, 10]}
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-2">
            {radialData.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-slate-400">{item.name}</span>
                <span className="font-bold" style={{ color: item.fill }}>
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Bottom Stat Bar */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {["System Health", "Cloud Sync", "Encryption", "API Status"].map(
          (text, i) => (
            <div
              key={i}
              className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center justify-between"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {text}
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e293b]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
          {label}
        </p>
        <p className="text-white text-xl font-black">
          {payload[0].value}{" "}
          <span className="text-xs font-normal text-blue-400">Units</span>
        </p>
      </div>
    );
  }
  return null;
};

export default UserDashboard;
