import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // Controlling the profile drop down menu state
    const [profileDropDown, setProfileDropDown] = useState(false);

    // Toggling the profile dropdown
    const toggleMenu = () => {
        setProfileDropDown(!profileDropDown);
    };

    // mobile menu state
    const [mobileMenuDropDown, setMobileMenuDropDown] = useState(false);

    // Toggling the mobile menu dropdown
    const toggleMobileMenu = () => {
        setMobileMenuDropDown(!mobileMenuDropDown);
    };

    // styles for active link
    const activeStyle = {
        color: "white",
        backgroundColor: "rgba(17, 24, 39)",
    };

    return (
        <nav className='bg-gray-800 border-b-4 border-gray-700'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Menu Button for mobile */}
                        <button
                            onClick={toggleMobileMenu}
                            type='button'
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>

                            {/* 
                                The menu icon for when the menu isnt open. ( the three bars  ) 
                                menu states and their classes: menu closed -> 'block' , menu open -> 'hidden' 
                            */}

                            <svg
                                className={`${
                                    !mobileMenuDropDown ? "block" : "hidden"
                                } h-6 w-6`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>

                            {/* 
                                The menu icon for when the menu is open. ( the cross ) 
                                menu states and their classes: menu open -> 'block' , menu closed -> 'hidden' 
                            */}

                            <svg
                                className={`${
                                    mobileMenuDropDown ? "block" : "hidden"
                                } h-6 w-6`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <img
                                className='block lg:hidden h-8 w-auto'
                                src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                                alt='Workflow'
                            />
                            <img
                                className='hidden lg:block h-8 w-auto'
                                src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                                alt='Workflow'
                            />
                        </div>
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4'>
                                <NavLink
                                    exact
                                    to='/'
                                    activeStyle={activeStyle}
                                    className='text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 '
                                    aria-current='page'
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    to='/class'
                                    activeStyle={activeStyle}
                                    className='text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 '
                                    aria-current='page'
                                >
                                    Class
                                </NavLink>
                                <NavLink
                                    to='/results'
                                    activeStyle={activeStyle}
                                    className='text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 '
                                    aria-current='page'
                                >
                                    Results
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <button className='mr-2 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                            <span className='sr-only'>View notifications</span>
                            {/* <!-- Heroicon name: outline/bell --> */}
                            <svg
                                className='h-6 w-6'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                                />
                            </svg>
                        </button>

                        {/* <!-- Profile dropdown --> */}
                        <div className='ml-3 relative'>
                            <div>
                                <button
                                    // onBlur={() => setProfileDropDown(false)}
                                    onClick={toggleMenu}
                                    type='button'
                                    className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                                    id='user-menu'
                                    aria-expanded='false'
                                    aria-haspopup='true'
                                >
                                    <span className='sr-only'>
                                        Open user menu
                                    </span>
                                    <img
                                        className='h-8 w-8 rounded-full'
                                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                        alt=''
                                    />
                                </button>
                            </div>

                            {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                            <div
                                className={` ${
                                    profileDropDown ? "block" : "hidden"
                                } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                role='menu'
                                aria-orientation='vertical'
                                aria-labelledby='user-menu'
                            >
                                <Link
                                    to='/profile'
                                    onClick={toggleMenu}
                                    className={`${
                                        profileDropDown ? "block" : "hidden"
                                    } px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 `}
                                    aria-current='page'
                                    role='menuitem'
                                >
                                    Profile
                                </Link>
                                <Link
                                    to='/settings'
                                    onClick={toggleMenu}
                                    className={`${
                                        profileDropDown ? "block" : "hidden"
                                    } px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                                    aria-current='page'
                                    role='menuitem'
                                >
                                    Settings
                                </Link>
                                <Link
                                    to='/signout'
                                    onClick={toggleMenu}
                                    className={`${
                                        profileDropDown ? "block" : "hidden"
                                    } px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                                    aria-current='page'
                                    role='menuitem'
                                >
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div
                className={`${
                    mobileMenuDropDown ? "block" : "hidden"
                } sm:hidden`}
                id='mobile-menu'
            >
                <div className='px-2 pt-2 pb-3 space-y-1'>
                    <NavLink
                        exact
                        to='/'
                        onClick={toggleMobileMenu}
                        activeStyle={activeStyle}
                        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        aria-current='page'
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to='/class'
                        onClick={toggleMobileMenu}
                        activeStyle={activeStyle}
                        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    >
                        Class
                    </NavLink>

                    <NavLink
                        to='/results'
                        onClick={toggleMobileMenu}
                        activeStyle={activeStyle}
                        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    >
                        Results
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
