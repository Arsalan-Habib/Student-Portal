import React, { useEffect } from "react";

const FilterBar = ({ results, setResults }) => {
    function filterResults(filter) {
        if (filter === "All") {
            setResults(results);
            return;
        } else {
            let filteredResults = results.filter((result) => {
                return result.semester === filter;
            });
            setResults(filteredResults);
        }
    }

    // filtering by all on initial page load.
    useEffect(() => {
        filterResults("All");
    }, [results]);

    return (
        <div className='py-6 flex flex-row justify-center items-center'>
            <p className='text-2xl font-semibold'>Filter Results: </p>

            <button
                onClick={() => {
                    filterResults("All");
                }}
                className='bg-gray-700 px-8 mx-4 text-gray-200 text-lg font-bold rounded-lg'
            >
                All
            </button>
            <button
                onClick={() => {
                    filterResults(1);
                }}
                className='bg-green-700 hover:bg-green-900 hover:text-gray-50 transition-all px-8 mx-4 text-gray-200 text-lg font-bold rounded-lg'
            >
                1st
            </button>
            <button
                onClick={() => {
                    filterResults(2);
                }}
                className='bg-green-700 hover:bg-green-900 hover:text-gray-50 transition-all px-8 mx-4 text-gray-200 text-lg font-bold rounded-lg'
            >
                2nd
            </button>
            <button
                onClick={() => {
                    filterResults(3);
                }}
                className='bg-green-700 hover:bg-green-900 hover:text-gray-50 transition-all px-8 mx-4 text-gray-200 text-lg font-bold rounded-lg'
            >
                3rd
            </button>
            <button
                onClick={() => {
                    filterResults(4);
                }}
                className='bg-green-700 hover:bg-green-900 hover:text-gray-50 transition-all px-8 mx-4 text-gray-200 text-lg font-bold rounded-lg'
            >
                4th
            </button>
        </div>
    );
};

export default FilterBar;
