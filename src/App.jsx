import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Grow } from './pages/Grow.jsx'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grow" element={<Grow />} />
        </Routes>
      </Router>
    </>
  )
}




