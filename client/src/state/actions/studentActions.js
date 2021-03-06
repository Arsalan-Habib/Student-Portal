import { studentApi } from "../../config/apiHelper";
import { STAFF_LOGOUT } from "../types/staffTypes";
import {
	STUDENT_LOGIN_REQUEST,
	STUDENT_LOGIN_SUCCESS,
	STUDENT_LOGIN_FAIL,
	STUDENT_LOGOUT,
	GET_RESULTS_REQUEST,
	GET_RESULTS_SUCCESS,
	GET_RESULTS_FAIL,
} from "../types/studentTypes";

// logging in
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

// logging out, handles logout for both student or staff.
export const logout = () => (dispatch) => {
	try {
		dispatch({
			type: STUDENT_LOGOUT,
		});
		dispatch({
			type: STAFF_LOGOUT,
		});
	} catch (error) {
		console.log(error);
	}
};

// getting courses
export const getResults = (seatNumber) => async (dispatch) => {
	try {
		dispatch({
			type: GET_RESULTS_REQUEST,
		});

		const { data } = await studentApi.get(`/courses/${seatNumber}`);
		if (data.courses) {
			dispatch({
				type: GET_RESULTS_SUCCESS,
				payload: data.courses,
			});
		}
	} catch (error) {
		dispatch({
			type: GET_RESULTS_FAIL,
			payload: error.response.data.message,
		});
	}
};
