import React from 'react'
import {Outlet} from 'react-router-dom'
// import Header from './Header'
// import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Navbar/Navbar';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Programs from './Programs/Programs';
import Tests from './OurTeam/OurTeam';
import Title from './Title/Title';
const Layout = () => {
  return (
    <>
    <NavBar/>
    <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />  
     <div className='dark jumbo relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-transparent transition-bg'>
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
        <div className="mt-4">
            <Outlet/>
        </div>
      </div>

      <div className='container'>
                <Title title='Our Programs' subtitle="Our Work is in alignment to the NIPUN Bharat Mission by the Ministry of Education (MOE)" />
                <Programs />
                <Title title='Our Team' subtitle="Meet our global leaders who have deep expertise in International Education, Business and Finance" />
                <Tests/>
                <Title title='Contact Us' subtitle="Let's connect" />
                <Contact />
                <Footer />
              </div>
    </>
  )
}

export default Layout