import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResults } from "../state/actions/studentActions";
import { gpaCalculator } from "../utils/gpaCalculator";

const UserInfoRow = ({ history }) => {
    const { student, accessToken } = useSelector(
        (state) => state.studentDetails
    );
    const { results, loading, error } = useSelector(
        (state) => state.studentResults
    );

    const [passedCourses, setPassedCourses] = useState([]);
    const [cgpa, setCgpa] = useState(null);

    const dispatch = useDispatch();

    // redirecting if not logged in
    useEffect(() => {
        if (!accessToken) {
            history.push("/login");
        } else {
            // fetching results
            dispatch(getResults(student.seatNumber));
        }
    }, [accessToken, history, dispatch, student.seatNumber]);

    // for checking pass or fail
    function checkPass(result) {
        let labMarks = result.labMarks ? result.labMarks : 0;
        return result.theoryMarks + labMarks >= 50;
    }

    function calculateCgpa(results) {
        let score = 0;
        for (let result of results) {
            let labMarks = result.labMarks ? result.labMarks : 0;
            let gpa = gpaCalculator(labMarks + result.theoryMarks).gpa;
            score += gpa;
        }
        return (score / results.length).toFixed(2);
    }

    // filtering the courses
    useEffect(() => {
        let passedCourses;
        if (results) {
            passedCourses = results.filter((result) => checkPass(result));
            setPassedCourses(passedCourses);
            let cgpa = calculateCgpa(passedCourses);
            console.log(cgpa);
            setCgpa(cgpa);
        }
    }, [results]);
    return (
        <div className='overflow-auto py-12 xl:px-14'>
            <h2 className='text-4xl font-semibold text-gray-200'>
                Welcome Back,&nbsp;{student.fullName}
            </h2>
            <h3 className='text-xl pt-6 text-gray-300'>
                Here&#x27;s an overview of how you are currently performing in
                university.
            </h3>
            {loading ? (
                <div className='text-center'>
                    <p className='text-2xl pt-20'>Loading Results</p>
                    <i className='text-3xl py-4 fa-spin fas fa-yin-yang'></i>
                </div>
            ) : (
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
                                        {passedCourses.length}/{results.length}
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
                                        {cgpa}
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
            )}
        </div>
    );
};

export default UserInfoRow;
