import React from 'react';
// import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navigationbar from '../components/Navbar/Navigationbar';

const LoginLayout = () => {
    return (
        <>
         <Navigationbar></Navigationbar> 
                 <Outlet></Outlet>
         <Footer></Footer>
            
        </>
    );
};

export default LoginLayout;