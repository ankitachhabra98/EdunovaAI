import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const username = email.split("@")[0];

    // ✅ IMPORTANT: proper login flags
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl">

        <h1 className="text-4xl text-center text-white">
          Edunova<span className="text-blue-400">.AI</span>
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 px-4 py-3 rounded-xl text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 px-4 py-3 rounded-xl text-white outline-none"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-xl"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default LoginPage;