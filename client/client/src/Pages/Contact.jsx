import { useNavigate } from 'react-router-dom';
import Header from '../components/header.jsx';
import React from 'react';
import { useEffect } from 'react';
import useMobileMenu from '../hooks/useMobileMenu.js';

function Contact() {
  const navigate = useNavigate();
  const {mobileMenuOpen, setMobileMenuOpen} = useMobileMenu();

  return (
    <>
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="bg-gradient-to-b from-blue-300 via-blue-300 to-white">
        <div className="max-w-6xl mx-auto py-6 px-6">
          <div className="text-center mb-6">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              Get In Touch
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Let’s <span className="text-blue-500">Connect</span>
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Have a question, feedback, or partnership idea?  
              We’d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-700">Email</h3>
                <p className="text-gray-600 mt-1">support@applywise.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-700">Phone</h3>
                <p className="text-gray-600 mt-1">+92 300 1234567</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-700">Website</h3>
                <p className="text-gray-600 mt-1">www.applywise.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-700">Location</h3>
                <p className="text-gray-600 mt-1">Pakistan</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Follow Us
              </h3>

              <div className="flex gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition cursor-pointer">
                  <span className="text-blue-600 font-bold text-lg">in</span>
                </div>

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition cursor-pointer">
                  <span className="text-pink-500 font-bold text-lg">IG</span>
                </div>

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition cursor-pointer">
                  <span className="text-blue-700 font-bold text-lg">f</span>
                </div>

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition cursor-pointer">
                  <span className="text-black font-bold text-lg">X</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export { Contact };
