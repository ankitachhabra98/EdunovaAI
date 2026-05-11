import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
  Brain
} from "lucide-react";

function Dashboard() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // 🔐 login protection
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("username");

    if (!loggedIn || !storedUser) {
      navigate("/login");
    } else {
      setUsername(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-white/5 border-r border-white/10 p-6 hidden md:block">

        {/* Logo */}
        <h1 className="text-3xl font-light">
          Edunova<span className="text-blue-400 font-semibold">.AI</span>
        </h1>

        {/* Menu */}
        <div className="mt-10 flex flex-col gap-6 text-gray-300">

          <div className="flex items-center gap-3 text-white">
            <LayoutDashboard size={20} />
            <p>Dashboard</p>
          </div>

          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            <BookOpen size={20} />
            <p>AI Tools</p>
          </div>

          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            <BarChart3 size={20} />
            <p>Analytics</p>
          </div>

          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            <Settings size={20} />
            <p>Settings</p>
          </div>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-10 flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center">

          <div>
            <h2 className="text-4xl font-light">
              Welcome Back 👋
            </h2>

            <p className="text-gray-400 mt-2">
              Learn anything with AI assistance
            </p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">

            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
              {username?.charAt(0).toUpperCase() || "U"}
            </div>

            <div>
              <p className="text-sm">{username || "User"}</p>
              <p className="text-xs text-gray-400">Student</p>
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl">AI Notes</h3>
            <p className="text-4xl mt-3 text-blue-400">∞</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl">Topics Learned</h3>
            <p className="text-4xl mt-3 text-green-400">0</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl">AI Sessions</h3>
            <p className="text-4xl mt-3 text-purple-400">0</p>
          </div>

        </div>

        {/* MAIN AI CARD */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">

          <div className="flex items-center gap-3">

            <Brain className="text-blue-400" size={28} />

            <h2 className="text-2xl font-light">
              AI Learning Engine
            </h2>

          </div>

          <p className="text-gray-400 mt-3">
            Generate notes, summaries, and explanations for any topic instantly.
          </p>

          <button
            onClick={() => navigate("/ai-notes")}
            className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
          >
            🚀 Start Learning with AI
          </button>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;