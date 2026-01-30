import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="bg-gray-50 shadow-lg flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <img src={logo} className="h-8 sm:h-10 md:h-12 w-auto" alt="ApplyWise Logo" />
            
            {/* Hide text on small/medium screens */}
            <h2 className="hidden lg:block text-xl xl:text-2xl font-bold text-gray-800">
              Welcome to ApplyWise!
            </h2>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Hide Profile button on mobile */}
              <button
                onClick={() => navigate('/dashboard/profile')}
                className="hidden sm:flex bg-blue-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
              >
                Profile
              </button>
              <button 
                onClick={logout} 
                className="bg-red-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar + Main Content Container */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - Collapsible on Mobile */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-30 top-16
          w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl 
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}>
          <div className="p-4">
            {/* Dashboard Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Dashboard
              </h3>
              <p className="text-blue-200 text-sm mt-1">Welcome back!</p>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              {/* Home Button */}
              <button
                onClick={() => {
                  navigate('/dashboard');
                  setIsSidebarOpen(false);
                }}
                className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Home</span>
              </button>

              {/* Applications Button */}
              <button
                onClick={() => {
                  navigate('/dashboard/applications');
                  setIsSidebarOpen(false);
                }}
                className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium">Applications</span>
              </button>

              {/* Jobs Button */}
              <button
                onClick={() => {
                  navigate('/dashboard/jobs');
                  setIsSidebarOpen(false);
                }}
                className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Job Search</span>
              </button>

              {/* Divider */}
              <div className="border-t border-white/20 my-4"></div>

              {/* Settings Button */}
              <button
                onClick={() => {
                  navigate('/dashboard/settings');
                  setIsSidebarOpen(false);
                }}
                className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Settings</span>
              </button>

              {/* Help Button */}
              <button
                onClick={() => {
                  navigate('/dashboard/help');
                  setIsSidebarOpen(false);
                }}
                className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Help & Support</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile - close sidebar when clicked */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Welcome to Dashboard</h1>
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <p className="text-gray-600 text-sm sm:text-base">Your main content goes here...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export { Dashboard };