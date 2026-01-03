import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin(){
  const navigate = useNavigate();
  // frontend states
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

    // Backend States
    const [serverError, setServerError] = useState('');
    const [serverSuccess, setServerSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!email){
      errors.email = 'Email is required';
    } 

    if (!password) {
      errors.password = 'Password is required';
    }

    setEmailError(errors.email || '');
    setPasswordError(errors.password || '');
    if (Object.keys(errors).length > 0) return;
    setServerError('');
    setServerSuccess('');
    setIsLoading(true);

    try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data =  await response.json();
    if (!response.ok) {
      setServerError(data.message || "Login failed");
      setIsLoading(false);
      return;
    }
    if (response.ok){
      console.log("Token received:", data.token);
      localStorage.setItem("token", data.token);
      setServerSuccess("Login successful!");
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
      setIsLoading(false);

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }
  } catch (error) {
    setServerError("Network error. Please try again.");
      setIsLoading(false);
  }
}

  return (
    <>
      {/* Left Side Design */}
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto">
          <div className="max-w-md w-full mx-auto">
            <h3 className='font-semibold text-lg sm:text-xl md:text-2xl text-blue-500 text-center mb-5'>Login Account</h3>
            <p className='mt-2 text-xs sm:text-sm text-gray-500 text-center'>ApplyWise is a secure, AI-powered job application tracking platform built for modern job seekers.
              It helps users organize applications, track statuses, and gain insights to improve hiring outcomes. ApplyWise combines clean UX, analytics, and scalable MERN architecture.</p>
            <hr className='mt-4 mb-5 text-gray-300'></hr>

            <form 
              onSubmit={handleSubmit}
            className='flex flex-col space-y-3.5'
            >
              <div>
                <label className='font-medium text-sm block mb-1.5'>
                  Email Address
                  {emailError && (
                  <span className="text-red-500 text-xs ml-2">
                    {emailError}
                  </span>
                  )}
                </label>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  className="border rounded-lg p-2.5 w-full text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 border-l-4 sm:border-l-6 border-l-blue-500"
                />
              </div>            
              <div>
                <div className='flex justify-between items-center mb-1.5'>
                  <label className='font-medium text-sm'>
                    Password
                    {passwordError && (
                    <span className="text-red-500 text-xs ml-2">
                      {passwordError}
                    </span>
                    )}
                  </label>
                  <a href="/signin" className='text-blue-500 hover:underline text-xs sm:text-sm'>
                    Forgot Password?
                  </a>
                </div>
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                  className="border rounded-lg p-2.5 w-full text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 border-l-4 sm:border-l-6 border-l-blue-500"
                />
              </div>

              {serverError && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {serverError}
              </div>
              )}

              {serverSuccess && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
              {serverSuccess}
              </div>
              )}

              <button 
                type="submit" 
                className="text-white rounded-lg p-3 w-full font-medium transition bg-blue-500 hover:bg-blue-600 hover:cursor-pointer mt-5"
              >
                Sign In 
              </button>

              <p className='text-gray-500 text-center text-sm pt-2'>
              Don't have an account? 
              <a href="/signup" className='text-blue-500 hover:underline'> Sign up</a>
              </p>
            </form>

            {/* Mobile Only Section - fills white space */}
            <div className="md:hidden mt-8 pt-6 border-t border-gray-200">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Choose ApplyWise?</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">📊</span>
                    </div>
                    <div className="text-left">
                      <h5 className="font-medium text-sm text-gray-800">Track Applications</h5>
                      <p className="text-xs text-gray-600">Organize and monitor all your job applications in one place</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">🤖</span>
                    </div>
                    <div className="text-left">
                      <h5 className="font-medium text-sm text-gray-800">AI-Powered Insights</h5>
                      <p className="text-xs text-gray-600">Get smart recommendations to improve your success rate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">📈</span>
                    </div>
                    <div className="text-left">
                      <h5 className="font-medium text-sm text-gray-800">Analytics Dashboard</h5>
                      <p className="text-xs text-gray-600">Visualize your progress with detailed analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 mt-6">
                Don't have an account? <a href="/signup" className="text-blue-500 hover:underline font-medium">Sign Up</a>
              </div>
            </div>
          </div>
        </div> 
      
      {/* Right Side Design */}
      <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 items-center justify-center p-8 lg:p-12 xl:p-16 relative overflow-hidden">

          {/* Bubbles view  */}
          <div className="absolute top-10 right-10 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-white to-transparent opacity-20 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 border-4 border-white opacity-15 rounded-full translate-y-48 -translate-x-48 animate-spin" style={{animationDuration: '20s'}}></div>
          
          <div className="absolute top-20 left-1/2 w-24 h-24 lg:w-28 lg:h-28 bg-white opacity-15 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-10 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-tl from-white to-transparent opacity-20 rounded-full blur-xs"></div>
          <div className="absolute bottom-10 right-32 w-28 h-28 lg:w-36 lg:h-36 bg-white opacity-25 rounded-full shadow-lg shadow-white/10"></div>
          <div className="absolute bottom-1/4 left-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-white opacity-20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/2 left-1/3 w-80 h-80 border-4 border-white opacity-10 rounded-full translate-y-40 -translate-x-40 animate-pulse" style={{animationDuration: '5s'}}></div>
          <div className="absolute top-1/4 right-1/3 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-white to-transparent opacity-25 rounded-full blur-sm"></div>
          <div className="absolute bottom-20 left-20 w-18 h-18 lg:w-22 lg:h-22 bg-white opacity-30 rounded-full shadow-md shadow-white/20 animate-bounce" style={{animationDuration: '4s'}}></div>
          
          {/* text */}
          <div className="z-10 text-center">
            <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl leading-tight font-mono">
              <span className="text-blue-200 italic text-base sm:text-lg lg:text-xl xl:text-2xl">Nice to see you again</span><br />
              WELCOME BACK<br />
            </h1>
            <hr className="text-white w-12 mx-auto border-t-4 border-white rounded mt-4"></hr>
          </div>
        </div>
      </div>
    </>
  )
}

export { Signin };