import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-60 sm:pt-68 lg:pt-80 text-center px-4">
      <h1 className="text-4xl font-bold mb-2">404 – Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, I can't find the page you’re looking for.</p>
      <Link
        to="/"
        className="mt-2 inline-block px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}