import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AINotesPage from "./pages/AINotesPage";
import TeacherDashboard from "./pages/TeacherDashboard";

// Protection
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Landing */}
      <Route path="/" element={<LandingPage />} />

      {/* Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Student Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* AI Notes Workspace */}
      <Route
        path="/ai-notes"
        element={
          <ProtectedRoute>
            <AINotesPage />
          </ProtectedRoute>
        }
      />

      {/* Teacher Dashboard */}
      <Route
        path="/teacher-dashboard"
        element={
          <ProtectedRoute>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;