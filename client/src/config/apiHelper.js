import axios from "axios";

export const STUDENT_API_URL = "http://localhost:5000/api/student";
export const STAFF_API_URL = "http://localhost:5000/api/staff";

export const studentApi = axios.create({
	baseURL: STUDENT_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const staffApi = axios.create({
	baseURL: STAFF_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Setting the Auth token for every request
studentApi.defaults.headers.common["Authorization"] = `Bearer Hello`;
