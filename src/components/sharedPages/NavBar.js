import React from 'react';

const NavBar = () => {
    const navbarItems = <>
        <li className='mr-4'><a>Item 1</a></li>
        <li className='mr-4'><a>Item 3</a></li>
        <li><a class="btn">Download Resume</a></li>
    </>
    return (
        <div class="navbar bg-base-100 mb-20">
            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="dropdown flex navbar-end">
                <label tabindex="0" class="btn btn-ghost lg:hidden self-end">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 top-12 shadow bg-base-100 rounded-box w-52">
                    {navbarItems}
                </ul>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;