"use client";

import React from "react";

export default function ScrollToTop() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("about") || document.documentElement;
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Go to About"
      title="Home"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10.707 1.707a1 1 0 00-1.414 0l-7 7A1 1 0 003 10h1v7a1 1 0 001 1h4a1 1 0 001-1v-4h2v4a1 1 0 001 1h4a1 1 0 001-1v-7h1a1 1 0 00.707-1.707l-7-7z" />
      </svg>
    </button>
  );
}
