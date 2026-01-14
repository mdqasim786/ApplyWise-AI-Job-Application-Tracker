import { Download, Trash2} from 'lucide-react';

function Settings(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 p-8">
      <h1 className="text-3xl ml-50 font-bold">Settings</h1>
        <div className="mt-6 ml-50 align-center w-3xl p-6 bg-white rounded-lg shadow-md">
          <label className="text-md text-black">Email Address</label>
            <input
              disabled
              className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600 cursor-not-allowed"
            />

            <label className="text-md text-black">Add an Alternate Email (Optional)</label>
              <input
                type="email"
                placeholder="Add another email"
                className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600"
            />

            <label className="text-md text-black">Phone Number (Optional)</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600"
            />

            <label className="text-md text-black">Add your Resume/CV</label>
              <input
                type="file"
                className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600"
            />

            
            <label className="text-md text-black">Report a bug (Enter details below)</label>
              <textarea
                rows="5"
                type="text"
                placeholder="Describe the issue in detail..."
                className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600"
            />

            <div className="flex mb-5">
              <label className="text-md font-bold text-black">Download my ApplyWise Profile</label>
              <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer">
                <Download size={16} />
              </button>
            </div>

            <div className="flex">
              <label className="text-md font-bold text-black">Delete my ApplyWise Profile</label>
              <button className="ml-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 hover:cursor-pointer">
                <Trash2 size={16} />
              </button>
            </div>
        </div>
    </div>
  )
}

export {Settings}