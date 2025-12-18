import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/header.jsx';
import useMobileMenu from '../hooks/useMobileMenu.js';

function LandingPage() {
  const navigate = useNavigate();
  const {mobileMenuOpen, setMobileMenuOpen} = useMobileMenu();

  return (
    <>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="bg-gradient-to-b from-blue-200 to-white">
        <div className="max-w-5xl mx-auto py-10 sm:py-16 md:py-8 px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 sm:mb-6 px-4 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            AI-Powered Job Application Tracker
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Track, Analyze & Improve <br className="hidden sm:block" />
            <span className="text-blue-500">Your Job Applications</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 px-2">
            ApplyWise helps you manage job applications, track progress, and
            boost your chances with AI-powered insights — all in one secure platform.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg text-white bg-blue-500 
              hover:bg-blue-700 rounded-lg font-medium transition shadow-md hover:shadow-lg hover:cursor-pointer"
            >
              Contact Us
            </button>

            <button
              onClick={() => navigate('/features')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg text-blue-500 
              border-2 border-blue-700 hover:bg-blue-500 hover:text-white rounded-lg 
              font-medium transition shadow-md hover:shadow-lg hover:cursor-pointer"
            >
              View Features
            </button>
          </div>

          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 px-4">
            Secure authentication • Private data • Built for modern job seekers
          </p>
        </div>
      </div>
    </>
  );
}

export { LandingPage };