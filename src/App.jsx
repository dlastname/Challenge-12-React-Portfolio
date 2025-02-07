import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
// import Footer from './components/Footer';
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
         <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
