import React from 'react';
import { useRouteError } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='text-center font-2xl'>
            <Navbar></Navbar>
           <h2> Error Message:</h2>
           <p className='font-bold'>{error.error.message}</p>
           <p>Error status code: {error.status}</p>
            
        </div>
    );
};

export default ErrorPage;