import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { staffApi } from "../config/apiHelper";
import encodeImage from "../utils/imageEncoder";

const StaffRegisterScreen = () => {
	// staff form details
	const [staffInfo, setStaffInfo] = useState({
		fullName: "",
		staffId: "",
		phoneNumber: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	// profile image
	const [profileImage, setProfileImage] = useState(null);

	// for checking registration status and loading to show spinner to user.
	const [registrationStatus, setRegistrationStatus] = useState(false);
	const [loading, setLoading] = useState(false);

	let history = useHistory();

	// For handling the change in values.
	function handleOnChange(e) {
		let updatedInfo = { ...staffInfo };
		updatedInfo[e.target.name] = e.target.value;
		setStaffInfo(updatedInfo);
	}

	// for handling file uploads.
	function handleProfileImageChange(e) {
		if (e.target.files) {
			setProfileImage(e.target.files[0]);
		} else {
			setProfileImage(null);
		}
	}

	// register staff function
	async function registerStaff() {
		setLoading(true);

		if (staffInfo.password === staffInfo.confirmPassword) {
			const staff = {
				...staffInfo,
				image: profileImage && (await encodeImage(profileImage)),
			};
			delete staff.confirmPassword;
			try {
				const { data } = await staffApi.post("", staff);
				console.log(data);
				if (data.fullName) setRegistrationStatus(true);
				setLoading(false);
			} catch (error) {
				console.log(error.response.data);
				setLoading(false);
			}
		} else {
			setLoading(false);
			window.alert("Passwords do not match.");
		}
	}

	// redirecting on successful registration.
	useEffect(() => {
		if (registrationStatus) {
			history.push("/login");
		}
	}, [registrationStatus, history]);
	return loading ? (
		<div className="flex flex-col justify-center items-center min-h-fillHeight">
			<p className="text-3xl py-8">Registering your new Account </p>
			<i className="text-6xl fa-spin fas fa-yin-yang"></i>
		</div>
	) : (
		<div className="flex flex-col my-16 mx-auto md:w-1/2 2xl:w-2/5 px-2 justify-center items-center min-h-fillHeight ">
			<h3 className="text-xl md:text-4xl text-gray-300 text-center">
				REGISTER A NEW ACCOUNT
			</h3>
			<form
				className="flex flex-col w-full my-6 mt-12"
				onSubmit={(e) => {
					e.preventDefault();
					registerStaff();
				}}
			>
				<label className=" md:text-xl text-center">Profile Image</label>
				<div className="inline-block">
					<div
						className={
							"text-center w-52 h-56 bg-gray-800 rounded-sm mt-4 mb-6 mx-auto flex justify-center items-center overflow-hidden"
						}
					>
						{!profileImage ? (
							<i className="text-gray-700 text-10xl fas fa-user"></i>
						) : (
							<img src={URL.createObjectURL(profileImage)} alt="staff" />
						)}
					</div>
				</div>
				<label
					className="md:text-xl transition-colors cursor-pointer bg-gradient-to-b from-blue-700 to-indigo-800 hover:from-blue-900 hover:to-indigo-900 hover:text-gray-100  w-52 md:w-72 h-8 mx-auto mb-4 flex justify-center items-center rounded-sm"
					htmlFor="image-upload"
				>
					<input
						className="md:text-xl mx-auto hidden"
						id="image-upload"
						type="file"
						accept="image/gif, image/jpeg, image/png"
						onChange={handleProfileImageChange}
					/>
					Upload Image
				</label>

				<label className=" md:text-xl" htmlFor="name">
					Full Name:
				</label>
				<input
					className="bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md"
					id="name"
					type="text"
					name="fullName"
					value={staffInfo.fullName}
					onChange={handleOnChange}
					required
				/>
				<label className=" md:text-xl" htmlFor="staffId">
					Staff ID:
				</label>
				<input
					className="bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md"
					id="staffId"
					type="text"
					name="staffId"
					value={staffInfo.staffId}
					onChange={handleOnChange}
					required
				/>
				<label className=" md:text-xl" htmlFor="phoneNumber">
					Phone No:
				</label>
				<input
					className="bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md"
					id="phoneNumber"
					type="text"
					name="phoneNumber"
					value={staffInfo.phoneNumber}
					onChange={handleOnChange}
					required
				/>
				<label className=" md:text-xl" htmlFor="email">
					Email Address:
				</label>
				<input
					className="bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md"
					id="email"
					type="email"
					name="email"
					value={staffInfo.email}
					onChange={handleOnChange}
					required
				/>
				<label className=" md:text-xl " htmlFor="password">
					Password:
				</label>
				<input
					className="bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md"
					id="password"
					type="password"
					name="password"
					value={staffInfo.password}
					onChange={handleOnChange}
					required
				/>
				<label className=" md:text-xl " htmlFor="password">
					Confirm Password:
				</label>
				<input
					className="bg-gray-800 md:text-xl focus:outline-none h-10 mt-3 mb-6 px-2 rounded-md"
					id="confirmPassword"
					type="password"
					name="confirmPassword"
					value={staffInfo.confirmPassword}
					onChange={handleOnChange}
					required
				/>
				<span className="text-sm md:text-lg">
					Already have an account? Sign In{" "}
					<Link
						to="/login"
						className="font-semibold  text-gray-100 hover:text-green-500"
					>
						here.
					</Link>
				</span>
				<span className="text-sm md:text-lg">
					Not a staff member? Student registration{" "}
					<Link
						to="/student-register"
						className="font-semibold  text-gray-100 hover:text-green-500"
					>
						here.
					</Link>
				</span>
				<button
					type="submit"
					className="w-full mt-6 text-gray-100 bg-green-700 hover:bg-green-800 hover:text-white md:text-xl py-2 rounded-sm transition-all focus:outline-none"
				>
					Create New Account
				</button>
			</form>
		</div>
	);
};

export default StaffRegisterScreen;
