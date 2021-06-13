import React from "react";
import ResultCard from "../components/ResultCard";

const ResultScreen = () => {
    return (
        <div className='md:px-10 lg:px-12 xl:px-16 2xl:px-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-4'>
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={76}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={76}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={76}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={76}
                />
                <ResultCard
                    courseNumber={"BSCS-633"}
                    courseTitle={"Internet Application Development"}
                    labMarks={18}
                    theoryMarks={76}
                />
            </div>
        </div>
    );
};

export default ResultScreen;
