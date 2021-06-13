import React from "react";
import ResultCard from "../components/ResultCard";

const ResultScreen = () => {
    return (
        <div className='md:px-10 lg:px-12 xl:px-16 2xl:px-32'>
            <h2 className='text-4xl text-center font-semibold text-gray-200 py-8 xl:py-12'>
                Recent Results
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-4'>
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    // labMarks={0}
                    theoryMarks={79}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={56}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={26}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={46}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={56}
                />
            </div>
        </div>
    );
};

export default ResultScreen;
