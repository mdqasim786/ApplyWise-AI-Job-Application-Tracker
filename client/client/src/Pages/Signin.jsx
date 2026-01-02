

function Signin(){
  return (
    <>
      {/* Left Side Design */}
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-md w-full mx-auto">
            <h3 className='font-semibold text-xl md:text-2xl text-blue-500 text-center mb-5'>Login Account</h3>
            <p className='mt-2 text-sm text-gray-500 text-center'>ApplyWise is a secure, AI-powered job application tracking   platform built for modern job seekers.
              It helps users organize applications, track statuses, and gain insights to improve hiring outcomes.   ApplyWise combines clean UX, analytics, and scalable MERN   architecture.</p>
            <hr className='mt-4 mb-5 text-gray-300'></hr>

            <form 
            className='flex flex-col space-y-3.5'
            >
              <div>
                <label className='font-medium text-sm block mb-1.5'>Email Address</label>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  className="border rounded-lg p-2.5 w-full text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 border-l-6 border-l-blue-500"
                />
              </div>            
              <div>
                <div className='flex justify-between items-center mb-1.5'>
                  <label className='font-medium text-sm'>Password</label>
                  <a href="/signin" className='text-blue-500 hover:underline text-sm'>
                    Forgot Password?
                  </a>
                </div>
                <input 
                  type="password" 
                  placeholder='Create a password' 
                  className="border rounded-lg p-2.5 w-full text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 border-l-6 border-l-blue-500"
                />
              </div>

              <button 
                type="submit" 
                className="text-white rounded-lg p-3 w-full font-medium transition bg-blue-300 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer mt-5"
              >
                Sign In
              </button>
            </form>
          </div>
        </div> 
      
      {/* Right Side Design */}
      <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 items-center justify-center p-8 lg:p-12 xl:p-16 relative overflow-hidden">
          
          <div className="absolute top-10 right-10 w-24 h-24 lg:w-26 lg:h-26 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-0 left-10 w-90 h-90 border-4 border-white opacity-8 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="absolute top-20 left-1/2 w-20 h-20 lg:w-4 lg:h-4 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 lg:w-4 lg:h-4 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-32 w-20 h-20 lg:w-20 lg:h-20 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-12 h-12 lg:w-4 lg:h-4 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-1/2 left-180 w-90 h-90 border-4 border-white opacity-8 rounded-full translate-y-48 -translate-x-48"></div>
          <div className="absolute top-1/4 right-1/2 left-1/8 w-12 h-12 lg:w-12 lg:h-12 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 lg:w-4 lg:h-4 bg-white opacity-10 rounded-full"></div>
          
          

          <div className="z-10 text-center">
            <h1 className="text-white text-4xl lg:text-5xl xl:text-5xl leading-tight font-mono">
              <span className="text-blue-200 italic xl:text-2xl">Nice to see you again</span><br />
              WELCOME BACK<br />
            </h1>
            <hr className="text-white w-12 ml-33 border-t-4 border-white rounded"></hr>
          </div>
        </div>
      </div>
    </>
  )
}

export { Signin };