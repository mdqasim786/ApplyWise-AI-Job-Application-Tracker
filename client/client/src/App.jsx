import { useState } from 'react'
import { LandingPage } from './Pages/LandingPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
