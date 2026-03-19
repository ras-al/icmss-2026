import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'
import Committee from './pages/Committee'
import Registration from './pages/Registration'
import Speakers from './pages/Speakers'
import CameraReady from './pages/CameraReady'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/camera-ready" element={<CameraReady />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
