import Header from '../components/header.jsx';
import useMobileMenu from '../hooks/useMobileMenu';

function Works(){
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <>
    <Header 
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />
    <div className="bg-gradient-to-b from-blue-300 via-blue-200 to-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto py-8 sm:py-12 md:py-12 px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Simple & Effective
          </span>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
            How ApplyWise <span className="text-blue-500">Works</span>
          </h1>

          <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 px-4">
            A simple, secure workflow designed for real job seekers
          </p>
        </div>

        {/* Steps Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12 mb-10'>
          
          {/* STEP 1 */}
          <div className="relative bg-white shadow-xl rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 border-blue-200 hover:border-blue-500 hover:cursor-pointer group">
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
              1
            </div>
            
            {/* Icon */}
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all">
              👤
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
              Create Account
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Securely sign up and access your private job tracking dashboard.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="relative bg-white shadow-xl rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 border-blue-200 hover:border-blue-500 hover:cursor-pointer group">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
              2
            </div>
            
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-green-500 group-hover:scale-110 transition-all">
              📝
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
              Add Applications
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Log every job you apply for with role, company, and status.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="relative bg-white shadow-xl rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 border-blue-200 hover:border-blue-500 hover:cursor-pointer group">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
              3
            </div>
            
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-purple-500 group-hover:scale-110 transition-all">
              📊
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
              Track Progress
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Monitor application statuses, trends, and follow-ups visually.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="relative bg-white shadow-xl rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 border-blue-200 hover:border-blue-500 hover:cursor-pointer group">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
              4
            </div>
            
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all">
              🤖
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
              Improve with AI
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Get resume feedback and AI-generated cover letters.
            </p>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-10 sm:mt-10 text-center bg-white rounded-2xl shadow-2xl p-4 sm:p-8 border-2 border-blue-200">
          <p className="text-gray-600 max-w-xl mx-auto">
            🔒 All your data is private, encrypted, and accessible only to you.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export { Works };