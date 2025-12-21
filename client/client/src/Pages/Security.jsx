import Header from '../components/header.jsx';

function Security(){
  return(
    <>
      <Header />
      <div className="flex h-screen">
        <div className="w-1/2 bg-blue-500">
          <h1 className="text-4xl text-white mt-30 text-center font-bold font-style: italic">Security Is Not a Feature — It’s the Foundation!</h1>
          <p className="text-white text-center mt-10">
            ApplyWise is designed with security-first principles from day one.
            Your job data, personal information, and AI-generated insights are protected through modern authentication, access control, and safe architecture practices.</p>
          <button className="mt-10 bg-transparent text-white py-4 px-6 rounded-full shadow-md border border-white hover:bg-blue-600 hover:cursor-pointer block mx-auto" >
            Learn how we protect your data →
          </button>
        </div>
        <div class="w-1/2 bg-gray-200">
          
        </div>
      </div>
    </>
  )
}

export { Security };