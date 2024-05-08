import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='bg-blue-800 text-white flex justify-between items-center px-16 h-20'>
        <div className='logo font-extrabold font-roboto text-3xl mx-11'>
            <Link to="/">Wanderlust Voyage</Link></div>
        <ul className='flex justify-between gap-4 mr-20'>
        <Link to="/"><button className='px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-500'>List Your Property</button></Link>            
        <Link to="/register"><button className='px-4 py-2 bg-white text-blue-700 rounded-md hover:bg-slate-100'>Register</button></Link>
        <Link to="/login"><button className='px-4 py-2 bg-white text-blue-700 rounded-md hover:bg-slate-100'>Login</button></Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar