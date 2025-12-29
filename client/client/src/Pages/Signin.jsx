import logo from '../assets/logo.png';

function Signin(){
  return (
    <>
      {/* Left Side Design */}
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-md w-full mx-auto">
            {/* <img src={logo} className="h-12 md:h-14 mb-6 object-contain" alt="ApplyWise Logo" style={{ maxWidth:  '100%' }} /> */}
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
      <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex-col items-start justify-center p-8 lg:p-12 xl:p-16 relative overflow-hidden">

      </div>
      </div>
    </>
  )
}

export { Signin };