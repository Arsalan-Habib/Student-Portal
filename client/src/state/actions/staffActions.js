import { staffApi } from "../../config/apiHelper";
import {
	STAFF_LOGIN_REQUEST,
	STAFF_LOGIN_SUCCESS,
	STAFF_LOGIN_FAIL,
	STAFF_LOGOUT,
} from "../types/staffTypes";

// logging in
export const staffLogin = (staffId, password) => async (dispatch) => {
	try {
		dispatch({
			type: STAFF_LOGIN_REQUEST,
		});

		const { data } = await staffApi.post("/login", {
			staffId,
			password,
		});

		dispatch({
			type: STAFF_LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: STAFF_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// logging out
export const staffLogout = () => (dispatch) => {
	try {
		dispatch({
			type: STAFF_LOGOUT,
		});
	} catch (error) {
		console.log(error);
	}
};
