import { LandingPage } from './Pages/LandingPage.jsx'
import { Contact } from './Pages/Contact.jsx'
import { Features } from './Pages/Features.jsx'
import { Works } from './Pages/Works.jsx'
import { Security } from './Pages/Security.jsx'
import { Signup } from './Pages/Signup.jsx'
import { Signin } from './Pages/Signin.jsx'
import { Dashboard } from './Pages/Dashboard.jsx'
import { Help } from './Pages/Help.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/protectedroute.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

function App() {
  return (
    <>
      <div>
        <Router>
          <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/features' element={<Features />} />
            <Route path='/how-it-works' element={<Works />} />
            <Route path='/security' element={<Security />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/dashboard/help' element={<Help />} />
            <Route 
              path='/dashboard' 
              element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
              }
            />
            </Routes>
            </AuthProvider>
        </Router>
      </div>
    </>
  )
}

export default App
