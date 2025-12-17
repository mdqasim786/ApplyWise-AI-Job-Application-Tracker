import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/header.jsx';

function LandingPage() {
    const navigate = useNavigate();

  return (
  <>
  <Header />
  <div className="bg-gradient-to-b from-blue-200 to-white">
    <div className="max-w-5xl mx-auto py-10 text-center">
      <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
        AI-Powered Job Application Tracker
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Track, Analyze & Improve <br />
        <span className="text-blue-500">Your Job Applications</span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
        ApplyWise helps you manage job applications, track progress, and
        boost your chances with AI-powered insights — all in one secure platform.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={() => navigate('/contact')}
          className="px-8 py-3 text-white bg-blue-500 hover:bg-blue-700 rounded-lg font-medium transition hover:cursor-pointer"
        >
          Contact Us
        </button>

        <button
          onClick={() => navigate('/features')}
          className="px-8 py-3 text-blue-500 border border-blue-700 hover:bg-blue-500 hover:text-white rounded-lg font-medium transition hover:cursor-pointer"
        >
          View Features
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Secure authentication • Private data • Built for modern job seekers
      </p>
    </div>
  </div>
  </>
);
}

export { LandingPage };