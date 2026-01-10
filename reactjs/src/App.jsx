import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ChatDoctor from './components/ChatDoctor'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ChatDoctor />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App