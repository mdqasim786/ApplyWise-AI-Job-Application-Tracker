import Header from '../components/header.jsx';
import useMobileMenu from '../hooks/useMobileMenu';

function Security(){
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return(
    <>
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div className="flex flex-col md:flex-row" style={{ height: 'calc(100vh - 64px)' }}>
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 bg-blue-500 flex flex-col items-center justify-center p-6 md:p-10 lg:p-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white text-center font-bold italic leading-tight">
            Security Is Not a Feature — It's the Foundation!
          </h1>
          <p className="text-white text-center mt-4 md:mt-6 max-w-lg text-sm md:text-base leading-relaxed">
            ApplyWise is designed with security-first principles from day one.
            Your job data, personal information, and AI-generated insights are protected through modern authentication, access control, and safe architecture practices.
          </p>
          <button className="mt-6 md:mt-8 bg-transparent text-white py-2.5 md:py-3 px-5 md:px-7 text-sm md:text-base rounded-full shadow-md border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer">
            Learn how we protect your data →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex flex-col justify-center p-6 md:p-10 lg:p-12 space-y-4">
  
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:cursor-pointer border-l-4 border-blue-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-600">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">🔒</span>
              </div>
              <div>
                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  Private User Data
                </h2>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Every ApplyWise account operates in an isolated environment. Job
                  applications, analytics, and AI-generated content are accessible
                  only to the authenticated user.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg hover:cursor-pointer shadow-md p-4 border-l-4 border-blue-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-600">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">🛡️</span>
              </div>
              <div>
                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  Protected Access Control
                </h2>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Sensitive routes and backend resources are protected through
                  authentication and authorization layers, preventing unauthorized
                  access at every stage.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white hover:cursor-pointer rounded-lg shadow-md p-4 border-l-4 border-blue-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-600">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">⚙️</span>
              </div>
              <div>
                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  Clean & Secure Architecture
                </h2>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  ApplyWise follows a clear separation between frontend and backend,
                  with strict data validation and controlled APIs to minimize common
                  security risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Security };