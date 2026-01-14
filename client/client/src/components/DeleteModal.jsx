import React from 'react';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full mx-4">
        <h3 className="text-lg font-bold text-gray-900">Are you sure?</h3>
        <p className="text-sm text-gray-600 mt-2">
          Are you sure you want to delete your account on ApplyWise? 
          Once you do this, <strong>all your data will be permanently removed.</strong>
        </p>
        
        <div className="flex gap-3 mt-6">
          <button 
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium cursor-pointer"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;