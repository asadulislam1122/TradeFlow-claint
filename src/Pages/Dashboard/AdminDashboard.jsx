import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
} from "recharts";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://tradeflow-sarver.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const data = [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: users.length * 10 || 500 },
    { name: "Apr", users: 280 },
    { name: "May", users: 590 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8 font-sans">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Executive Overview
        </h2>
        <p className="text-slate-400 mt-1">
          Real-time system analytics & performance.
        </p>
      </div>

      {/* --- TOP ANALYTICS CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Card 1: Total Users */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl hover:bg-white/10 transition-all cursor-default">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            Total Users
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-black">{users.length}</h3>
            <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-1 rounded-lg">
              ↑ 12%
            </span>
          </div>
        </div>

        {/* Card 2: Active Admins */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl hover:bg-white/10 transition-all cursor-default">
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
            Active Admins
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-black">
              {Math.ceil(users.length * 0.05) || 1}
            </h3>
            <span className="text-slate-400 text-sm font-bold bg-white/5 px-2 py-1 rounded-lg">
              Steady
            </span>
          </div>
        </div>

        {/* Card 3: Growth Rate */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl hover:bg-white/10 transition-all cursor-default">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">
            Growth Rate
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-black">24.8%</h3>
            <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-1 rounded-lg">
              ↑ 4.2%
            </span>
          </div>
        </div>

        {/* Card 4: Activity */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl hover:bg-white/10 transition-all cursor-default">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            Avg. Activity
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-black">88%</h3>
            <span className="text-rose-400 text-sm font-bold bg-rose-400/10 px-2 py-1 rounded-lg">
              ↓ 0.5%
            </span>
          </div>
        </div>
      </div>

      {/* --- CHARTS SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Area Chart */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl shadow-2xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
            User Growth Trend
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#ffffff10"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8" }}
                  dy={10}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl shadow-2xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
            Monthly Engagement
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#ffffff10"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8" }}
                  dy={10}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  content={<CustomTooltip />}
                />
                <Bar dataKey="users" radius={[10, 10, 10, 10]} barSize={35}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e293b] border border-white/20 p-4 rounded-xl shadow-2xl backdrop-blur-lg">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-white text-lg font-black">
          {payload[0].value} Users
        </p>
      </div>
    );
  }
  return null;
};

export default AdminDashboard;
