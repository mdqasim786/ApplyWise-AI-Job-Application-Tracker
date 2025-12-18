import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white shadow-sm border-b border-gray-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          <img src={logo} className="h-8 sm:h-10 md:h-12 w-auto" alt="ApplyWise Logo" />

          <nav className="hidden md:flex items-center gap-8 lg:gap-20">
            <Link 
              to="/" 
              className="text-gray-700 text-sm lg:text-base font-medium hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 text-sm lg:text-base font-medium hover:text-blue-500 transition"
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 text-sm lg:text-base font-medium hover:text-blue-500 transition"
            >
              How It Works
            </Link>
            <Link 
              to="/security" 
              className="text-gray-700 text-sm lg:text-base font-medium hover:text-blue-500 transition"
            >
              Security
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/signin')}
              className="px-4 lg:px-6 py-2 text-sm lg:text-base text-blue-500 border border-blue-700 
              hover:bg-blue-500 hover:text-white rounded-lg font-medium transition hover:cursor-pointer"
            >
              Sign In
            </button>

            <button
              onClick={() => navigate('/signup')}
              className="px-4 lg:px-6 py-2 text-sm lg:text-base bg-blue-500 text-white 
              hover:bg-blue-600 rounded-lg font-medium transition hover:cursor-pointer"
            >
              Get Started →
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-b border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ position: 'relative', zIndex: 40 }}
      >
        <nav className="flex flex-col px-4 py-4 space-y-1">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-500 rounded-lg transition"
          >
            Home
          </Link>
          <Link
            to="/features"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-500 rounded-lg transition"
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-500 rounded-lg transition"
          >
            How It Works
          </Link>
          <Link
            to="/security"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-500 rounded-lg transition"
          >
            Security
          </Link>

          <div className="pt-4 space-y-3 border-t border-gray-200 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/signin');
              }}
              className="w-full px-4 py-3 text-blue-500 border border-blue-700 
              hover:bg-blue-500 hover:text-white rounded-lg font-medium transition"
            >
              Sign In
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/signup');
              }}
              className="w-full px-4 py-3 bg-blue-500 text-white 
              hover:bg-blue-600 rounded-lg font-medium transition"
            >
              Get Started →
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;