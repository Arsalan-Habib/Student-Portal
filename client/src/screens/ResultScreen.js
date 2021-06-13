import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ResultCard from "../components/ResultCard";
import { studentApi } from "../config/apiHelper";

const ResultScreen = ({ history }) => {
    const { student, accessToken } = useSelector(
        (state) => state.studentDetails
    );

    const [results, setResults] = useState([]);

    async function getResults() {
        try {
            const { data } = await studentApi.get(
                `/courses/${student.seatNumber}`
            );
            if (data.courses) {
                setResults(data.courses);
            }
        } catch (error) {
            console.error(error.response.data.message);
            window.alert(error.response.data.message);
        }
    }

    // redirecting if not logged in
    useEffect(() => {
        if (!accessToken) {
            history.push("/login");
        } else {
            getResults();
        }
    }, [accessToken, history]);

    return (
        <div className='md:px-10 lg:px-12 xl:px-16 2xl:px-32'>
            <h2 className='text-4xl text-center font-semibold text-gray-200 py-8 xl:py-12'>
                Recent Results
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-4'>
                {results.map((result) => (
                    <ResultCard
                        key={result._id}
                        courseNumber={result.courseNumber}
                        courseTitle={result.title}
                        labMarks={result.labMarks ? result.labMarks : null}
                        theoryMarks={result.theoryMarks}
                    />
                ))}
            </div>
        </div>
    );
};

export default ResultScreen;
