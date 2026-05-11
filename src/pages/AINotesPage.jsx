import React, { useState } from "react";

import {
  Plus,
  MessageSquare,
  PanelLeft,
  Trash2
} from "lucide-react";

function AINotesPage() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [chatHistory, setChatHistory] = useState([
    "Introduction to AI",
    "Photosynthesis Notes",
    "Gravity Summary"
  ]);

  // Generate AI Notes
  const handleGenerate = () => {

    if (!input.trim()) return;

    setLoading(true);

    const userMessage = {
      role: "user",
      text: input
    };

    const aiMessage = {
      role: "ai",
      text:
        `📘 AI Notes on "${input}"\n\n` +
        `• Introduction\n` +
        `• Key Concepts\n` +
        `• Important Facts\n` +
        `• Real-world Examples\n\n` +
        `This is a professional AI response placeholder.`
    };

    setTimeout(() => {

      setMessages((prev) => [
        ...prev,
        userMessage,
        aiMessage
      ]);

      setLoading(false);

    }, 1500);

    setChatHistory((prev) => [input, ...prev]);

    setInput("");
  };

  // New Chat
  const handleNewChat = () => {
    setMessages([]);
    setInput("");
  };

  return (

    <div className="h-screen bg-black text-white flex overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      {/* SIDEBAR */}
      {sidebarOpen && (

        <div className="w-72 bg-white/[0.03] backdrop-blur-2xl border-r border-white/10 flex flex-col z-10">

          {/* TOP */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">

            <h1 className="text-xl font-light">
              Edunova
              <span className="text-blue-400 font-semibold">
                .AI
              </span>
            </h1>

            <button
              onClick={() => setSidebarOpen(false)}
              className="hover:bg-white/10 p-2 rounded-lg transition"
            >
              <PanelLeft size={18} />
            </button>

          </div>

          {/* NEW CHAT */}
          <div className="p-4">

            <button
              onClick={handleNewChat}
              className="w-full bg-blue-500 hover:bg-blue-600 rounded-2xl py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
            >
              <Plus size={18} />
              New Chat
            </button>

          </div>

          {/* HISTORY */}
          <div className="flex-1 overflow-y-auto px-3 pb-4">

            <p className="text-gray-400 text-sm mb-3 px-2">
              Recent Chats
            </p>

            <div className="space-y-2">

              {chatHistory.map((chat, index) => (

                <div
                  key={index}
                  className="bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 p-3 rounded-2xl cursor-pointer flex items-center gap-3 border border-white/5"
                >
                  <MessageSquare size={16} />

                  <p className="text-sm truncate">
                    {chat}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* BOTTOM */}
          <div className="p-4 border-t border-white/10">

            <button
              className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-2xl py-3 flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Trash2 size={16} />
              Clear Chats
            </button>

          </div>

        </div>

      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col z-10">

        {/* TOP BAR */}
        <div className="h-16 border-b border-white/10 flex items-center px-6 backdrop-blur-xl">

          {!sidebarOpen && (

            <button
              onClick={() => setSidebarOpen(true)}
              className="hover:bg-white/10 p-2 rounded-lg transition"
            >
              <PanelLeft size={20} />
            </button>

          )}

        </div>

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col items-center">

          {/* HERO SECTION */}
          {messages.length === 0 && (

            <div className="mt-16 w-full max-w-5xl">

              {/* Heading */}
              <div className="text-center">

                <h2 className="text-6xl font-light leading-tight">
                  Your AI Learning Assistant
                </h2>

                <p className="text-gray-400 mt-6 text-xl">
                  Generate notes, summaries, explanations,
                  assignments, and study material instantly.
                </p>

              </div>

              {/* Suggestion Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-16">

                {/* Card 1 */}
                <div
                  onClick={() =>
                    setInput("Generate detailed notes on Artificial Intelligence")
                  }
                  className="bg-white/[0.04] border border-white/10 hover:border-blue-500 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer rounded-3xl p-7 backdrop-blur-xl"
                >
                  <h3 className="text-2xl">
                    📘 Generate Exam Notes
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-6">
                    Create detailed AI-generated study notes instantly.
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  onClick={() =>
                    setInput("Explain Quantum Physics in simple words")
                  }
                  className="bg-white/[0.04] border border-white/10 hover:border-blue-500 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer rounded-3xl p-7 backdrop-blur-xl"
                >
                  <h3 className="text-2xl">
                    🧠 Explain Concepts
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-6">
                    Understand difficult topics in simple language.
                  </p>
                </div>

                {/* Card 3 */}
                <div
                  onClick={() =>
                    setInput("Create a quiz on Photosynthesis")
                  }
                  className="bg-white/[0.04] border border-white/10 hover:border-blue-500 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer rounded-3xl p-7 backdrop-blur-xl"
                >
                  <h3 className="text-2xl">
                    ❓ Generate Quiz
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-6">
                    Practice with AI-generated quiz questions.
                  </p>
                </div>

                {/* Card 4 */}
                <div
                  onClick={() =>
                    setInput("Help me write an assignment on Cyber Security")
                  }
                  className="bg-white/[0.04] border border-white/10 hover:border-blue-500 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer rounded-3xl p-7 backdrop-blur-xl"
                >
                  <h3 className="text-2xl">
                    📝 Assignment Help
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-6">
                    Generate assignments and structured answers instantly.
                  </p>
                </div>

              </div>

            </div>

          )}

          {/* MESSAGES */}
          <div className="w-full max-w-4xl space-y-6 mt-10">

            {/* Loading */}
            {loading && (

              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 max-w-sm backdrop-blur-xl">
                🤖 AI is generating response...
              </div>

            )}

            {/* Chat Messages */}
            {messages.map((msg, index) => (

              <div
                key={index}
                className={`rounded-3xl p-6 whitespace-pre-line shadow-xl backdrop-blur-xl ${
                  msg.role === "user"
                    ? "bg-blue-500/20 ml-auto w-fit max-w-xl border border-blue-500/20"
                    : "bg-white/[0.04] border border-white/10"
                }`}
              >
                {msg.text}
              </div>

            ))}

          </div>

        </div>

        {/* INPUT BAR */}
        <div className="p-6 border-t border-white/10 backdrop-blur-xl">

          <div className="max-w-4xl mx-auto flex gap-3">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI anything..."
              className="flex-1 bg-white/[0.04] backdrop-blur-xl border border-white/10 px-5 py-4 rounded-2xl outline-none text-white focus:border-blue-500 transition"
            />

            <button
              onClick={handleGenerate}
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Generate
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AINotesPage;