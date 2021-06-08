import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { studentApi } from "../config/apiHelper";

const RegisterScreen = () => {
    // managing form state
    const [studentInfo, setStudentInfo] = useState({
        fullName: "",
        seatNumber: "",
        faculty: "",
        phoneNumber: "",
        email: "",
        shift: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const [profileImage, setProfileImage] = useState(null);

    // for handling the change in values.
    function handleOnChange(e) {
        let updatedInfo = { ...studentInfo };
        updatedInfo[e.target.name] = e.target.value;
        setStudentInfo(updatedInfo);
    }

    // for handling file uploads.
    function handleProfileImageChange(e) {
        if (e.target.files) {
            setProfileImage(e.target.files[0]);
        } else {
            setProfileImage("");
        }
    }

    // utility function for converting image file to base64 string.
    async function encodeImage(image) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
        });
    }

    async function registerStudent() {
        setLoading(true);

        const student = {
            ...studentInfo,
            image: await encodeImage(profileImage),
        };

        try {
            console.log(student);
            const { data } = await studentApi.post("", student);
            console.log(data);
            setLoading(false);
        } catch (error) {
            console.error(error.response.data);
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col my-16 mx-auto md:w-1/2 2xl:w-2/5 px-2 justify-center items-center min-h-fillHeight '>
            <h3 className='text-xl md:text-4xl text-gray-300 text-center'>
                REGISTER A NEW ACCOUNT
            </h3>
            <form
                className='flex flex-col w-full my-6 mt-12'
                onSubmit={(e) => {
                    e.preventDefault();
                    registerStudent();
                }}
            >
                <label className=' md:text-xl text-center'>Profile Image</label>
                <div className='inline-block'>
                    <div
                        className={
                            "text-center w-52 h-56 md:w-60 md:h-64 bg-gray-800 rounded-sm mt-4 mb-6 mx-auto flex justify-center items-center overflow-hidden"
                        }
                    >
                        {!profileImage ? (
                            <i className='text-gray-700 text-10xl fas fa-user'></i>
                        ) : (
                            <img
                                src={URL.createObjectURL(profileImage)}
                                alt='student'
                            />
                        )}
                    </div>
                </div>
                <label
                    className='md:text-xl transition-colors cursor-pointer bg-gradient-to-b from-blue-700 to-indigo-800 hover:from-blue-900 hover:to-indigo-900 hover:text-gray-100  w-52 md:w-72 h-8 mx-auto mb-4 flex justify-center items-center rounded-sm'
                    htmlFor='image-upload'
                >
                    <input
                        className='md:text-xl mx-auto hidden'
                        id='image-upload'
                        type='file'
                        accept='image/gif, image/jpeg, image/png'
                        onChange={handleProfileImageChange}
                    />
                    Upload Image
                </label>

                <label className=' md:text-xl' htmlFor='name'>
                    Full Name:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='name'
                    type='text'
                    name='fullName'
                    value={studentInfo.fullName}
                    onChange={handleOnChange}
                    required
                />
                <label className=' md:text-xl' htmlFor='seatNumber'>
                    Seat No:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='seatNumber'
                    type='text'
                    name='seatNumber'
                    value={studentInfo.seatNumber}
                    onChange={handleOnChange}
                    required
                />
                <label className='my-2 md:text-xl' htmlFor='faculty'>
                    Faculty:
                </label>

                <div className='flex mb-6 text-lg items-center'>
                    <div className='mr-4'>
                        <input
                            type='radio'
                            name='faculty'
                            id='CS'
                            value='CS'
                            checked={studentInfo.faculty === "CS"}
                            onChange={handleOnChange}
                        />{" "}
                        <label htmlFor='CS'>CS</label>
                    </div>
                    <div className='mx-4'>
                        <input
                            type='radio'
                            name='faculty'
                            id='SE'
                            value='SE'
                            checked={studentInfo.faculty === "SE"}
                            onChange={handleOnChange}
                        />{" "}
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
                    name='phoneNumber'
                    value={studentInfo.phoneNumber}
                    onChange={handleOnChange}
                    required
                />
                <label className=' md:text-xl' htmlFor='email'>
                    Email Address:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='email'
                    type='email'
                    name='email'
                    value={studentInfo.email}
                    onChange={handleOnChange}
                    required
                />
                <label className='my-2 md:text-xl' htmlFor='shift'>
                    Shift:
                </label>
                <div className='flex mb-6 text-lg items-center'>
                    <div className='mr-4'>
                        <input
                            type='radio'
                            name='shift'
                            id='morning'
                            value='morning'
                            checked={studentInfo.shift === "morning"}
                            onChange={handleOnChange}
                        />{" "}
                        <label htmlFor='morning'>Morning</label>
                    </div>
                    <div className='mx-4'>
                        <input
                            type='radio'
                            name='shift'
                            id='evening'
                            value='evening'
                            checked={studentInfo.shift === "evening"}
                            onChange={handleOnChange}
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
                    name='password'
                    value={studentInfo.password}
                    onChange={handleOnChange}
                    required
                />
                <label className=' md:text-xl ' htmlFor='password'>
                    Confirm Password:
                </label>
                <input
                    className='bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md'
                    id='confirmPassword'
                    type='password'
                    name='confirmPassword'
                    value={studentInfo.confirmPassword}
                    onChange={handleOnChange}
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
