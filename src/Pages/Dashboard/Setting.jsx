import React, { useContext } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { FaTools } from "react-icons/fa";

const Setting = () => {
  const { user } = useContext(AuthContext);
  const isDark = localStorage.getItem("theme") === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 
      ${isDark ? "bg-[#070b14] text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div
        className={`max-w-xl w-full p-12 rounded-[3rem] border text-center shadow-2xl relative overflow-hidden
        ${
          isDark
            ? "bg-[#0f172a] border-white/10 shadow-black/60"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Background Decorative Glow */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-600/10 blur-[50px] rounded-full"></div>

        <div className="relative z-10">
          {/* Icon Section */}
          <div className="mb-6 flex justify-center">
            <div className="p-5 bg-blue-500/10 rounded-3xl text-blue-500 animate-bounce">
              <FaTools size={40} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Under Maintenance
          </h2>

          <p
            className={`text-lg font-medium mb-8 leading-relaxed ${
              isDark ? "text-slate-400" : "text-gray-500"
            }`}
          >
            We're sorry! The <span className="text-blue-500">Settings</span>{" "}
            module is currently being upgraded to provide a better experience.
          </p>

          {/* Locked Profile View */}
          <div
            className={`p-6 rounded-[2rem] mb-10 border flex items-center gap-5 transition-all
            ${
              isDark
                ? "bg-white/5 border-white/5"
                : "bg-gray-50 border-gray-100"
            }`}
          >
            <img
              src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              className="w-16 h-16 rounded-2xl object-cover grayscale"
              alt="Profile"
            />
            <div className="text-left">
              <h3 className="font-bold text-sm uppercase tracking-wider">
                {user?.displayName || "Member"}
              </h3>
              <p className="text-[10px] opacity-50 uppercase tracking-[0.1em]">
                Access temporarily locked
              </p>
            </div>
          </div>

          {/* Disabled Update Button with Lal Gol Marker & Cursor */}
          <button
            className="w-full py-5 rounded-2xl font-black text-white bg-slate-800 
            hover:bg-rose-600 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]
            transition-all duration-300 cursor-not-allowed flex items-center justify-center gap-3 group"
          >
            {/* Lal Gol (Red Circle) Animation */}
            <span className="w-3 h-3 bg-rose-500 rounded-full group-hover:bg-white group-hover:scale-125 transition-all"></span>
            UPDATE SETTINGS
          </button>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            Estimated Release: Q1 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setting;
