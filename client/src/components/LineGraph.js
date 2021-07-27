import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { gpaCalculator } from "../utils/gpaCalculator";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip bg-gray-900 p-3 rounded-md'>
                <p className='label font-bold'>{`${payload[0].payload.title}`}</p>
                <p className='label'>{`Semester:  ${payload[0].payload.semester}`}</p>
                <p className='intro'>{`GPA: ${payload[0].payload.gpa}`}</p>
                <p className='intro'>{`Theory marks: ${payload[0].payload.theoryMarks}`}</p>
                <p className='intro'>{`Lab marks: ${
                    payload[0].payload.labMarks
                        ? payload[0].payload.labMarks
                        : "N/A"
                }`}</p>
            </div>
        );
    }

    return null;
};

const LineGraph = ({ results }) => {
    let semesters = [];

    for (let result of results) {
        let labMarks = result.labMarks ? result.labMarks : 0;
        result.gpa = gpaCalculator(labMarks + result.theoryMarks).gpa;
        semesters.push(result.semester);
    }
    semesters = new Set(semesters);

    return (
        <div className='pb-8 flex flex-col items-center justify-center'>
            <p className='text-3xl font-bold pb-8 uppercase'>GPA Progress</p>
            <LineChart
                className='bg-gray-800 bg-gradient-to-t from-gray-800 to-blue-900 '
                width={800}
                height={400}
                data={results}
                margin={{ top: 35, right: 50, bottom: 10, left: 0 }}
            >
                <Line
                    type='monotone'
                    dataKey='gpa'
                    strokeWidth={1}
                    stroke='#cdcdcd'
                />
                {/* <CartesianGrid stroke='#434' /> */}
                <XAxis
                    dataKey='semester'
                    stroke='#cdcdcd'
                    type='category'
                    ticks={[...semesters]}
                />
                <YAxis stroke='#cdcdcd' domain={[0, 4.0]} />
                <Tooltip
                    wrapperStyle={{
                        width: "max-content",
                        color: "#ccc",
                    }}
                    contentStyle={{
                        backgroundColor: "#111827",
                        padding: "16px",
                        border: "none",
                    }}
                    content={<CustomTooltip />}
                />
            </LineChart>
        </div>
    );
};

export default LineGraph;
