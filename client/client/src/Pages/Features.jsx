import Header from '../components/header.jsx';

function Features(){
  return (
    <>
    <Header />

    <div className="bg-gradient-to-b from-blue-300 via-blue-200 to-gray-200">
      <div className="max-w-6xl mx-auto py-6 px-6">
        <div className="text-center mb-6">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            What is ApplyWise?
          </span>

          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
            Powerful Features Built for <span className="text-blue-500">Modern Job Seekers</span>
          </h1>

          <p className="mt-4 max-w-1xl mx-auto text-lg text-gray-600">
            ApplyWise combines secure architecture, real-world workflows, and AI to help you track and improve your job applications efficiently.
          </p>
        </div>

        {/* Cards For defining features */}
        {/* Card 1 */}
        <div className='ml-13 flex'>
          <div className="w-70">
            <div className="bg-white shadow-2xl rounded-lg p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2"> 🔐 Secure Authentication</h2>
                <h3 className="text-lg font-semibold text-blue-500">Key Features</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>JWT-based authentication</li>
                    <li>Protected routes</li>
                    <li>User-specific data access</li>
                    <li>Privacy-first design</li>
                  </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-70 ml-20">
            <div className="bg-white shadow-2xl rounded-lg p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Job Application Tracking</h2>
                <h3 className="text-lg font-semibold text-blue-500">Key Features</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Add and manage job applications</li>
                    <li>Track status (Applied, Rejected)</li>
                    <li>Notes and follow-ups</li>
                  </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-70 ml-20">
            <div className="bg-white shadow-2xl rounded-lg p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2"> Analytics Dashboard</h2>
                <h3 className="text-lg font-semibold text-blue-500">Key Features</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Application statistics</li>
                    <li>Status breakdown</li>
                    <li>Weekly/monthly trends</li>
                    <li>Graphical Representations</li>
                  </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export { Features };