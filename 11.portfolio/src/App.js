import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar />
    
     <div>
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path= "/work" element = {<Work />} />
        <Route path= "/contact" element = {<Contact />} />
      </Routes>
     </div>
     <Footer />
    </div>
  );
}

export default App;
