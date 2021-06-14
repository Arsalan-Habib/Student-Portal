import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "../components/FilterBar";
import ResultCard from "../components/ResultCard";
import { studentApi } from "../config/apiHelper";
import { getResults } from "../state/actions/studentActions";

const ResultScreen = ({ history }) => {
    const { student, accessToken } = useSelector(
        (state) => state.studentDetails
    );
    const { results, loading, error } = useSelector(
        (state) => state.studentResults
    );
    const dispatch = useDispatch();

    const [filteredResults, setFilteredResults] = useState([results]);

    // redirecting if not logged in
    useEffect(() => {
        if (!accessToken) {
            history.push("/login");
        } else {
            dispatch(getResults(student.seatNumber));
        }
    }, [accessToken, history, dispatch, student.seatNumber]);

    return (
        <div className='md:px-10 lg:px-12 xl:px-16 2xl:px-32'>
            <h2 className='text-4xl text-center font-semibold text-gray-200 py-8 xl:py-12'>
                Recent Results
            </h2>
            {loading ? (
                <div className='text-center'>
                    <p className='text-2xl pt-20'>Loading Results</p>
                    <i className='text-3xl py-4 fa-spin fas fa-yin-yang'></i>
                </div>
            ) : (
                <div>
                    <FilterBar
                        results={results}
                        setResults={setFilteredResults}
                    />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-4'>
                        {filteredResults.length > 0 &&
                            filteredResults.map((result) => (
                                <ResultCard
                                    key={result._id}
                                    courseNumber={result.courseNumber}
                                    courseTitle={result.title}
                                    labMarks={
                                        result.labMarks ? result.labMarks : null
                                    }
                                    theoryMarks={result.theoryMarks}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultScreen;
