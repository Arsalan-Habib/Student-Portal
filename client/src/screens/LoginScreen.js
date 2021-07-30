import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../state/actions/studentActions";
import { staffLogin } from "../state/actions/staffActions";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = () => {
	// student login credentials
	const [seatNumber, setSeatNumber] = useState("");
	const [password, setPassword] = useState("");

	// staff login credentials, same password field as student.
	const [staffId, setStaffId] = useState("");

	// login form type (student or staff)
	const [loginType, setLoginType] = useState("student");

	const dispatch = useDispatch();
	const { accessToken } = useSelector((state) => state.studentDetails);
	const history = useHistory();

	// toggling form type
	function toggleForm(e) {
		e.preventDefault();
		setLoginType(loginType === "student" ? "staff" : "student");
	}

	// handling student login
	async function handleStudentLogin(e) {
		e.preventDefault();
		dispatch(login(seatNumber, password));
	}

	// handling staff login
	async function handleStaffLogin(e) {
		e.preventDefault();
		dispatch(staffLogin(staffId, password));
	}

	// redirecting if already logged in.
	useEffect(() => {
		if (accessToken) {
			history.push("/");
		}
	}, [accessToken, history]);

	return (
		<div className="flex flex-col md:mt-8 mx-auto md:w-2/5 px-2 justify-center items-center min-h-fillHeight">
			<h3 className="text-xl md:text-4xl text-gray-300 text-center">
				SIGN IN
			</h3>
			{loginType === "student" ? (
				<form
					className="flex flex-col w-full my-6 mt-12"
					onSubmit={handleStudentLogin}
				>
					<label className=" md:text-xl" htmlFor="seatNumber">
						Seat Number:
					</label>
					<input
						className="bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md"
						id="seatNumber"
						type="text"
						value={seatNumber}
						onChange={(e) => {
							setSeatNumber(e.target.value);
						}}
						required
					/>

					<label className=" md:text-xl mt-6" htmlFor="password">
						Password:
					</label>
					<input
						className="bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md"
						id="password"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
					/>
					<span className="text-sm md:text-lg">
						Don't have an account? Sign up
						<Link
							to="/student-register"
							className="font-semibold  text-gray-100 hover:text-green-500 "
						>
							{" "}
							here.
						</Link>
					</span>
					<span className="text-sm md:text-lg">
						Staff or Teacher? Login{" "}
						<button
							type="button"
							onClick={toggleForm}
							className="font-semibold  text-gray-100 hover:text-green-500 focus:outline-none"
						>
							here.
						</button>
					</span>

					<button
						type="submit"
						className="w-full mt-6 text-gray-100 bg-green-700 hover:bg-green-800 hover:text-white md:text-xl py-2 rounded-sm transition-all"
					>
						Login
					</button>
				</form>
			) : (
				<form
					className="flex flex-col w-full my-6 mt-12"
					onSubmit={handleStaffLogin}
				>
					<label className=" md:text-xl" htmlFor="seatNumber">
						Staff ID:
					</label>
					<input
						className="bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md"
						id="staffId"
						type="text"
						value={staffId}
						onChange={(e) => {
							setStaffId(e.target.value);
						}}
						required
					/>

					<label className=" md:text-xl mt-6" htmlFor="password">
						Password:
					</label>
					<input
						className="bg-gray-800 md:text-xl focus:outline-none h-10 my-2 md:my-3 px-2 rounded-md"
						id="password"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
					/>
					<span className="text-sm md:text-lg">
						Don't have an account? Sign up
						<Link
							to="/staff-register"
							className="font-semibold  text-gray-100 hover:text-green-500 "
						>
							{" "}
							here.
						</Link>
					</span>
					<span className="text-sm md:text-lg">
						Student? Login{" "}
						<button
							type="button"
							onClick={toggleForm}
							className="font-semibold  text-gray-100 hover:text-green-500 focus:outline-none"
						>
							here.
						</button>
					</span>
					<button
						type="submit"
						className="w-full mt-6 text-gray-100 bg-green-700 hover:bg-green-800 hover:text-white md:text-xl py-2 rounded-sm transition-all"
					>
						Login
					</button>
				</form>
			)}
		</div>
	);
};

export default LoginScreen;
