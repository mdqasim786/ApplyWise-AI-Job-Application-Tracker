import { Download, Trash2} from 'lucide-react';
import React, { useState } from 'react';
import DeleteModal from '../components/deletemodal';

function Settings(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-400 to-blue-200 p-8">
      <h1 className="text-3xl ml-50 font-bold text-white">Settings
      </h1>
        {/* User Information Container  */}
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
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="ml-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 hover:cursor-pointer">
                  <Trash2 size={16} />
                </button>
                
                <DeleteModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                />
            </div>
        </div>

        {/* About Applywise Container  */}
        <div className="mt-6 ml-50 w-3xl p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About ApplyWise
          </h2>

          
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="text-md text-gray-700">App Version</span>
            <span className="text-md font-semibold text-gray-900">v1.0.0</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="text-md text-gray-700">Last Updated</span>
            <span className="text-md font-semibold text-gray-900">January, 2026</span>
          </div>


          <div className="mt-5">
            <h3 className="text-sm font-semibold  text-blue-500 uppercase tracking-wider mb-2">Developer Note</h3>
            <p className="text-md text-gray-700 leading-relaxed">
            ApplyWise was designed and built from the ground up by <strong>MD Qasim</strong> as a solo 
            developer project. My mission is to create a seamless, efficient platform that simplifies 
            the application process for everyone. Every feature is carefully crafted with a focus on 
            user experience and continuous improvement.
            </p>
          </div>
        </div>
    </div>
  )
}

export {Settings}