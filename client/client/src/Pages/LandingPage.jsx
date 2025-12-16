import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
    <div className='bg-white shadow-sm border-b border-gray-500'>
      <div className='max-w-7xl mx-auto px-6 py-2 flex justify-between'>
      <img src='../public/images/logo.png' alt='Logo' className='h-12 w-35' />
      <nav className='hidden md:flex items-center gap-15'>
      <Link 
        to="/home" 
        className="text-gray-700 text-base font-medium hover:text-blue-500 transition"
      >
        Home
      </Link>

      <Link 
        to="/features" 
        className="text-gray-700 text-base font-medium hover:text-blue-500 transition"
      >
        Features
      </Link>

      <Link 
        to="/how-it-works" 
        className="text-gray-700 text-base font-medium hover:text-blue-500 transition"
      >
        How It Works
      </Link>

      <Link 
        to="/security" 
        className="text-gray-700 text-base font-medium hover:text-blue-500 transition"
      >
        Security
      </Link>
    </nav>
    <div className='flex items-center gap-4'>
      <button
        onClick={() => navigate('/signin')}
        className="px-6 py-2 text-blue-500 border border-blue-700 hover:bg-blue-500 hover:text-white
        hover:cursor-pointer rounded-lg font-medium transition"
      >
        Sign In
      </button>
      <button
        onClick={() => navigate('/signup')}
        className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition hover:cursor-pointer"
      >
        Get Started →
      </button>
    </div>
  </div>
</div>

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
        onClick={() => navigate('/contact-us')}
        className="px-8 py-3 text-white bg-blue-500 hover:bg-blue-700 hover:cursor-pointer rounded-lg font-medium transition">
        Contact Us
        </button>
        <button 
        onClick={() => navigate('/features')}
        className="px-8 py-3 text-blue-500 border border-blue-700 hover:bg-blue-500 hover:text-white hover:cursor-pointer rounded-lg font-medium transition">
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

export { LandingPage }