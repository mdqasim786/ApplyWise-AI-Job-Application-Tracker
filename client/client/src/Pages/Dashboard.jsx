import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth(); // Get user and logout from context

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-500">ApplyWise</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{user?.email}</span>
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome back, {user?.name || user?.email}! 👋
        </h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Applications</p>
                <p className="text-3xl font-bold text-blue-500">24</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-yellow-500">12</p>
              </div>
              <div className="text-4xl">⏳</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Interviews</p>
                <p className="text-3xl font-bold text-green-500">5</p>
              </div>
              <div className="text-4xl">🎯</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Rejected</p>
                <p className="text-3xl font-bold text-red-500">7</p>
              </div>
              <div className="text-4xl">❌</div>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Applications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div>
                <h4 className="font-medium text-gray-800">Senior Frontend Developer</h4>
                <p className="text-sm text-gray-600">Google Inc. • Applied 2 days ago</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Pending</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div>
                <h4 className="font-medium text-gray-800">Full Stack Engineer</h4>
                <p className="text-sm text-gray-600">Microsoft • Applied 5 days ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Interview</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div>
                <h4 className="font-medium text-gray-800">React Developer</h4>
                <p className="text-sm text-gray-600">Meta • Applied 1 week ago</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Under Review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };