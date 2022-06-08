import React from 'react';

const NavBar = () => {
    const navbarItems = <>
        <li className='mr-4'><a>Item 1</a></li>
        <li className='mr-4'><a>Item 3</a></li>
        <li><a className="btn">Download Resume</a></li>
    </>
    return (
        <div className="navbar bg-base-100 mb-32">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="dropdown flex navbar-end">
                <label tabindex="0" className="btn btn-ghost lg:hidden self-end">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </label>
                <ul tabindex="0" className="dropdown-content menu p-2 top-12 shadow bg-base-100 rounded-box w-52">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;