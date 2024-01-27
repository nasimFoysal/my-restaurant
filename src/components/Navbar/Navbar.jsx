import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mx-auto w-1/2 text-center'>
            <Link className='mr-6' to='/'>Home</Link>
            <Link className='mr-6' to='/about'>About</Link>
            <Link className='mr-6' to='/reviews'>Reviews</Link>
            <Link className='mr-6' to='/contact'>Contact Us</Link>
            <Link className='mr-6' to='/user/login'>Login</Link>
            <Link className='mr-6' to='/user/register'>Register</Link>
        </div>
    );
};

export default Navbar;