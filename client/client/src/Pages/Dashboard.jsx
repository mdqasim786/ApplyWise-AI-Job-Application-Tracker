import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  

  return (
    // dashboard nav header
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <img src={logo} className="h-8 sm:h-10 md:h-12 w-auto" alt="ApplyWise Logo" />
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to ApplyWise!
              </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard/profile')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Profile
              </button>
              <button 
                onClick={logout} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen bg-gray-50">
  {/* Sidebar */}
  <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl">
    <div className="p-6">
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
          onClick={() => navigate('/dashboard')}
          className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="font-medium">Home</span>
        </button>

        {/* Applications Button */}
        <button
          onClick={() => navigate('/dashboard/applications')}
          className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-medium">Applications</span>
        </button>

        {/* Jobs Button */}
        <button
          onClick={() => navigate('/dashboard/jobs')}
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
          onClick={() => navigate('/dashboard/settings')}
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
          onClick={() => navigate('/dashboard/help')}
          className="group flex items-center gap-3 w-full text-white text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:translate-x-1 hover: cursor-pointer"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">Help & Support</span>
        </button>
      </nav>
    </div>

    {/* Bottom User Section (Optional) */}
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-blue-900/50 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p className="text-white font-medium text-sm">John Doe</p>
          <p className="text-blue-200 text-xs">john@example.com</p>
        </div>
      </div>
    </div>
  </aside>

  {/* Main Content */}
  <main className="flex-1 p-8">
    <div className="max-w-7xl mx-auto">
      {/* Your content goes here */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Dashboard</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-600">Your main content goes here...</p>
      </div>
    </div>
  </main>
</div>
    </div>
  );
}

export { Dashboard };