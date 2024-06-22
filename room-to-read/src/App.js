import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title';
import About from './components/About/About';
import OurTeam from './components/OurTeam/OurTeam';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={
            <>
              <Navbar />
              <Home />
              <div className='container'>
                <Title title='Our Programs' subtitle="Our Work is in alignment to the NIPUN Bharat Mission by the Ministry of Education (MOE)" />
                <Programs />
                <About />
                <Title title='Our Team' subtitle="Meet our global leaders who have deep expertise in International Education, Business and Finance" />
                <OurTeam />
                <Title title='Contact Us' subtitle="Let's connect" />
                <Contact />
                <Footer />
              </div>
            </>
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Sign_in />} />
          <Route path="studentregister" element={<StudentRegister />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
