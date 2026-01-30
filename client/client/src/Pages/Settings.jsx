import { Download, Trash2, FileText, Upload, X, AlertTriangle } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Delete Modal Component (Responsive)
function DeleteModal({ isOpen, onClose, onConfirm, isDeleting }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="text-red-600" size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Delete Profile</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete your ApplyWise profile? This action cannot be undone. 
          All your data will be permanently deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
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
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-400 to-blue-200 p-4 md:p-8">
      {/* Title centered on mobile, left-aligned on desktop */}
      <h1 className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto mb-6">Settings</h1>
      
      {errorMessage && (
        <div className="max-w-3xl mx-auto mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* User Information Container */}
      <div className="max-w-3xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              value={email || ""}
              disabled
              className="w-full mt-1 p-2 border rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Alternate Email (Optional)</label>
            <input
              type="email"
              placeholder="Add another email"
              value={alternateEmail}
              onChange={(e) => setAlternateEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-1 p-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Resume/CV</label>
            {resumeFileName ? (
              <div className="flex items-center justify-between p-3 border rounded-xl bg-blue-50">
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileText className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 truncate">{resumeFileName}</span>
                </div>
                <button onClick={handleResumeDelete} className="text-red-500 p-1">
                  <X size={20} />
                </button>
              </div>
            ) : (
              <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
                <Upload className="text-gray-600" size={20} />
                <span className="text-sm text-gray-600">
                  {isUploading ? "Uploading..." : "Upload PDF or DOCX"}
                </span>
                <input type="file" accept=".pdf,.docx,.doc" onChange={handleResumeUpload} className="hidden" disabled={isUploading} />
              </label>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block">Report a bug</label>
            <textarea
              rows="4"
              placeholder="Describe the issue..."
              className="w-full mt-1 p-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <hr className="my-6 border-gray-100" />

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-800">Download Profile</span>
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                <Download size={18} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-800">Delete Profile</span>
              <button onClick={() => setIsModalOpen(true)} className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <button 
            onClick={handleSaveSettings}
            className="w-full bg-blue-600 text-white mt-6 py-3 rounded-xl hover:bg-blue-700 font-bold shadow-lg transition-transform active:scale-95">
            Save Settings
          </button>
        </div>
      </div>

      {/* About Container */}
      <div className="max-w-3xl mx-auto mt-6 p-4 md:p-6 bg-white rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">About ApplyWise</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">App Version</span>
            <span className="font-semibold text-gray-900">v1.0.0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Last Updated</span>
            <span className="font-semibold text-gray-900">January, 2026</span>
          </div>
          <div className="pt-4">
            <h3 className="text-xs font-bold text-blue-500 uppercase mb-2">Developer Note</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              ApplyWise was built by <strong>MD Qasim</strong>. Every feature is crafted with focus on user experience.
            </p>
          </div>
        </div>
      </div>

      <DeleteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteProfile}
        isDeleting={isDeleting}
      />
    </div>
  );
}

export { Settings };