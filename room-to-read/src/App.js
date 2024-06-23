import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout';
import TeacherLogin from './components/pages/TeacherLogin';
import GetStudentList from './components/pages/getStudentList';
import Studentregistration from './components/pages/studentRegistration';
import LibraryDashboard from './components/pages/libraryDashboard';
import PublicRoutes from './components/pages/publicRoutes';
import PrivateRoutes from './components/pages/privateRoutes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' index element={<PublicRoutes><TeacherLogin/></PublicRoutes>}/>
          <Route path='/login' index element={<PublicRoutes><TeacherLogin/></PublicRoutes>}/>
          <Route path='/studentlist' index element={<PrivateRoutes> <GetStudentList/> </PrivateRoutes>}/>
          <Route path='/studentregistration' index element={<PrivateRoutes><Studentregistration/></PrivateRoutes>}/>
          <Route path='/librarydashboard' index element={<PrivateRoutes><LibraryDashboard/></PrivateRoutes>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
