import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const UserInfoRow = () => {
    const { student, accessToken } = useSelector(
        (state) => state.studentDetails
    );

    const history = useHistory();

    // redirecting if not logged in
    useEffect(() => {
        if (!accessToken) {
            history.push("/login");
        }
    }, [accessToken, history]);

    return (
        <div className='overflow-auto py-14'>
            <h2 className='text-4xl font-semibold text-gray-200'>
                Welcome Back,&nbsp;{student.fullName}
            </h2>
            <h3 className='text-xl pt-6 text-gray-300'>
                Here&#x27;s an overview of how you are currently performing in
                university.
            </h3>
            <div className='flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row'>
                <div className='w-full md:w-1/3'>
                    <div className='shadow-lg w-full bg-gray-700 bg-opacity-20 relative overflow-hidden'>
                        <div className='w-full h-full block'>
                            <div className='flex items-center justify-center px-6 py-6 space-x-4'>
                                <div className='flex items-center'>
                                    {/* insert book/level related icon here */}
                                    <p className='text-xl md:text-2xl text-gray-300 ml-2 font-semibold '>
                                        COURSES PASSED:
                                    </p>
                                </div>
                                <div className='md:mt-0 text-gray-300 font-bold text-2xl'>
                                    12/12
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full md:w-2/3 space-x-4'>
                    <div className='w-1/2 text-center'>
                        <div className='shadow-lg px-6 py-6 w-full bg-gray-700 bg-opacity-20'>
                            <p className='text-xl md:text-2xl text-gray-300 font-bold'>
                                CURRENT CGPA:
                                <span className='text-gray-200 text-xl md:text-2xl ml-2'>
                                    3.4
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='w-1/2 text-center'>
                        <div className='shadow-lg px-6 py-6 w-full bg-gray-700 bg-opacity-20'>
                            <p className='text-xl md:text-2xl text-gray-300 font-bold'>
                                CURRENT SEMESTER:
                                <span className='text-gray-200 text-2xl ml-2'>
                                    7
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoRow;
