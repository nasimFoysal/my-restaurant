import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer> 
        </>
    );
};

export default MainLayout;