import { Download, Trash2} from 'lucide-react';
import React, { useState } from 'react';
import DeleteModal from '../components/deletemodal';
import { useEffect } from 'react';
import { FileText, Upload, X } from 'lucide-react';


function Settings(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [alternateEmail, setAlternateEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileName, setResumeFileName] = useState('');

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only PDF and DOCX files allowed');
      return;
    }
  
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append('resume', file);
  
    try {
      const response = await fetch("http://localhost:5000/api/settings/resume", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        setResumeFileName(data.resumeFileName);
        alert("Resume uploaded successfully!");
      }
    } catch (error) {
      alert("Upload failed");
    }
  };

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      setErrorMessage("Not authenticated");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/settings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setEmail(data.email); // 👈 THIS WILL NOW WORK
        setAlternateEmail(data.alternateEmail || "");
        setPhoneNumber(data.mobileNumber || "");
        setResumeFileName(data.resumeFileName || "");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Failed to load settings");
    }
  };
  

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleSaveSettings = async () => {
    const token = localStorage.getItem("token");
    
    try {
      const response = await fetch("http://localhost:5000/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          alternateEmail,
          mobileNumber: phoneNumber,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Settings saved successfully!");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Failed to save settings");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-400 to-blue-200 p-8">
      <h1 className="text-3xl ml-50 font-bold text-white">Settings
      </h1>
        {/* User Information Container  */}
        <div className="mt-6 ml-50 align-center w-3xl p-6 bg-white rounded-lg shadow-md">
          <label className="text-md text-black">Email Address</label>
            <input
              value={email || ""}
              disabled
              className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600 cursor-not-allowed"
            />

            <label className="text-md text-black">Add an Alternate Email (Optional)</label>
              <input
                type="email"
                placeholder="Add another email"
                value={alternateEmail}
                onChange={(e) => setAlternateEmail(e.target.value)}
                className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600"
            />

            <label className="text-md text-black">Phone Number (Optional)</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-200 text-gray-600"
            />

<label className="text-md text-black">Add your Resume/CV</label>

{resumeFileName ? (
  // Show uploaded file
  <div className="flex items-center justify-between w-full mt-2 p-3 border rounded-xl bg-blue-50">
    <div className="flex items-center gap-2">
      <FileText className="text-blue-600" size={20} />
      <span className="text-gray-700">{resumeFileName}</span>
    </div>
    <button
      onClick={() => setResumeFileName('')}
      className="text-red-500 hover:text-red-700"
    >
      <X size={20} />
    </button>
  </div>
) : (
  // Upload button
  <label className="flex items-center justify-center gap-2 w-full mt-2 p-3 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
    <Upload className="text-gray-600" size={20} />
    <span className="text-gray-600">Click to upload PDF or DOCX</span>
    <input
      type="file"
      accept=".pdf,.docx,.doc"
      onChange={handleResumeUpload}
      className="hidden"
    />
  </label>
)}

            
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

            <button 
                  onClick={handleSaveSettings}
                  className=" bg-blue-600 text-white mt-4 px-4 py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer">
                  Save Settings
            </button>
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