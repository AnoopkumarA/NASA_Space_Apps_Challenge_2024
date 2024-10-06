
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/home/home'
import Service from './pages/service/service'
import Contact from './pages/contact/contact'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './pages/Portfolio/Portfolio'
import Clients from './pages/Clients/sun'
import Joinus from './pages/joinus/Joinus'
import Jupiter from './pages/jupiter/jupiter'
import Uranus from './pages/Uranus/uranus'
import Mars from './pages/Mars/mars'




function App() {
  return (
    
    <><div className="bg-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Joinus" element={<Joinus />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      
</div>



    </>
    
  )
}

export default App