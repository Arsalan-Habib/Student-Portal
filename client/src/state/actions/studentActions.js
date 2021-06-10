import { studentApi } from "../../config/apiHelper";
import {
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGIN_FAIL,
} from "../types/studentTypes";

export const login = (seatNumber, password) => async (dispatch) => {
    try {
        dispatch({
            type: STUDENT_LOGIN_REQUEST,
        });

        const { data } = await studentApi.post("/login", {
            seatNumber,
            password,
        });

        dispatch({
            type: STUDENT_LOGIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: STUDENT_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
