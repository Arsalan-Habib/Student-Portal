import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../state/actions/studentActions";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = () => {
    const [seatNumber, setSeatNumber] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const { accessToken } = useSelector((state) => state.studentDetails);

    const history = useHistory();

    // handling login.
    async function handleLogin(e) {
        e.preventDefault();
        dispatch(login(seatNumber, password));
    }

    // redirecting if already logged in.
    useEffect(() => {
        if (accessToken) {
            history.push("/");
        }
    }, [accessToken, history]);

    return (
        <div className='flex flex-col  mx-auto md:w-1/3 px-2 justify-center items-center min-h-fillHeight '>
            <h3 className='text-xl md:text-4xl text-gray-300 text-center'>
                SIGN IN
            </h3>
            <form
                className='flex flex-col w-full my-6 mt-12'
                onSubmit={handleLogin}
            >
                <label className=' md:text-xl' htmlFor='seatNumber'>
                    Seat Number:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md'
                    id='seatNumber'
                    type='text'
                    value={seatNumber}
                    onChange={(e) => {
                        setSeatNumber(e.target.value);
                    }}
                    required
                />

                <label className=' md:text-xl mt-6' htmlFor='password'>
                    Password:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md'
                    id='password'
                    type='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                />
                <span className='text-sm md:text-lg'>
                    Don't have an account? Sign up
                    <Link
                        to='/register'
                        className='font-semibold  text-gray-100 hover:text-green-500 '
                    >
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
