import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LineGraph from "../components/LineGraph";
import UserInfoRow from "../components/UserInfoRow";
import { getResults } from "../state/actions/studentActions";

const DashboardScreen = ({ history }) => {
    const { student, accessToken } = useSelector(
        (state) => state.studentDetails
    );

    const { results, loading, error } = useSelector(
        (state) => state.studentResults
    );

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

    return (
        <div>
            <UserInfoRow
                results={results}
                loading={loading}
                error={error}
                student={student}
            />
            {!loading && results.length > 0 && <LineGraph results={results} />}
        </div>
    );
};

export default DashboardScreen;
