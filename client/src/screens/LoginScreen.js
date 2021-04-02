import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
    return (
        <div className='flex flex-col mx-auto md:w-1/3 px-2 justify-center items-center min-h-fillHeight '>
            <h3 className='text-xl md:text-4xl text-gray-300 text-center'>
                SIGN IN
            </h3>
            <form className='flex flex-col w-full my-6 mt-12 '>
                <label className=' md:text-xl' htmlFor='email'>
                    Email Address:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md'
                    id='email'
                    type='text'
                    required
                />

                <label className=' md:text-xl mt-6' htmlFor='password'>
                    Password:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md'
                    id='password'
                    type='password'
                    required
                />
                <span className='text-sm md:text-lg'>
                    Don't have an account? Sign up
                    <Link className='font-semibold  text-gray-100 hover:text-green-500 '>
                        {" "}
                        here.
                    </Link>
                </span>

                <button
                    type='submit'
                    className='w-full mt-12 text-gray-100 bg-green-700 hover:bg-green-800 hover:text-white md:text-xl py-2 rounded-sm transition-all'
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginScreen;
