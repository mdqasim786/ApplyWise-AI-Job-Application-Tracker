import { useState, useEffect } from 'react';

function Profile(){
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordButton, setShowPasswordButton] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEmail(data.email);
        setFullName(data.fullName || "");
        setMobileNumber(data.mobileNumber || "");
      }
    } catch (error) {
      setErrorMessage("Failed to load profile");
    }
  };

  useEffect(() => {
    if (currentPassword && newPassword && newPassword.length >= 8) {
      setShowPasswordButton(true);
    } else {
      setShowPasswordButton(false);
    }
  }, [currentPassword, newPassword]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:5000/api/profile/password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Password changed successfully!");
        setCurrentPassword("");
        setNewPassword("");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Failed to change password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:5000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullName,
          mobileNumber,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Profile updated!");
      }
    } catch (error) {
      setErrorMessage("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-700 to-blue-500 overflow-hidden">
  
      {/* Decorative Bubbles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-20 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse" />
  
      {/* Page Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
  
        {/* Header */}
        <div className="mb-10 text-white">
          <h1 className="text-3xl font-semibold">Profile Settings</h1>
          <p className="text-blue-100 mt-2">
            Manage your account information and security
          </p>
        </div>
  
        {/* Alerts */}
        {successMessage && (
          <div className="mb-6 bg-green-100 text-green-700 border border-green-200 p-3 rounded-xl">
            {successMessage}
          </div>
        )}
  
        {errorMessage && (
          <div className="mb-6 bg-red-100 text-red-700 border border-red-200 p-3 rounded-xl">
            {errorMessage}
          </div>
        )}
  
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-xl border border-white/30 p-8 space-y-10">
  
          {/* Account Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Account Information
            </h2>
  
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              value={email}
              disabled
              className="w-full mt-2 p-3 border rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>
  
          {/* Change Password */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Security
            </h2>
  
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
  
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
  
              {showPasswordButton && (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-70"
                >
                  {isLoading ? "Updating..." : "Update Password"}
                </button>
              )}
            </form>
          </div>
  
          {/* Profile Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Personal Information
            </h2>
  
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
  
              <input
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
  
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-70"
              >
                Save Changes
              </button>
            </form>
          </div>
  
        </div>
      </div>
    </div>
  );
  
  
}
export {Profile}