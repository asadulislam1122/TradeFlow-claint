import React from "react";
import {
  FaGlobeAmericas,
  FaShieldAlt,
  FaShippingFast,
  FaUsers,
} from "react-icons/fa";

const AboutUs = () => {
  const isDark = localStorage.getItem("theme") === "dark";

  const stats = [
    {
      label: "Global Partners",
      value: "200+",
      icon: <FaGlobeAmericas className="text-blue-500" />,
    },
    {
      label: "Daily Shipments",
      value: "1.5K",
      icon: <FaShippingFast className="text-emerald-500" />,
    },
    {
      label: "Secure Trade",
      value: "100%",
      icon: <FaShieldAlt className="text-purple-500" />,
    },
    {
      label: "Active Users",
      value: "50K",
      icon: <FaUsers className="text-orange-500" />,
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 md:p-12 font-sans transition-colors duration-500 
      ${isDark ? "bg-[#070b14] text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Section 1: Hero --- */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Connecting Global Markets
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg font-medium leading-relaxed ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            TradeFlow is a premier modern web platform designed to simplify
            global commerce. We empower businesses to manage exports, discover
            world-class products, and facilitate seamless imports with just a
            single click.
          </p>
        </div>

        {/* --- Section 2: Stats Grid --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-[2.5rem] border transition-all hover:-translate-y-2
              ${
                isDark
                  ? "bg-[#0f172a] border-white/5 shadow-2xl shadow-black/40"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <h4 className="text-3xl font-black mb-1">{stat.value}</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- Section 3: Our Mission --- */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 rounded-[3rem] border
          ${
            isDark
              ? "bg-white/5 border-white/5"
              : "bg-white border-gray-100 shadow-sm"
          }`}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
              alt="Global Logistics"
              className="rounded-[2rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-xl hidden md:flex">
              <span className="text-white font-black text-center text-sm leading-tight">
                ESTD
                <br />
                2024
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold italic border-l-4 border-blue-500 pl-6">
              Our Mission
            </h3>
            <p
              className={`text-base leading-relaxed ${
                isDark ? "text-slate-400" : "text-gray-600"
              }`}
            >
              To build a bridge between local manufacturers and global
              consumers. We believe that international trade should be
              accessible to everyone, regardless of their location. Our platform
              ensures real-time sync, verified ratings, and secure data handling
              to make your trading experience risk-free and efficient.
            </p>
            <ul className="space-y-4">
              {[
                "One-click Import System",
                "Global Export Management",
                "Real-time Stock Tracking",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-bold text-sm"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Section 4: Contact CTA --- */}
        <div className="mt-20 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4">
            Get In Touch
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-5 rounded-2xl transition-all active:scale-95 shadow-xl shadow-blue-600/20">
            CONTACT OUR TRADE EXPERTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
