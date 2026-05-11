import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AssignmentPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    if (!file) {
      alert("Please select a file first");
      return;
    }

    // simulate upload
    setTimeout(() => {
      setSubmitted(true);

      // save progress locally
      localStorage.setItem("lastAssignment", id);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      {/* Header */}
      <div className="flex justify-between items-center">

        <h1 className="text-2xl">
          📤 Assignment - <span className="text-blue-400">{id}</span>
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="bg-white/10 px-4 py-2 rounded-xl"
        >
          Back
        </button>

      </div>

      {/* Upload Box */}
      <div className="mt-10 max-w-xl bg-white/5 border border-white/10 p-6 rounded-2xl">

        {!submitted ? (
          <>
            <h2 className="text-xl mb-4">
              Upload Your Assignment
            </h2>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full bg-white/10 p-3 rounded-xl"
            />

            <button
              onClick={handleSubmit}
              className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-xl"
            >
              Submit Assignment
            </button>
          </>
        ) : (
          <div className="text-center">

            <h2 className="text-2xl text-green-400">
              Assignment Submitted 🎉
            </h2>

            <p className="text-gray-400 mt-2">
              Your work has been saved successfully
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default AssignmentPage;