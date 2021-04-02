import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
    return (
        <div className='flex flex-col my-16 mx-auto md:w-1/3 px-2 justify-center items-center min-h-fillHeight '>
            <h3 className='text-xl md:text-4xl text-gray-300 text-center'>
                SIGN UP
            </h3>
            <form className='flex flex-col w-full my-6 mt-12 '>
                <label className=' md:text-xl' htmlFor='name'>
                    Full Name:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='name'
                    type='text'
                    required
                />
                <label className=' md:text-xl' htmlFor='seatNumber'>
                    Seat No:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='seatNumber'
                    type='text'
                    required
                />
                <label className='my-2 md:text-xl' htmlFor='faculty'>
                    Faculty:
                </label>
                <div className='flex mb-6 text-lg items-center'>
                    <div className='mr-4'>
                        <input type='radio' name='faculty' id='CS' value='CS' />{" "}
                        <label htmlFor='CS'>CS</label>
                    </div>
                    <div className='mx-4'>
                        <input type='radio' name='faculty' id='SE' value='SE' />{" "}
                        <label htmlFor='SE'>SE</label>
                    </div>
                </div>
                <label className=' md:text-xl' htmlFor='phoneNumber'>
                    Phone No:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='phoneNumber'
                    type='text'
                    required
                />
                <label className=' md:text-xl' htmlFor='email'>
                    Email Address:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='email'
                    type='email'
                    required
                />
                <label className='my-2 md:text-xl' htmlFor='shift'>
                    Shift:
                </label>
                <div className='flex mb-6 text-lg items-center '>
                    <div className='mr-4'>
                        <input
                            // className='mx-2'
                            type='radio'
                            name='shift'
                            id='morning'
                            value='morning'
                        />{" "}
                        <label htmlFor='morning'>Morning</label>
                    </div>
                    <div className='mx-4'>
                        <input
                            // className='mx-2'
                            type='radio'
                            name='shift'
                            id='evening'
                            value='evening'
                        />{" "}
                        <label htmlFor='evening'>Evening</label>
                    </div>
                </div>

                <label className=' md:text-xl ' htmlFor='password'>
                    Password:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='password'
                    type='password'
                    required
                />
                <label className=' md:text-xl ' htmlFor='password'>
                    Confirm Password:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='confirmPassword'
                    type='password'
                    required
                />
                <span className='text-sm md:text-lg'>
                    Already have an account? Sign In
                    <Link
                        to='/login'
                        className='font-semibold  text-gray-100 hover:text-green-500 '
                    >
                        {" "}
                        here.
                    </Link>
                </span>
                <button
                    type='submit'
                    className='w-full mt-12 text-gray-100 bg-green-700 hover:bg-green-800 hover:text-white md:text-xl py-2 rounded-sm transition-all focus:outline-none'
                >
                    Create New Account
                </button>
            </form>
        </div>
    );
};

export default RegisterScreen;
