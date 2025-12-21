import Header from '../components/header.jsx';
function Works(){
  return (
    <>
    <Header />
    <div className="bg-gradient-to-b from-blue-300 via-blue-200 to-gray-200">
      <div className="max-w-6xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4">
            How ApplyWise <span className="text-blue-500">Works</span>
          </h1>

          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 px-4">
            A simple, secure workflow designed for real job seekers
          </p>
        </div>
      </div>

      {/* Working Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10 mb-6 sm:mb-10'>
        
      </div>
    </div>
    </>
  )
}

export { Works };