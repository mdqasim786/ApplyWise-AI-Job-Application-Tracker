import logo from '../assets/logo.png';

function Signup(){
  return(
    <>
      {/* Left Side Form */}
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-md w-full mx-auto">
          <img src={logo} className="h-12 md:h-14 mb-6 object-contain" alt="ApplyWise Logo" style={{ maxWidth: '100%' }} />
          <h3 className='font-semibold text-xl md:text-2xl'>Get Started</h3>
          <p className='mt-2 text-sm text-gray-500'>Welcome to ApplyWise - Let's create your account</p>
          <hr className='mt-4 mb-5 text-gray-300'></hr>
          
          <form className='flex flex-col space-y-3.5'>
            <div>
              <label className='font-medium text-sm block mb-1.5'>Email Address</label>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className='border border-gray-300 rounded-lg p-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' 
              />
            </div>
            
            <div>
              <label className='font-medium text-sm block mb-1.5'>Password</label>
              <input 
                type="password" 
                placeholder='Create a password' 
                className='border border-gray-300 rounded-lg p-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' 
              />
            </div>
            
            <div>
              <label className='font-medium text-sm block mb-1.5'>Confirm Password</label>
              <input 
                type="password" 
                placeholder='Confirm your password' 
                className='border border-gray-300 rounded-lg p-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' 
              />
            </div>
            
            <button 
              type="submit" 
              className='bg-blue-500 text-white rounded-lg p-3 w-full hover:bg-blue-600 transition hover:cursor-pointer font-medium'
            >
              Sign Up
            </button>
            
            <p className='text-gray-500 text-center text-sm pt-2'>
              Already have an account? 
              <a href="/login" className='text-blue-500 hover:underline'> Log in</a>
            </p>
          </form>
          </div>
        </div>

        {/* Right Side Design */}
        <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex-col items-start justify-center p-8 lg:p-12 xl:p-16 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-24 h-24 lg:w-32 lg:h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 right-32 w-20 h-20 lg:w-24 lg:h-24 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 right-5 w-12 h-12 lg:w-16 lg:h-16 bg-white opacity-10 rounded-full"></div>

          <div className="z-10 mb-8">
            <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight italic">
              Enter<br />
              <span className="text-blue-200">the Future</span>
            </h1>
            <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight mt-2">
              of Job<br />
              Tracking
            </h2>
          </div>
          
          <div className="space-y-6 lg:space-y-8 w-full max-w-md">
            <div className="flex items-start gap-4">
              <div className="w-1 h-12 lg:h-14 bg-white bg-opacity-40 rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-base lg:text-lg">Track Unlimited</h3>
                <p className="text-blue-100 text-sm">Manage all your applications in one place</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:ml-20 lg:ml-32">
              <div className="w-1 h-12 lg:h-14 bg-white bg-opacity-40 rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-base lg:text-lg">Never Miss Deadlines</h3>
                <p className="text-blue-100 text-sm">Smart reminders keep you on track</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:ml-40 lg:ml-64">
              <div className="w-1 h-12 lg:h-14 bg-white bg-opacity-40 rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="text-white font-semibold text-base lg:text-lg">Stay Organized</h3>
                <p className="text-blue-100 text-sm">Effortless organization for your job search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Signup };