import {
    STUDENT_LOGIN_FAIL,
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGOUT,
} from "../types/studentTypes";

export const studentDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case STUDENT_LOGIN_SUCCESS:
            return {
                loading: false,
                accessToken: action.payload.accessToken,
                student: action.payload.student,
            };
        case STUDENT_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case STUDENT_LOGOUT:
            return {
                loading: false,
                accessToken: null,
                student: {},
            };
        default:
            return state;
    }
};
