import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
    const navbarItems = <>
        <li className='mx-auto lg:mr-4 font-bold text-white'><a href='#services'>Services</a></li>
        <li className='mx-auto lg:mr-4 font-bold text-white'><a href='#portfolio'>Projects</a></li>
        <li><a href='https://drive.google.com/file/d/1nCGHmQdybio5EnV6OUooDHC1vQy5-JR-/view?usp=sharing' target='_blank' className="bg-blue-700 hover:bg-blue-900 hover:text-[#FFFF00] font-bold py-2 px-4 ">Resume</a></li>
    </>
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="navbar bg-base-700 mb-32"
        >
            <div className="navbar-start">
                <p className="normal-case text-xl font-bold text-white">Abu Tanif MD Bappa</p>
            </div>
            <div className="dropdown flex navbar-end">
                <label tabIndex="0" className="btn btn-ghost lg:hidden self-end">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </label>
                <ul tabIndex="0" className="dropdown-content menu p-2 top-12 shadow bg-base-100">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </motion.div>
    );
};

export default NavBar;