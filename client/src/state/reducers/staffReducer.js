import {
	STAFF_LOGIN_REQUEST,
	STAFF_LOGIN_SUCCESS,
	STAFF_LOGIN_FAIL,
	STAFF_LOGOUT,
} from "../types/staffTypes";

export const staffDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case STAFF_LOGIN_REQUEST:
			return {
				loading: true,
			};
		case STAFF_LOGIN_SUCCESS:
			return {
				loading: false,
				accessToken: action.payload.accessToken,
				staff: action.payload.staff,
			};
		case STAFF_LOGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case STAFF_LOGOUT:
			return {
				loading: false,
				error: null,
				accessToken: null,
				staff: {},
			};
		default:
			return state;
	}
};
