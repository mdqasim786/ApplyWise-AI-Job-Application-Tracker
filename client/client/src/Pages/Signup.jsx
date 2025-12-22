function Signup(){
  return(
    <>
      {/* Left Side Form */}
      <div className="flex flex-col md:flex-row" style={{ height: 'calc(100vh)' }}>
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-10 lg:p-12">
          
        </div>

        {/* Right Side Design */}
        <div className="w-full md:w-1/2 bg-blue-500 flex flex-col p-6 md:p-10 lg:p-14">
          <h1 className="text-white text-4xl">Enter the Future</h1>
        </div>
      </div>
    </>
  )
}

export { Signup };