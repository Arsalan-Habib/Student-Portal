import React from "react";

const Container = ({ children }) => {
    return (
        <div className='bg-gray-900 px-4 py-2 font-mono text-gray-300 2xl:px-32'>
            {children}
        </div>
    );
};

export default Container;
