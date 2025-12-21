import { LandingPage } from './Pages/LandingPage.jsx'
import { Contact } from './Pages/Contact.jsx'
import { Features } from './Pages/Features.jsx'
import { Works } from './Pages/Works.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/features' element={<Features />} />
            <Route path='/how-it-works' element={<Works />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
