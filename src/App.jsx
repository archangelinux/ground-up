import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Greenhouse from './pages/Greenhouse.jsx'
import { Home } from './pages/Home.jsx'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greenhouse" element={<Greenhouse />} />
        </Routes>
      </Router>
    </>
  )
}




