import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import Programs from './components/Programs/Programs'
// import Title from './components/Title/Title';
// import About from './components/About/About';
// import OurTeam from './components/OurTeam/OurTeam';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Layout from './components/Layout';
import TeacherLogin from './components/pages/TeacherLogin';
import GetStudentList from './components/pages/getStudentList';
import Studentregistration from './components/pages/studentRegistration';
import LibraryDashboard from './components/pages/libraryDashboard';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' index element={<TeacherLogin/>}/>
          <Route path='/login' index element={<TeacherLogin/>}/>
          <Route path='/studentlist' index element={<GetStudentList/>}/>
          <Route path='/studentregistration' index element={<Studentregistration/>}/>
          <Route path='/librarydashboard' index element={<LibraryDashboard/>}/>
          </Route>
          {/* <Route path="register" element={<Sign_in />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
