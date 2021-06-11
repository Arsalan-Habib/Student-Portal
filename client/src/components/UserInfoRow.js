import React from "react";
import { useSelector } from "react-redux";

const UserInfoRow = () => {
    const { student, accessToken } = useSelector(
        (state) => state.studentDetails
    );

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
                <div className='w-full md:w-6/12'>
                    <div className='shadow-lg w-full bg-gray-800 dark:bg-gray-700 relative overflow-hidden'>
                        <div className='w-full h-full block'>
                            <div className='flex items-center justify-between px-4 py-8 space-x-4'>
                                <div className='flex items-center'>
                                    {/* insert book/level related icon here */}
                                    <p className='text-sm text-gray-300 dark:text-white ml-2 font-semibold border-b border-gray-200'>
                                        Level 2 Ambassador
                                    </p>
                                </div>
                                <div className='border-b border-gray-200 mt-6 md:mt-0 text-gray-300 dark:text-white font-bold text-xl'>
                                    $44,453.39
                                    <span className='text-xs text-gray-400'>
                                        /$100K
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full md:w-1/2 space-x-4'>
                    <div className='w-1/2'>
                        <div className='shadow-lg px-4 py-6 w-full bg-gray-800 dark:bg-gray-700 relative'>
                            <p className='text-2xl text-gray-300 dark:text-white font-bold'>
                                12
                            </p>
                            <p className='text-gray-400 text-sm'>
                                Active projects
                            </p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='shadow-lg px-4 py-6 w-full bg-gray-800 dark:bg-gray-700 relative'>
                            <p className='text-2xl text-gray-300 dark:text-white font-bold'>
                                $93.76
                            </p>
                            <p className='text-gray-400 text-sm'>
                                Commission in approval
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoRow;
