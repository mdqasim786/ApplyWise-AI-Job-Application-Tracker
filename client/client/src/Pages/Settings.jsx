import { Download, Trash2, FileText, Upload, X, AlertTriangle } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Delete Modal Component
function DeleteModal({ isOpen, onClose, onConfirm, isDeleting }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="text-red-600" size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Delete Profile</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete your ApplyWise profile? This action cannot be undone. 
          All your data including email, password, applications, and resume will be permanently deleted.
        </p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {isDeleting ? 'Deleting...' : 'Yes, Delete My Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Settings(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [alternateEmail, setAlternateEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resumeFileName, setResumeFileName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only PDF and DOCX files allowed');
      e.target.value = ''; // Clear the input
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      e.target.value = '';
      return;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);
  
    setIsUploading(true);

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
        await fetchUserProfile();
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      e.target.value = ''; // Clear the file input
    }
  };

  const handleResumeDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your resume?")) {
      return;
    }

    const token = localStorage.getItem("token");
    
    try {
      const response = await fetch("http://localhost:5000/api/settings/resume", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setResumeFileName('');
        alert("Resume deleted successfully!");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to delete resume");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete resume");
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
        setEmail(data.email);
        setAlternateEmail(data.alternateEmail || "");
        setPhoneNumber(data.mobileNumber || "");
        setResumeFileName(data.resumeFileName || "");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
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
      console.error("Save error:", error);
      setErrorMessage("Failed to save settings");
    }
  };

  const handleDeleteProfile = async () => {
    const token = localStorage.getItem("token");
    
    setIsDeleting(true);

    try {
      const response = await fetch("http://localhost:5000/api/settings/profile", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Clear all local storage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        
        alert("Your profile has been deleted successfully!");
        
        // Redirect to signin page
        window.location.href = "/signin"; // or use your router's navigation
      } else {
        alert(data.message || "Failed to delete profile");
      }
    } catch (error) {
      console.error("Delete profile error:", error);
      alert("Failed to delete profile. Please try again.");
    } finally {
      setIsDeleting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-400 to-blue-200 p-8">
      <h1 className="text-3xl ml-50 font-bold text-white">Settings</h1>
      
      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* User Information Container */}
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
          className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-md text-black">Phone Number (Optional)</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-md text-black mb-2 block">Add your Resume/CV</label>

        {resumeFileName ? (
          // Show uploaded file
          <div className="flex items-center justify-between w-full mt-2 p-3 border rounded-xl bg-blue-50">
            <div className="flex items-center gap-2">
              <FileText className="text-blue-600" size={20} />
              <span className="text-gray-700">{resumeFileName}</span>
            </div>
            <button
              onClick={handleResumeDelete}
              className="text-red-500 hover:text-red-700 transition-colors"
              title="Delete resume"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          // Upload button
          <label className="flex items-center justify-center gap-2 w-full mt-2 p-3 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
            <Upload className="text-gray-600" size={20} />
            <span className="text-gray-600">
              {isUploading ? "Uploading..." : "Click to upload PDF or DOCX"}
            </span>
            <input
              type="file"
              accept=".pdf,.docx,.doc"
              onChange={handleResumeUpload}
              className="hidden"
              disabled={isUploading}
            />
          </label>
        )}

        <label className="text-md text-black mt-4 block">Report a bug (Enter details below)</label>
        <textarea
          rows="5"
          type="text"
          placeholder="Describe the issue in detail..."
          className="w-full mt-2 p-2 mb-4 border rounded-xl bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex mb-5 items-center">
          <label className="text-md font-bold text-black">Download my ApplyWise Profile</label>
          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={16} />
          </button>
        </div>

        <div className="flex items-center">
          <label className="text-md font-bold text-black">Delete my ApplyWise Profile</label>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="ml-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            <Trash2 size={16} />
          </button>
        </div>

        {/* Delete Modal */}
        <DeleteModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleDeleteProfile}
          isDeleting={isDeleting}
        />

        <button 
          onClick={handleSaveSettings}
          className="w-full bg-blue-600 text-white mt-4 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          Save Settings
        </button>
      </div>

      {/* About Applywise Container */}
      <div className="mt-6 ml-50 w-3xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">About ApplyWise</h2>

        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <span className="text-md text-gray-700">App Version</span>
          <span className="text-md font-semibold text-gray-900">v1.0.0</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <span className="text-md text-gray-700">Last Updated</span>
          <span className="text-md font-semibold text-gray-900">January, 2026</span>
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-2">Developer Note</h3>
          <p className="text-md text-gray-700 leading-relaxed">
            ApplyWise was designed and built from the ground up by <strong>MD Qasim</strong> as a solo 
            developer project. My mission is to create a seamless, efficient platform that simplifies 
            the application process for everyone. Every feature is carefully crafted with a focus on 
            user experience and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Settings };