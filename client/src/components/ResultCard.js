import React from "react";

const ResultCard = ({ courseTitle, courseNumber, labMarks, theoryMarks }) => {
    return (
        <div class='shadow-lg  w-full max-w-sm mx-auto mb-8 bg-gray-800 rounded-lg'>
            <div className='bg-indigo-800 bg-gradient-to-br from-indigo-900 to-blue-700 px-4 py-4 rounded-t-sm'>
                <h4 class='text-xl  w-max text-gray-300 dark:text-white font-semibold'>
                    {courseNumber}
                </h4>
                <p className='text-sm  w-max text-gray-300 border-b border-gray-200'>
                    {courseTitle}
                </p>
            </div>
            <div className='flex justify-between px-4 py-4 '>
                <div>
                    <p class='text-5xl text-gray-400  font-semibold pb-2'>
                        GPA
                    </p>
                    <p class='text-7xl text-gray-200  font-normal'>4.0</p>
                </div>
                <div className='px-10'>
                    <div className='flex flex-col items-start pb-4'>
                        <p className='text-xl text-gray-400 font-semibold'>
                            Total
                        </p>
                        <p className='text-2xl text-gray-300 font-normal'>
                            {theoryMarks + labMarks}/100
                        </p>
                    </div>
                    <div className='flex items-start'>
                        <div className='pr-4'>
                            <p class='text-lg text-gray-400  font-semibold'>
                                Theory
                            </p>
                            <p class='text-lg text-gray-200  font-normal'>
                                {theoryMarks}/80
                            </p>
                        </div>
                        <div>
                            <p class='text-lg text-gray-400  font-semibold'>
                                Lab
                            </p>
                            <p class='text-lg text-gray-200  font-normal'>
                                {labMarks}/20
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
