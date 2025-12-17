import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';

function Header() {
  const navigate = useNavigate();
  return (
    <div className='bg-white shadow-sm border-b border-gray-500'>
      <div className='max-w-7xl mx-auto px-6 py-2 flex justify-between'>
      <img src={logo} className='h-12 w-35' />
      <nav className='hidden md:flex items-center gap-25'>
      <Link 
        to="/" 
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
)}

export default Header;