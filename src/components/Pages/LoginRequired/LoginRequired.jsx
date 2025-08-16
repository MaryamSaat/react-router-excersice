import React from "react";
import { Link } from "react-router-dom";

const LoginRequired = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white p-10 rounded-3xl shadow-2xl text-center max-w-md mx-4 border border-gray-700">
        <div className="text-7xl mb-6 animate-bounce">🔒</div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Access Restricted</h1>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">You need to log in to your account to view this page</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <Link to="/" className="btn btn-primary w-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
            Back to Home
          </Link>
          <div className="text-sm text-gray-400 bg-gray-800 p-3 rounded-lg  ">💡 Click the "Log In" button at the top of the page</div>
        </div>
      </div>
    </div>
  );
};

export default LoginRequired;
