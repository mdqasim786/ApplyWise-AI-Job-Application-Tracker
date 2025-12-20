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
        <div className='ml-13 flex flex-wrap mt-10 mb-10'>
          <div className="w-70">
            <div className="bg-white shadow-xl rounded-lg p-4 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Secure Authentication</h2>
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
            <div className="bg-white shadow-xl rounded-lg p-4 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Job Application Tracking</h2>
                <h3 className="text-lg font-semibold text-blue-500">Key Features</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Add and manage job Applications</li>
                    <li>Track status (Applied, Rejected)</li>
                    <li>Notes and follow-ups</li>
                  </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-70 ml-20">
            <div className="bg-white shadow-xl rounded-lg p-4 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
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

          {/* Card 4 */}
          <div className='mt-10 flex'>
          <div className="w-70">
            <div className="bg-white shadow-xl rounded-lg p-4 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
              <h2 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Assistance</h2>
                <h3 className="text-lg font-semibold text-blue-500">Key Features</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Resume feedback</li>
                    <li>Cover letter generation</li>
                    <li>Context-aware suggestions</li>
                  </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="w-70 ml-20">
            <div className="bg-white shadow-xl rounded-lg p-4 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover: cursor-pointer">
              <h2 className="text-xl font-bold text-gray-900 mb-2">RESTful Architecture</h2>
                <h3 className="text-lg font-semibold text-blue-500">Key Features</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Well-structured APIs</li>
                    <li>Scalable backend design</li>
                    <li>Clear separation of concerns</li>
                  </ul>
            </div>
          </div>

          {/* Card 6 */}
          <div className="w-70 ml-20">
            <div className="bg-white shadow-xl rounded-lg p-4 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
              <h2 className="text-xl font-bold text-gray-900 mb-2">User-Focused Workflow</h2>
                <h3 className="text-lg font-semibold text-blue-500">Key Features</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Designed for real job hunts</li>
                    <li>Minimal friction</li>
                    <li>Productivity-driven UI</li>
                  </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
      <hr></hr>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto px-6 py-10"></div>
        <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-900">
          Security & <span className="text-blue-500">Privacy</span>
        </h1>
        <div className="flex justify-center mt-4">
          <span className="px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Security First
          </span>
        </div>
        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600">
          ApplyWise is designed with security and privacy at its core. User data is
          protected through modern authentication practices and strict access control.
        </p>

        {/* Security Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        </div>
      </div>
  </>
  );
}

export { Features };