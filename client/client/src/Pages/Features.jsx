import Header from '../components/header.jsx';
import useMobileMenu from '../hooks/useMobileMenu';
import FeatureCard from '../components/featurecard.jsx';
import { features } from '../data/featuresdata.js';

function Features(){
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <>
    <Header 
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />

    <div className="bg-gradient-to-b from-blue-300 via-blue-200 to-gray-200">
      <div className="max-w-6xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            What is ApplyWise?
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4">
            Powerful Features Built for <span className="text-blue-500">Modern Job Seekers</span>
          </h1>

          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 px-4">
            ApplyWise combines secure architecture, real-world workflows, and AI to help you track and improve your job applications efficiently.
          </p>
        </div>

        {/* Cards For defining features */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10 mb-6 sm:mb-10'>

        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}

        </div>
      </div>
      <hr className="border-gray-300"></hr>

      {/* Section 2 - Security & Privacy */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-900 px-4">
          Security & <span className="text-blue-500">Privacy</span>
        </h1>
        <div className="flex justify-center mt-3 sm:mt-4">
          <span className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Security First
          </span>
        </div>
        <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-600 px-4">
          ApplyWise is designed with security and privacy at its core. User data is
          protected through modern authentication practices and strict access control.
        </p>

        {/* Security Grid */}
        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
          <div className="p-4 sm:p-5 md:p-6 mx-2 sm:mx-1 hover:cursor-pointer border-2 border-gray-800 rounded-xl bg-gray-800 shadow-2xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-white">
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">
              Secure Authentication
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white">
              ApplyWise uses modern authentication practices to ensure that only
              verified users can access the platform. Secure login mechanisms,
              protected sessions, and token-based authentication help prevent
              unauthorized access while maintaining a smooth user experience.
            </p>
          </div>

          <div className="p-4 sm:p-5 md:p-6 mx-2 sm:mx-1 hover:cursor-pointer border-2 border-gray-800 rounded-xl bg-gray-800 shadow-2xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-white">
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">
              Private User Data
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white">
              Each user's job applications, analytics, and AI-generated insights are
              strictly private and isolated. Data is never shared publicly and is
              accessible only to the authenticated account owner.
            </p>
          </div>

          <div className="p-4 sm:p-5 md:p-6 mx-2 sm:mx-1 hover:cursor-pointer border-2 border-gray-800 rounded-xl bg-gray-800 shadow-2xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-white">
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">
              Secure Architecture
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white">
              ApplyWise is designed with a clean and scalable backend architecture
              that follows security best practices. Clear separation between client
              and server, controlled API access, and validation at every layer help
              reduce common security risks.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-900 px-4">
          Tech <span className="text-blue-500">Stack</span>
        </h1>
        <div className="flex justify-center mt-3 sm:mt-4">
          <span className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Built With Modern Technologies
          </span>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10 mb-6 sm:mb-10">
          
          {/* React + Tailwind */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">React + Tailwind</h2>
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">Frontend</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Modern UI with component-based architecture
            </p>
          </div>

          {/* Node.js + Express */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Node.js + Express</h2>
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">Backend</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Fast and scalable server-side framework
            </p>
          </div>

          {/* MongoDB */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">MongoDB</h2>
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">Database</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Flexible NoSQL database for efficient storage
            </p>
          </div>

          {/* JWT Authentication */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">JWT Authentication</h2>
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">Security</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Secure token-based user authentication
            </p>
          </div>

          {/* AI Integration */}
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 hover:cursor-pointer">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">AI Integration</h2>
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">Intelligence</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Smart suggestions and resume feedback
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export { Features };