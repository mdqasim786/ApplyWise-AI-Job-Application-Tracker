import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  return (
    <>
    <div>
    </div>
    <div className='bg-white flex items-center gap-26'>
      <img src='../public/images/logo.png' alt='Logo' className='w-35 h-15 ml-20' />

    <Link to="/home" className="text-black text-lg font-bolder font-mono hover:underline hover:underline-offset-4 cursor-pointer">HOME</Link>

    <Link to="/features" className="text-black text-lg font-bolder font-mono hover:underline hover:underline-offset-4 cursor-pointer">FEATURES</Link>

    <Link to="/how-it-works" className="text-black text-lg font-bolder font-mono hover:underline hover:underline-offset-4 cursor-pointer">HOW IT WORKS</Link>

    <Link to="/security" className="text-black text-lg font-bolder font-mono hover:underline hover:underline-offset-4 cursor-pointer">SECURTIY</Link>

      <div className='flex items-center gap-10'>
        <Link to="/signin" className="text-black text-lg font-bolder font-mono ">SIGN IN</Link>
        <Link to="/signup" className="text-black text-lg font-bolder font-mono ">SIGN UP</Link>
      </div>
    </div>

    <div className='bg-black'>
      <h1 className='text-white text-5xl text-center pt-20'>Welcome to MovieVerse</h1>
      <p className='text-white text-center mt-4 text-lg'>Your ultimate destination for movie enthusiasts!
      </p>
    </div>
    </>
  );
}

export { LandingPage }