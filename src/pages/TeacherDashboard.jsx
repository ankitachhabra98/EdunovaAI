import React from "react";

import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Brain,
  LogOut,
  Upload
} from "lucide-react";

function TeacherDashboard() {

  return (

    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <div className="w-72 bg-white/[0.03] border-r border-white/10 backdrop-blur-xl p-6">

        {/* Logo */}
        <h1 className="text-3xl font-light">
          Edunova
          <span className="text-blue-400 font-semibold">
            .AI
          </span>
        </h1>

        {/* Menu */}
        <div className="mt-12 flex flex-col gap-5">

          <div className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-xl cursor-pointer transition">
            <LayoutDashboard size={20} />
            <p>Dashboard</p>
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-xl cursor-pointer transition">
            <Upload size={20} />
            <p>Upload Notes</p>
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-xl cursor-pointer transition">
            <FileText size={20} />
            <p>Assignments</p>
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-xl cursor-pointer transition">
            <Users size={20} />
            <p>Students</p>
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-xl cursor-pointer transition">
            <BarChart3 size={20} />
            <p>Analytics</p>
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-xl cursor-pointer transition">
            <Brain size={20} />
            <p>AI Generator</p>
          </div>

        </div>

        {/* Logout */}
        <button
          className="mt-10 w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-3 rounded-2xl flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Top */}
        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-5xl font-light">
              Teacher Dashboard
            </h2>

            <p className="text-gray-400 mt-3">
              Manage students, assignments, notes, and AI tools.
            </p>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-6 py-3 rounded-2xl">
            + Create New
          </button>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
            <h3 className="text-gray-400">
              Total Students
            </h3>

            <p className="text-4xl font-semibold mt-4 text-blue-400">
              248
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
            <h3 className="text-gray-400">
              Uploaded Notes
            </h3>

            <p className="text-4xl font-semibold mt-4 text-green-400">
              54
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
            <h3 className="text-gray-400">
              Assignments
            </h3>

            <p className="text-4xl font-semibold mt-4 text-yellow-400">
              18
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
            <h3 className="text-gray-400">
              AI Papers Generated
            </h3>

            <p className="text-4xl font-semibold mt-4 text-purple-400">
              92
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-14">

          <h2 className="text-3xl font-light mb-8">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition cursor-pointer">

              <Upload size={40} className="text-blue-400" />

              <h3 className="text-2xl mt-6">
                Upload Notes
              </h3>

              <p className="text-gray-400 mt-3">
                Upload PDFs, PPTs, and study material for students.
              </p>

            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition cursor-pointer">

              <Brain size={40} className="text-purple-400" />

              <h3 className="text-2xl mt-6">
                AI Question Paper
              </h3>

              <p className="text-gray-400 mt-3">
                Generate AI-powered question papers instantly.
              </p>

            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition cursor-pointer">

              <Users size={40} className="text-green-400" />

              <h3 className="text-2xl mt-6">
                Manage Students
              </h3>

              <p className="text-gray-400 mt-3">
                View performance, attendance, and submissions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TeacherDashboard;