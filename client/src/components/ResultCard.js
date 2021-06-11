import React from "react";
import { gpaCalculator } from "../utils/gpaCalculator";

const ResultCard = ({ courseTitle, courseNumber, labMarks, theoryMarks }) => {
    return (
        <div className='shadow-lg  w-full max-w-sm mx-auto mb-2 bg-gray-800 rounded-lg'>
            <div className='bg-indigo-800 bg-gradient-to-br from-indigo-900 to-blue-700 px-6 py-4 rounded-t-sm'>
                <h4 className='text-2xl  w-max text-gray-300 dark:text-white font-semibold'>
                    {courseNumber}
                </h4>
                <p className='text-lg  text-gray-300 '>{courseTitle}</p>
            </div>
            <div className='flex justify-between px-8 py-4 '>
                <div>
                    <p className='text-5xl text-gray-400  font-semibold pb-2'>
                        GPA
                    </p>
                    <p className='text-7xl text-gray-200  font-normal'>
                        {gpaCalculator(theoryMarks + labMarks).gpa.toFixed(1)}
                    </p>
                </div>
                <div className='2xl:px-4'>
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
                            <p className='text-lg text-gray-400  font-semibold'>
                                Theory
                            </p>
                            <p className='text-lg text-gray-200  font-normal'>
                                {theoryMarks}/80
                            </p>
                        </div>
                        <div>
                            <p className='text-lg text-gray-400  font-semibold'>
                                Lab
                            </p>
                            <p className='text-lg text-gray-200  font-normal'>
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
